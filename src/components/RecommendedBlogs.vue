<template>
	<div class="stories">
		<h3 class="stories__legend">Slični tekstovi</h3>

		<ol class="stories__list">
			<li v-for="post in $static.recommendedPosts.edges" :key="post.node.id" class="stories__story">
				<figure>
					<img :src="require(`@/assets/img/` + post.node.image)" alt="" class="radius-md" width="80px" height="auto" />
				</figure>
				<g-link class="margin-left-sm" :to="post.node.path">{{ post.node.title }}</g-link>
			</li>
		</ol>
	</div>
</template>

<static-query>
  query RecommendedPosts {
    recommendedPosts: allPost(filter: {recommended: {eq: true}}, limit: 3) {
      edges {
        node {
          id
          title
          image
          path
        }
      }
    }
  }
</static-query>

<script>
export default {
  props: {
    id: String
  }
}
</script>