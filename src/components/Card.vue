<template>
  <div class="container max-width-adaptive-lg">
    <ul class="feature-v8__sub-content grid gap-lg">
      <li class="col-4@md" v-for="item in products" :key="item.node.id">
        <a :href="item.node.path" class="card-v8 bg radius-lg">
          <figure>
            <g-image :src="item.node.imgOne[0].url" alt="Card preview img" />
          </figure>

          <footer class="padding-sm">
            <p class="text-sm color-contrast-medium margin-bottom-sm">Label</p>
            <div class="text-component">
              <h4>
                <span class="card-v8__title">{{ item.node.title }}</span>
              </h4>
            </div>
          </footer>
        </a>
      </li>
    </ul>
  </div>
</template>




<script>
export default {
  name: "Card",
  props: {
    products: {},
  },
};
</script>