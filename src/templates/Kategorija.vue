<template>
	<Layout>
		<section class="has-section-divider-bottom bg-cover bg-center bg-no-repeat" v-bind:style="{ backgroundImage: 'url(' + $page.category.slikaKategorije[0].url + ')' }">
			<div class="padding-y-xxl">
				<div class="container max-width-adaptive-lg">
					<div class="text-component">
						<h1 class="color-white">{{$page.category.ime}}</h1>
						<p class="color-white max-width-adaptive-sm">
							{{$page.category.opisKategorije}}
						</p>
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
			title: this.$page.category.pageTitle,
			titleTemplate: this.$page.category.pageTitle,
			meta: [{ name: "description", content: this.$page.category.metaDesc }],
			// link: [{ rel: "canonical", href: `https://www.alojanaklik.rs/proizvodi` }],
			// etc...
		};
	},
};
</script>