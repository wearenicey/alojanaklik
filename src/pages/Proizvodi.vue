<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
					<div class="grid gap-md margin-bottom-sm@md">
						<div class="text-component col-12 col-8@md">
							<h1 class="line-height-1 color-accent-dark">Forever Living proizvodi</h1>
						</div>

						<div class="text-component col-12 col-8@md margin-bottom-0">
							<p class="color-accent-dark">
								Otkrijte najpopularnije Forever proizvode i spoznajte kako Vam
								mogu pomoći da danas izgledate bolje i osećate se bolje.
							</p>
						</div>
					</div>
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm radius-lg display@md"
            src="~/assets/img/jacanjeimuniteta.jpg"
          ></g-image>
        </div>
      </div>
      <Card :products="$page.products.edges" />
    </section>
  </Layout>
</template>

<!-->GraphQL upit za sve proizvode <-->
<page-query>
query {
 products: allProizvodi {
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
// importovanje komponente
import Card from "~/components/Card.vue";
export default {
	//meta deskripcija
  metaInfo: {
    title: "Jačanje imuniteta",
    meta: [
      {
        name: "title",
        content: "Jačanje imuniteta | Proizvodi na bazi aloje vere ",
      },
      {
        name: "description",
        content:
          "Ojačajte svoj imuni sistem korišćenjem proizvoda na bazi aloje vere. Poboljšajte odbrambeni sistem svog tela za bolju zaštitu od bolesti. Naručite i platite pouzećem!",
      },
    ],
  },

//pozivanje komponente
  components: {
    Card,
  },
	
	//CodyHouse javascript UI
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
