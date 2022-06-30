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
						<p class="text-sm color-contrast-medium">
							<time class="text-sm color-inherit" :datetime="$page.post.datetime">{{ $page.post.humanTime }}</time
							>&mdash; {{ $page.post.timeToRead }} min
						</p>
					</div>
				</div>
			</header>

			<figure class="container max-width-md margin-bottom-lg">
				<g-image :src="require(`!!assets-loader!@img/${$page.post.image}`)" class="width-100%"></g-image>
			</figure>

			<div class="container max-width-adaptive-sm">
				<div class="text-component line-height-lg v-space-md" v-html="$page.post.content"></div>
			</div>

			<div class="container max-width-adaptive-sm">
				<a class="banner" href="#0" aria-label="Shop Now">
					<div class="grid flex-row-reverse@md">
						<div class="col-6@md overflow-hidden" aria-hidden="true">
							<div class="banner__figure width-100%" style="background-image: url(../../../app/assets/img/banner-img-1.jpg);"></div>
						</div>

						<div class="col-6@md">
							<div class="text-component text-space-y-md height-100% flex flex-column padding-md padding-lg@md">
								<h2>Kitchen</h2>
								<p class="margin-top-sm margin-top-md@md">
									<span class="banner__link"><i>Shop Now</i></span>
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</article>
	</Layout>
</template>

<!-- GraphQl upit za blog postove <-->
<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
      title
      image
      image_caption
      excerpt
      imageTwo {
        path
        alt
      }
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss")

      timeToRead
      tags {
        id
        title
      }
    }
  }
</page-query>

<script>
export default {
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
};
</script>
