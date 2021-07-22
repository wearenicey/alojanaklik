<template>
  <Layout>
    <div class="container max-width-adaptive-lg margin-top-xl">
      <div class="grid gap-md">
        <div
          class="col-4@md"
          v-for="edge in $page.allProizvodi.edges"
          :key="edge.node.id"
        >
          <h3>{{ edge.node.h1Hero }}</h3>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query {
   allProizvodi {
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
export default {
  name: "Pricing",
};
</script>