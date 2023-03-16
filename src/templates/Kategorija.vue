<template>
	<Layout>
		<section class="bg-cover bg-center bg-no-repeat" v-bind:style="{ backgroundImage: 'url(' + $page.category.slikaKategorije[0].url + ')' }">
			<div class="padding-y-xl items-center">
				<div class="container max-width-adaptive-lg">
					<div class="text-component padding-top-sm">
						<h1 class="color-black">{{ $page.category.ime }}</h1>
						<p class="color-black max-width-adaptive-sm">
							{{ $page.category.opisKategorije }}
						</p>
						<a href="#targetId" class="btn btn-contrast js-smooth-scroll color-black border border-2 border-contrast-low border-opacity-50%" data-duration="300">Saznajte više </a>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div id="targetId" class="container max-width-adaptive-lg padding-top-xl">
				<div class="grid gap-md">
					<div class="card col-4@md col-6" v-for="(category, index) in $page.category.aloja">
						<a class="text-decoration-none" :href="category.path">
							<figure class="card__img padding-x-md@md padding-top-md@md padding-x-sm padding-top-sm">
								<g-image class="radius-lg" :src="require(`@/assets/img/` + category.imageUrl[0])" />
							</figure>

							<div class="card__content">
								<div class="text-component">
									<h4>{{ category.ctaText }}</h4>
									<p class="color-black">{{ category.cena }} RSD</p>
								</div>

								<div class="margin-top-sm">
									<a class="btn btn--primary btn--sm flex flex-grow" :href="category.path"
										>Saznajte vise
										<!--<span> <g-image class="margin-left-sm flex items-center" src="~/assets/img/strelica.svg"></g-image></span> -->
									</a>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>

<page-query>

	query Kategorija ($id: ID!) {
	category: kategorija(id: $id) {

		pageTitle
		metaDesc
		id
    ime
    opisKategorije
    slikaKategorije{
      url
    }
    aloja {
			imageUrl
      ctaText
      path
      cena
      image{
        url
      }
		}
	}
}

</page-query>
<script>
export default {
	// meta deskripcija
	metaInfo() {
		return {
			title: this.$page.category.pageTitle + " | Aloja proizvodi",
			titleTemplate: this.$page.category.pageTitle + " | Aloja proizvodi",
			meta: [{ key: "description", name: "description", content: this.$page.category.metaDesc }]
		};
	},
	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../../../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");
		// 👈 load the JS code once the component is mounted

		document.body.appendChild(frontEnd);
	},
	destroyed() {
		document.getElementById("main-header-js").remove();
	}
};
</script>
