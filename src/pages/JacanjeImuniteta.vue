<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content padding-top-xxl">
        <div class="container max-width-adaptive-lg">
					<div class="grid gap-md margin-bottom-sm@md">
						<div class="text-component col-12 col-8@md">
							<h1 class="line-height-1 color-accent-dark">Jačanje imuniteta</h1>
						</div>

						<div class="text-component col-12 col-8@md margin-bottom-0">
							<p class="color-accent-dark">
								Forever Living asortiman proizvoda pomoći će vam u borbi protiv
								infekcija i bolesti. Ovi proizvodi sadrže najkorisnije vitamine,
								minerale i biljne ekstrakte, a sve u cilju jačanja odbrambenog
								sistema vašeg tela.
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


<page-query>
query {
 products: allProizvodi (filter: {category:{contains: ["imunitet"]} })    {
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
    title: "Jačanje imuniteta | Proizvodi na bazi aloje vere Forever Living",
    meta: [
      {
        name: "title",
        content: "Jačanje imuniteta | Proizvodi na bazi aloje vere Forever Living",
      },
      {
        name: "description",
        content:
          "Ojačajte svoj imuni sistem korišćenjem proizvoda na bazi aloje vere. Poboljšajte odbrambeni sistem svog tela za bolju zaštitu od bolesti. Naručite i platite pouzećem!",
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
