<template>
  <Layout>
    <section class="feature-v8 padding-bottom-xxl">
      <div class="feature-v8__main-content bg-contrast-lower padding-top-xxl">
        <div class="container max-width-adaptive-lg">
					<div class="grid gap-md margin-bottom-sm@md">
						<div class="text-component col-12 col-8@md">
							<h1 class="line-height-1 color-accent-dark">Ishrana</h1>
						</div>

						<div class="text-component col-12 col-8@md margin-bottom-0">
							<p class="color-accent-dark">
								Misija Forevera je da vam pruži alate i znanje za postizanje
								vaših zdravstvenih ciljeva. Izbor dodataka u ishrani su tu da
								Vam pomognu da podržite zdravu ishranu, bez obzira u kojoj ste
								fazi života ili koliko puta dnevno volite da jedete! Izvrsna
								ponuda vitaminsko-mineralnih dodataka kada dođe vreme za obrok
								ili užinu.
							</p>
						</div>
					</div>
          <g-image
            class="block width-100% height-100% object-cover margin-bottom-sm radius-lg display@md"
            src="~/assets/img/ishrana.jpg"
          ></g-image>
        </div>
      </div>
      <Card :products="$page.products.edges" />
    </section>
  </Layout>
</template>


<page-query>
query {
 products: allProizvodi (filter: {category:{contains: ["ishrana"]} })  {
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
