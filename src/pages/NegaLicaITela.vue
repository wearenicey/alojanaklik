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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                suscipit voluptatem? Consequatur cupiditate, iure, corporis
                ducimus natus velit fugiat pariatur nisi officia aspernatur sit?
                Dolores iste nobis nam repellat maxime.
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
 products: allEvent (filter: {category: {eq:"negaLicaTela"}}) {
    edges {
      node {
        id
        title
        subtitle
        link
        textOne
        path
        imgOne{
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