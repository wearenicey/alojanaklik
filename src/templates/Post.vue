<template>
	<Layout>
		<article class="padding-y-xxl">


			<header class="container max-width-xs margin-bottom-lg">
				<div
					class="
            text-component text-center
            line-height-lg
            v-space-md
            margin-bottom-md
          "
				>
					<h1>{{ $page.post.title }}</h1>
					<p class="color-contrast-medium text-md">{{ $page.post.excerpt }}</p>
				</div>

				<div class="flex justify-center">
					<div class="author__content text-component v-space-xxs">
						<!-- <p class="text-sm color-contrast-medium">
              <time class="text-sm color-inherit" :datetime="$page.post.datetime">{{ $page.post.humanTime }}</time
              >&mdash; {{ $page.post.timeToRead }} min čitanja
            </p> -->
					</div>
				</div>
			</header>

			<figure class="container max-width-md margin-bottom-lg">
				<g-image :src="require(`!!assets-loader!@img/${$page.post.image}`)" class="width-100% radius-lg" :alt="$page.post.alt"></g-image>
			</figure>

			<div class="container max-width-adaptive-xl">
				<div class="grid gap-md justify-center">
					<div class="col-6@lg">
						<VueRemarkContent />
					</div>
					<div class="col-3@md">
						<div class="stories">
							<h3 class="stories__legend">Slični tekstovi</h3>

							<ol class="stories__list">
								<li v-for="post in $static.recommendedPosts.edges" :key="post.node.id" class="stories__story">
									<figure>
										<img :src="require(`@/assets/img/` + post.node.image)" alt="" class="radius-md" width="80px" height="auto" />
									</figure>
									<g-link class="margin-left-sm text-decoration-none" :to="post.node.path">{{ post.node.title }}</g-link>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</article>
	</Layout>
</template>

<!-- GraphQl upit za blog postove <-->
<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
    path
      title
      image
      alt
      image_caption
      tagsMeta
      recommended
      excerpt
      imageTwo {
        path
        alt
      }
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss")
    }
  }
</page-query>

<static-query>
  query RecommendedPosts {
    recommendedPosts: allPost(filter: {recommended: {eq: true}}, limit: 3) {
      edges {
        node {
          id
          title
          image
          path
        }
      }
    }
  }
  </static-query>

<script>
export default {
	//meta desc dinamicni
	metaInfo() {
		return {
			title: this.$page.post.title + " - Aloja Vera",
			titleTemplate: this.$page.post.title + " - Aloja Vera",

			meta: [
				{ name: "description", content: this.$page.post.tagsMeta },

				{
					key: "og:image",
					property: "og:image",
					content: "https://alojanaklik.rs" + this.$page.post.imageTwo.path
				},
				{
					key: "og:title",
					name: "og:title",
					content: this.$page.post.title + " - Aloja Vera"
				},

				{
					key: "og:type",
					name: "og:type",
					content: "article"
				},

				{
					key: "og:description",
					name: "og:description",
					content: this.$page.post.tagsMeta
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: this.$page.post.title + " - Aloja Vera"
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: this.$page.post.tagsMeta
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
	data: function() {
		return {
			api_url: "https://alojanaklik.rs/",
			facebook: "http://www.facebook.rs/sharer/sharer.php?u="
		};
	},

	//CodyHouse javascript UI
	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");

		document.body.appendChild(frontEnd);
	},
	destroyed() {
		document.getElementById("main-header-js").remove();
	}
}

// 	data() {
// 		return {
// 			showModal: false,
// 			modalData: {
// 				headline: "Otkrijte Zdraviji Životni Stil",
// 				paragraph: "Da li ste spremni za započinjanje puta ka boljem zdravlju i blagostanju? Pratite nas na Instagramu za svakodnevnu inspiraciju, vredne savete i stručne smernice od vodećih zdravstvenih stručnjaka.",
// 				image: "/assets/img/slika-3.jpg"
// 			}
// 		};
// 	},
// 	mounted() {
// 		setTimeout(() => {
// 			this.showModal = true;
// 		}, 6000);
// 	},
// 	methods: {
// 		closeModal() {
// 			this.showModal = false;
// 		},
// 		followOnInstagram() {
// 		}
// 	}
// };

</script>

<style>
/* CSS styles for the modal */
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}

.modal-content {
	width: 512px;
	height: auto;
	background-color: #fff;
	margin: 24px;
	padding: 48px;
	border-radius: 16px;
	position: relative;
}

.close-icon {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	font-size: 24px;
}

/* Additional styles for the rest of your blog posts */
</style>
