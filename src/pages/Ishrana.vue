<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm"
            src="~/assets/img/ishrana.jpg"
          ></g-image>
          <div class="grid gap-md justify-between@md">
            <div class="text-component col-6@md">
              <h1>Ishrana</h1>
            </div>

            <div class="text-component col-5@md">
              <p class="color-contrast-medium">
                Misija Forevera je da vam pruži alate i znanje za postizanje
                vaših zdravstvenih ciljeva. Izbor dodataka u ishrani su tu da
                Vam pomognu da podržite zdravu ishranu, bez obzira u kojoj ste
                fazi života ili koliko puta dnevno volite da jedete! Izvrsna
                ponuda vitaminsko-mineralnih dodataka kada dođe vreme za obrok
                ili užinu.
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
 products: allProizvodi (filter: {kategorija: {eq:"ishrana"}}) {
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
    title: "Jačanje imuniteta",
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