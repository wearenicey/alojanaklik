<template>
  <div class="container max-width-adaptive-lg">
    <ul class="feature-v8__sub-content grid gap-sm gap-lg@md">
      <li class="col-6 col-4@md" v-for="item in products" :key="item.node.id">
        <a :href="item.node.path" class="card-v8 bg radius-lg shadow-sm">
          <figure>
            <g-image :src="item.node.sekcija2Slika[0].url" alt="Card preview img"/>
          </figure>

          <footer class="padding-sm">
            <div class="text-component">
              <p class="text-bold color-black text-md@md">
                <span class="card-v8__title">{{ item.node.h1Hero }}</span>
              </p>
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
