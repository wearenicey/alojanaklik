<template>
  <Layout>
    <!-- <div
      class="typeform-widget"
      data-url="https://form.typeform.com/to/usFgO7I6?typeform-medium=embed-snippet"
      style="width: 100%; height: 500px"
    ></div> -->

    <div class="container max-width-adaptive-lg margin-top-xl">
      <div
        class="typeform-widget"
        data-url="https://form.typeform.com/to/usFgO7I6?typeform-medium=embed-snippet"
        style="width: 100%; height: 500px"
      ></div>
      <div class="grid gap-md">
        <div
          class="col-4@md"
          v-for="page in $page.allGoogleSheet.edges"
          :key="page.id"
        >
          <div class="card-v5">
            <a
              href="napici.path"
              class="card-v5__img-link"
              aria-label="Description of the link"
            >
              <figure class="card-v5__img">
                <!-- <g-image :src="page.node.imgOne" alt="Card preview img" /> -->
                <g-image
                  :src="require(`!!assets-loader!@img/${page.node.imgOne}`)"
                  alt="Card preview img"
                />
              </figure>
            </a>

            <div class="card-v5__content">
              <div class="text-component">
                <h3>{{ page.node.title }}</h3>
                <p>{{ page.node.textOne }}</p>
                <p>
                  <button
                    @click="$router.push(`/napici/${page.node.id}`)"
                    class="btn btn--primary btn--sm"
                  >
                    Procitaj vise
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  allGoogleSheet {
    edges {
      node {
        id
        title
        subtitle
        imgOne
        link
        textOne
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
