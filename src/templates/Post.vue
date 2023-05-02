<template>
  <Layout>
    <article class="padding-y-xxl">
      <header class="container max-width-xs margin-bottom-lg">
        <div
          class="
            text-component text-center
            line-height-lg
            v-space-md
            margin-bottom-md
          "
        >
          <h1>{{ $page.post.title }}</h1>
          <p class="color-contrast-medium text-md">{{ $page.post.excerpt }}</p>
        </div>

        <div class="flex justify-center">
          <div class="author__content text-component v-space-xxs">
            <!-- <p class="text-sm color-contrast-medium">
              <time class="text-sm color-inherit" :datetime="$page.post.datetime">{{ $page.post.humanTime }}</time
              >&mdash; {{ $page.post.timeToRead }} min čitanja
            </p> -->
          </div>
        </div>
      </header>

      <figure class="container max-width-md margin-bottom-lg">
        <g-image :src="require(`!!assets-loader!@img/${$page.post.image}`)" class="width-100%" :alt="$page.post.alt"></g-image>
      </figure>

      <div class="container max-width-adaptive-sm">
        <div class="grid gap-md">
          <div class="col">
            <VueRemarkContent />
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<!-- GraphQl upit za blog postove <-->
<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
    path
      title
      image
      alt
      image_caption
      tagsMeta
      excerpt
      imageTwo {
        path
        alt
      }
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss")
    }
  }
</page-query>

<script>
export default {
  //meta desc dinamicni
  metaInfo() {
    return {
      title: this.$page.post.title + " - Aloja Vera",
      titleTemplate: this.$page.post.title + " - Aloja Vera",

      meta: [
        { name: "description", content: this.$page.post.tagsMeta },

        {
          key: "og:image",
          property: "og:image",
          content: "https://alojanaklik.rs" + this.$page.post.imageTwo.path
        },
        {
          key: "og:title",
          name: "og:title",
          content: this.$page.post.title + " - Aloja Vera"
        },

        {
          key: "og:type",
          name: "og:type",
          content: "article"
        },

        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.tagsMeta
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.post.title + " - Aloja Vera"
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.tagsMeta
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: "https://alojanaklik.rs" + this.$page.post.imageTwo.path
        }
      ]

      // etc...
    };
  },
  data: function() {
    return {
      api_url: "https://alojanaklik.rs/",
      facebook: "http://www.facebook.rs/sharer/sharer.php?u="
    };
  },

  //CodyHouse javascript UI
  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    document.body.appendChild(frontEnd);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
  }
};
</script>


