<template>
  <Layout>
    <article class="t-article-v3 padding-bottom-lg">
      <div
        class="t-article-v3__hero margin-bottom-lg"
        v-bind:style="{
          'background-image': 'url(' + $page.post.imageTwo.path.src + ')',
        }"
      >
        <div class="container max-width-adaptive-sm">
          <div class="t-article-v3__intro-text text-component text-center">
            <h1 class="text-xxxl color-inherit">
              {{ $page.post.title }}
            </h1>
            <time
              class="text-sm color-inherit"
              :datetime="$page.post.datetime"
              >{{ $page.post.humanTime }}</time
            >
          </div>
        </div>
      </div>

      <div class="container max-width-adaptive-sm margin-bottom-xl">
        <div
          class="text-component line-height-lg v-space-md"
          v-html="$page.post.content"
        ></div>
      </div>
    </article>
  </Layout>
</template>


<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
      title
      image
      image_caption
      excerpt
      imageTwo {
        
      path     
      alt
    
      }
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      
      timeToRead
      tags {
        id
        title
      }
     
      author {
        id
        name
        image
        path
        bio
      }
    }

   

    
  }
</page-query>

<script>
export default {
  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    document.body.appendChild(frontEnd);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
  },
};
</script>