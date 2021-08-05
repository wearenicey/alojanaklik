<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
					<div class="grid gap-md margin-bottom-sm@md">
						<div class="text-component col-12 col-8@md">
							<h1 class="line-height-1 color-accent-dark">Lična higijena</h1>
						</div>

						<div class="text-component col-12 col-8@md margin-bottom-0">
							<p class="color-accent-dark">
								Kompanija se fokusira na nežno negovanje nečijeg zdravlja
								kombinacijom gela aloe vere iz domaćeg uzgoja i drugih
								visokokvalitetnih sastojaka u njihovoj paleti proizvoda za negu
								kože, nege, oralne higijene i lepote - a sve bez jakih
								hemikalija ili sintetičkih mirisa
							</p>
						</div>
					</div>
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm radius-lg display@md"
            src="~/assets/img/licnahigijena.jpg"
          ></g-image>
        </div>
      </div>
      <Card :products="$page.products.edges" />
    </section>
  </Layout>
</template>


<page-query>
query {
 products: allProizvodi (filter: {category:{contains: ["licnaHigijena"]} }) {
  edges {
      node {
        id
        h1Hero
        path
        sekcija2Slika{
            url
          }
      }
    }

}
}
</page-query>


<script>
import Card from "~/components/Card.vue";
export default {
  metaInfo: {
    title: "Lična higijena | Proizvodi na bazi aloje vere Forever Living",
    meta: [
      {
        name: "title",
        content: "Lična higijena | Proizvodi na bazi aloje vere Forever Living",
      },
      {
        name: "description",
        content:
          "Forever je prirodna i organska kompanija za negu kože. Njihova misija je da koriste samo najkvalitetnije sastojke u svim svojim proizvodima koji su napravljeni od biljke Aloe Vere, uzgajane na njihovim poljima.",
      },
    ],
  },

  components: {
    Card,
  },
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
};
</script>
