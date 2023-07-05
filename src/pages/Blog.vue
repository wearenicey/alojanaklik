<template>
	<Layout>
		<div class="articles padding-top-xxl margin-bottom-xxl">
			<div class="container max-width-adaptive-lg"></div>
			<div class="text-center">
				<h1 class="text-xxl">Blog - Aloja Vera</h1>
			</div>
		</div>
		<div class="container max-width-adaptive-lg">
			<div>
				<transition-group class="projects" name="fade">
					<CardItem v-for="{ node } in loadedPosts" :key="node.id" :record="node" />
				</transition-group>
			</div>

			<div class="margin-y-lg text-center">
				<button class="btn btn--subtle" v-if="showMoreEnabled" @click="loadMore">
					Prikaži više
				</button>
			</div>
		</div>
	</Layout>
</template>
<!-- GraphQl call to get all blog post with pagination -->
<page-query>
	query Posts ($page: Int) {
		entries: allPost (perPage: 7, page: $page, sortBy: "created", order: DESC) @paginate {
			pageInfo {
				totalPages
				currentPage
				isLast
			}
			edges {
				node {
					id
					title
					excerpt
					path
					image
					imageTwo {
						path
						alt
					}
					featured
					humanTime: created(format: "DD. MM. YYYY.")
					datetime: created
	
					tags {
						title
					}
				}
			}
		}
	}
	</page-query>


<script>
// import component
import CardItem from "~/components/CardItem.vue";

export default {
	metaInfo() {
		// meta deskripcija
		return {
			title: "Blog - Aloja Vera",
			titleTemplate: "Blog - Aloja Vera",
			meta: [
				{
					name: "description",
					content: "Korisni tekstovi o proizvodima od aloje vere. Članci u kojima ćete naći informacije o ishrani, zdravlju i našim proizvodima. Kontaktirajte nas i ostvarite popuste."
				},
				{
					name: "og:image",
					content: "https://www.alojanaklik.rs/assets/static/pocetna-kartica-1.71307f6.c41812ecc77912f15e9cd0d465c2cdf6.jpg"
				}
			]
		};
	},

	// call component
	components: {
		CardItem
	},

	data() {
		//povratni novi objekti
		return {
			loadedPosts: [],
			currentPage: 1,
			showMoreEnabled: true
		};
	},

	//poziva se sinhrono nakon kreiranja instance
	created() {
		this.loadedPosts.push(...this.$page.entries.edges);
	},

	//pozivanje codyehouse scripti
	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");

		document.body.appendChild(frontEnd);
		// 👈 load the JS code once the component is mounted
	},
	destroyed() {
		document.getElementById("main-header-js").remove();

		// remove the JS code once the component has been destroyed
	},

	methods: {
		// funkcija za ucitavanje load more posts
		async loadMore() {
			if (this.currentPage + 1 > this.$page.entries.pageInfo.totalPages) {
				this.showMoreEnabled = false;
			} else {
				const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
				if (data.entries.edges.length) {
					this.currentPage = data.entries.pageInfo.currentPage;

					this.loadedPosts.push(...data.entries.edges);
				} else {
					this.showMoreEnabled = false;
				}
			}
		}
	}
};
</script>
