<template>
  <Layout>
    <div class="container max-width-adaptive-lg margin-top-xl">
      <div class="grid gap-md">
        <div class="col-4@md" v-for="napici in alojaNapici" :key="napici.id">
          <div class="card-v5">
            <a
              :href="napici.path"
              class="card-v5__img-link"
              aria-label="Description of the link"
            >
              <figure class="card-v5__img">
                <img :src="napici.imgOne" alt="Card preview img" />
              </figure>
            </a>

            <div class="card-v5__content">
              <div class="text-component">
                <h3>{{ napici.title }}</h3>
                <p>{{ napici.textOne }}</p>
                <p>
                  <a href="/aloja-single" class="btn btn--primary btn--sm"
                    >Procitaj vise</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import alojaNapici from "@/data/alojaNapici.json";
export default {
  metaInfo: {
    title: "Aloja!",
  },

  data() {
    return {
      alojaNapici,
    };
  },
};
</script>