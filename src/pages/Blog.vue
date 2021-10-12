<template>
  <Layout>
    <div class="articles padding-top-xxl margin-bottom-xxl">
      <div class="container max-width-adaptive-lg">
        <div>
          <transition-group class="projects" name="fade">
            <CardItem
              v-for="{ node } in loadedPosts"
              :key="node.id"
              :record="node"
            />
          </transition-group>
        </div>

        <div class="margin-y-lg text-center">
          <button
            class="btn btn--subtle"
            v-if="showMoreEnabled"
            @click="loadMore"
          >
            Prikazi vise
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  entries: allPost (perPage: 5, page: $page) @paginate {
     pageInfo {
      totalPages
      currentPage
      isLast
    }
    edges {
    node {
      id
      title
      excerpt
      path
      image
      imageTwo {
        
      path     
      alt
    
      }
      timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
        tags {
          title
          path
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
    async loadMore() {
      if (this.currentPage + 1 > this.$page.entries.pageInfo.totalPages) {
        this.showMoreEnabled = false;
      } else {
        const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
        if (data.entries.edges.length) {
          this.currentPage = data.entries.pageInfo.currentPage;

          this.loadedPosts.push(...data.entries.edges);
        } else {
          this.showMoreEnabled = false;
        }
      }
    },
  },
};
</script>