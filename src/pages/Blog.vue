<template>
  <Layout>
    <div class="articles padding-top-xl margin-bottom-xxl">
      <div class="container max-width-adaptive-lg">
        <div class="projects">
          <CardItem
            v-for="edge in loadedPosts"
            :key="edge.node.id"
            :record="edge.node"
          />
        </div>
        <div class="margin-y-lg text-center">
          <button
            class="btn btn--subtle"
            v-if="showMoreEnabled"
            @click="infiniteHandler"
          >
            Prikazi vise
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  entries: allBlog(perPage: 3, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
    edges {
    node {
      id
      title
      excerpt
      image
      timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
        tags {
          title
        }
        author {
          id
          name
          image
        }
        
      }
        
    }

  }

}
</page-query>

<script>
import CardItem from "~/components/CardItem.vue";

export default {
  components: {
    CardItem,
  },

  data() {
    return {
      loadedPosts: [],
      currentPage: 1,
      showMoreEnabled: true,
    };
  },

  created() {
    this.loadedPosts.push(...this.$page.entries.edges);
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

  methods: {
    async infiniteHandler() {
      const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
      if (data.entries.edges.length) {
        this.currentPage = data.entries.pageInfo.currentPage;
        this.loadedPosts.push(...data.entries.edges);
        this.showMoreEnabled = this.currentPage;
      } else {
        this.showMoreEnabled = false;
      }
    },
  },
};
</script>