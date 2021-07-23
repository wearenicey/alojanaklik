<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm"
            src="~/assets/img/negalicaitela.jpg"
          ></g-image>
          <div class="grid gap-md justify-between@md">
            <div class="text-component col-6@md">
              <h1>Nega Lica i Tela</h1>
            </div>

            <div class="text-component col-5@md">
              <p class="color-contrast-medium">
                Za mnoge je lična nega često način da pobegnu od svakodnevnog
                stresa i ostave iza sebe bilo kakve brige. Forever Living razume
                ovu potrebu za opuštanjem u svetu koji je konstantno dinamičan.
                Zbog toga su kombinovali prirodne sastojke sa gelom aloe vere,
                tako da možete iskusiti svoj spa dan bez obzira gde se nalazite!
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
 products: allProizvodi (filter: {kategorija: {eq:"negaLicaTela"}}) {
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
    title: "Nega lica i tela | Proizvodi na bazi aloje vere",
    meta: [
      {
        name: "title",
        content: "Nega lica i tela | Proizvodi na bazi aloje vere",
      },
      {
        name: "description",
        content:
          "Proizvedeni u Americi, ovi nežni proizvodi nisu efikasni samo u borbi protiv bora već i sa aloe verom kao svojim osnovnim sastojkom pomažu i u održavanju kože mekom i vlažnom tokom celog dana!",
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