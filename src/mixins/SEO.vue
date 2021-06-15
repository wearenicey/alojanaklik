<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = this.$page.googleSheet.id;
    const image = this.$page.googleSheet.imgOne;
    const imagePath = (image && `${siteUrl}${image.src}`) || "";

    return {
      title: this.$page.googleSheet.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.googleSheet.subtitle,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${siteUrl}napici/${postPath}`,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.googleSheet.title,
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.googleSheet.subtitle,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath,
        },

        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.googleSheet.subtitle,
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: image ? "summary_large_image" : "summary",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.googleSheet.title,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.googleSheet.subtitle,

            headline: this.$page.googleSheet.title,
            image: imagePath,
          },
        },
      ],
    };
  },
};
</script>