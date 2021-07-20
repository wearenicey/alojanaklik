<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm"
            src="~/assets/img/jacanjeimuniteta.jpg"
          ></g-image>
          <div class="grid gap-md justify-between@md">
            <div class="text-component col-6@md">
              <h1>Forever Living proizvodi</h1>
            </div>

            <div class="text-component col-5@md">
              <p class="color-contrast-medium">
                Ojačajte svoj imuni sistem korišćenjem proizvoda na bazi aloje
                vere. Poboljšajte odbrambeni sistem svog tela za bolju zaštitu
                od bolesti. Naručite i platite pouzećem!
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
 products: allEvent {
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