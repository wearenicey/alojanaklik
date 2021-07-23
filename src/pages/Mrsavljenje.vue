<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm"
            src="~/assets/img/mrsavljenje.jpg"
          ></g-image>
          <div class="grid gap-md justify-between@md">
            <div class="text-component col-6@md">
              <h1>Mršavljenje</h1>
            </div>

            <div class="text-component col-5@md">
              <p class="color-contrast-medium">
                Ako želite da smršate, paleta proizvoda kompanije Forever pomoći
                će vam da ispunite svoje ciljeve. Svima kome je potrebna pomoć
                kako bi dobili telo koje su oduvek želeli. Počnite još danas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card :products="$page.products.edges" />
    </section>
  </Layout>
</template>


<page-query>
query {
 products: allProizvodi (filter: {kategorija: {eq:"mrsavljenje"}}) {
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
    title: "Mršavljenje | Proizvodi na bazi aloje vere",
    meta: [
      {
        name: "title",
        content: "Mršavljenje | Proizvodi na bazi aloje vere",
      },
      {
        name: "description",
        content:
          "Moćni proizvodi za kontrolu telesne težine pomaže vam da postignete svoje fitnes ciljeve na održiv i zdrav način kako biste izgledali i osećali se najbolje, bez obzira na nivo vaše kondicije.",
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