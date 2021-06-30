<template>
  <Layout>
    <div class="articles padding-top-xl margin-bottom-xxl">
      <div class="container max-width-adaptive-lg">
        <div class="text-component text-center margin-bottom-xl">
          <h1>{{ $page.tag.title }}</h1>
        </div>
        <div class="grid gap-md">
          <div
            class="col-4@md"
            v-for="post in $page.tag.belongsTo.edges"
            :key="post.node.id"
          >
            <div class="card-v5">
              <a
                :href="post.node.path"
                class="card-v5__img-link"
                aria-label="Description of the link"
              >
                <figure class="card-v5__img">
                  <!-- <g-image :src="page.node.imgOne" alt="Card preview img" /> -->
                  <g-image
                    :src="require(`!!assets-loader!@img/${post.node.image}`)"
                    alt="Card preview img"
                  />
                </figure>
              </a>

              <div class="padding-top-sm">
                <div class="text-component">
                  <h3>{{ post.node.title }}</h3>
                  <p>{{ post.node.excerpt }}</p>
                </div>
                <div>
                  <a
                    :href="post.node.path"
                    class="margin-top-sm link-fx-1 color-contrast-higher"
                    ><span>Pročitaj više </span>
                    <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="16" cy="16" r="15.5" />
                        <line x1="10" y1="18" x2="16" y2="12" />
                        <line x1="16" y1="12" x2="22" y2="18" />
                      </g></svg
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            excerpt
            image
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    };
  },
};
</script>