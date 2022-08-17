<template>
	<Layout>
		<div class="articles padding-top-xxl margin-bottom-xxl">
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
		</div>
	</Layout>
</template>
<!-- GraphQl call to get all blog post with pagination -->
<page-query>
query Posts ($page: Int) {
  entries: allPost (perPage: 7, page: $page) @paginate {
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
      timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
        tags {
          title
          path
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
		return {
			title: this.$page.post.title + " - Forever Living proizvodi",
			titleTemplate: this.$page.post.title + " - Forever Living proizvodi",

			meta: [
				{ name: "description", content: this.$page.post.metaDesc },

				{
					key: "og:image",
					property: "og:image",
					content: "https://alojanaklik.rs" + this.$page.post.imageTwo.path
				},
				{
					key: "og:title",
					name: "og:title",
					content: this.$page.post.title + " - Forever Living proizvodi"
				},

				{
					key: "og:type",
					name: "og:type",
					content: "article"
				},

				{
					key: "og:description",
					name: "og:description",
					content: this.$page.post.metaDesc
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: this.$page.post.title + " - Forever Living proizvodi"
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: this.$page.post.metaDesc
				},
				{
					key: "twitter:image",
					property: "twitter:image",
					content: "https://alojanaklik.rs" + this.$page.post.imageTwo.path
				}
			]

			// etc...
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
