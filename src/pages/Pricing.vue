<template>
  <Layout>
    <div class="container max-width-adaptive-lg margin-top-xl">
      <div class="grid gap-md">
        <div
          class="col-4@md"
          v-for="edge in $page.allEvent.edges"
          :key="edge.node.id"
        >
          <h3>{{ edge.node.title }}</h3>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query {
  allEvent {
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
export default {
  name: "Pricing",
};
</script>