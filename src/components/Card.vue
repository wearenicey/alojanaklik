<template>
  <div class="container max-width-adaptive-lg">
    <ul class="feature-v8__sub-content grid gap-lg">
      <li class="col-4@md" v-for="item in products" :key="item.node.id">
        <p>
        <a :href="item.node.path" class="card-v8 bg radius-lg">
          <figure>
            <g-image
              :src="item.node.sekcija2Slika[0].url"
              alt="Card preview img"
            />
          </figure>

          <footer class="padding-sm">
            <div class="text-component">
              <p class="text-bold color-black text-md">
                <span class="card-v8__title">{{ item.node.h1Hero }}</span>
              </p>
            </div>
          </footer>
        </a>
        </p>
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