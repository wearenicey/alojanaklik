<template>
  <div class="container max-width-adaptive-lg margin-top-xl">
    <div class="grid gap-md">
      <div
        class="col-4@md"
        v-for="edge in $static.allEvent.edges"
        :key="edge.node.id"
      >
        <div class="card-v5">
          <a
            :href="edge.node.path"
            class="card-v5__img-link"
            aria-label="Description of the link"
          >
            <figure class="card-v5__img">
              <!-- <g-image :src="page.node.imgOne" alt="Card preview img" /> -->
              <img :src="edge.node.imgOne[0].url" alt="Card preview img" />
            </figure>
          </a>

          <div class="card-v5__content">
            <div class="text-component">
              <h3>{{ edge.node.title }}</h3>
              <p>{{ edge.node.textOne }}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<static-query>
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
</static-query>

<script>
export default {
  name: "Card",
};
</script>