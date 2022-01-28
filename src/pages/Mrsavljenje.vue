<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
					<div class="grid gap-md margin-bottom-sm@md">
						<div class="text-component col-12 col-8@md">
							<h1 class="line-height-1 color-accent-dark">Mršavljenje</h1>
						</div>

						<div class="text-component col-12 col-8@md margin-bottom-0">
							<p class="color-accent-dark">
								Ako želite da smršate, paleta proizvoda kompanije Forever pomoći
								će vam da ispunite svoje ciljeve. Svima kome je potrebna pomoć
								kako bi dobili telo koje su oduvek želeli. Počnite još danas.
							</p>
						</div>
					</div>
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm radius-lg display@md"
            src="~/assets/img/mrsavljenje.jpg"
          ></g-image>
        </div>
      </div>
      <Card :products="$page.products.edges" />
    </section>
  </Layout>
</template>

<!--->GraphQl upit za kolekciju mrsavljenje <--->
<page-query>
query {
 products:  allProizvodi (filter: {category:{contains: ["mrsavljenje"]} }) {
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
// importovanje komponenti
import Card from "~/components/Card.vue";

export default {
	//meta deskripcija
  metaInfo: {
    title: "Mršavljenje | Proizvodi na bazi aloje vere Forever Living",
    meta: [
      {
        name: "title",
        content: "Mršavljenje | Proizvodi na bazi aloje vere Forever Living",
      },
      {
        name: "description",
        content:
          "Moćni proizvodi za kontrolu telesne težine pomaže vam da postignete svoje fitnes ciljeve na održiv i zdrav način kako biste izgledali i osećali se najbolje, bez obzira na nivo vaše kondicije.",
      },
    ],
  },

//pozivanje komponenti
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
