<template>
  <Layout>
    <section class="product-v3 padding-y-xxl js-product-v3">
      <div class="container max-width-adaptive-xl">
        <div class="grid gap-md">
          <div class="col-6@md col-7@lg">
            <div class="flex flex-column gap-sm">
              <figure v-for="(file, index) in $page.event.image" :key="file.id">
                <g-image class="block width-100%" :src="file.url" />
              </figure>
            </div>
          </div>

          <div class="col-6@md col-5@lg">
            <div class="product-v3__panel">
              <div class="margin-bottom-xs">
                <h1>{{ $page.event.title }}</h1>
              </div>

              <div class="flex items-center margin-bottom-sm">
                <div
                  class="
                    rating rating--read-only
                    js-rating js-rating--read-only
                    text-xs
                  "
                >
                  <p class="sr-only">
                    The rating of this product is
                    <span class="rating__value js-rating__value">4.5</span> out
                    of 5
                  </p>

                  <div
                    class="
                      rating__control rating__control--is-hidden
                      js-rating__control
                    "
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polygon
                        points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="grid margin-bottom-lg">
                <div
                  v-for="(category, index) in $page.event.nabrajanje"
                  :key="category.id"
                  class="flex items-center padding-bottom-sm"
                >
                  <g-image
                    class="margin-right-xs"
                    src="~/assets/img/check.svg"
                  ></g-image>
                  {{ category }}
                </div>
              </div>

              <div class="flex flex-wrap gap-md js-product-v3__cta">
                <button
                  class="
                    btn btn--primary
                    flex-grow
                    justify-between
                    padding-x-lg
                  "
                >
                  Kupi {{ $page.event.ctaText }}
                  <span>
                    <g-image
                      class="margin-right-xs"
                      src="~/assets/img/strelica.svg"
                    ></g-image
                  ></span>
                </button>
                <g-image
                  class="margin-right-xs"
                  src="~/assets/img/logo-futer.png"
                ></g-image>
              </div>
              <div>
                <ul
                  class="
                    accordion-v2
                    flex flex-column
                    padding-top-xl
                    gap-xxxs
                    js-accordion
                  "
                  data-animation="on"
                  data-multi-items="on"
                  data-version="v2"
                >
                  <li class="accordion-v2__item js-accordion__item">
                    <button
                      class="
                        color-primary
                        reset
                        accordion-v2__header
                        padding-y-sm padding-x-md
                        js-tab-focus
                      "
                      type="button"
                    >
                      <span class="text-md">Panel 1</span>

                      <svg
                        class="icon accordion-v2__icon-arrow no-js:is-hidden"
                        viewBox="0 0 20 20"
                      >
                        <g
                          class="icon__group"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="3" y1="3" x2="17" y2="17" />
                          <line x1="17" y1="3" x2="3" y2="17" />
                        </g>
                      </svg>
                    </button>

                    <div
                      class="
                        accordion-v2__panel
                        padding-top-xxxs padding-x-md padding-bottom-md
                        js-accordion__panel
                      "
                    >
                      <div
                        class="
                          text-component
                          line-height-md
                          color-contrast-medium
                          text-space-y-md
                        "
                        v-html="$page.event.karakteristike"
                      ></div>
                    </div>
                  </li>

                  <li class="accordion-v2__item js-accordion__item">
                    <button
                      class="
                        reset
                        accordion-v2__header
                        padding-y-sm padding-x-md
                        js-tab-focus
                      "
                      type="button"
                    >
                      <span class="text-md">Panel 2</span>

                      <svg
                        class="icon accordion-v2__icon-arrow no-js:is-hidden"
                        viewBox="0 0 20 20"
                      >
                        <g
                          class="icon__group"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="3" y1="3" x2="17" y2="17" />
                          <line x1="17" y1="3" x2="3" y2="17" />
                        </g>
                      </svg>
                    </button>

                    <div
                      class="
                        accordion-v2__panel
                        padding-top-xxxs padding-x-md padding-bottom-md
                        js-accordion__panel
                      "
                    >
                      <div
                        class="text-component line-height-md text-space-y-md"
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nostrum a ab quae quas optio ut officia quia?
                          Modi at impedit dolorem est voluptatem facilis, beatae
                          atque tenetur, soluta dolorum inventore sapiente
                          laborum. Alias esse soluta porro distinctio aperiam,
                          qui suscipit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nostrum a ab quae quas optio ut officia quia?
                          Modi at impedit dolorem est voluptatem facilis, beatae
                          atque tenetur, soluta dolorum inventore sapiente
                          laborum. Alias esse soluta porro distinctio aperiam,
                          qui suscipit.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="accordion-v2__item js-accordion__item">
                    <button
                      class="
                        reset
                        accordion-v2__header
                        padding-y-sm padding-x-md
                        js-tab-focus
                      "
                      type="button"
                    >
                      <span class="text-md">Panel 3</span>

                      <svg
                        class="icon accordion-v2__icon-arrow no-js:is-hidden"
                        viewBox="0 0 20 20"
                      >
                        <g
                          class="icon__group"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="3" y1="3" x2="17" y2="17" />
                          <line x1="17" y1="3" x2="3" y2="17" />
                        </g>
                      </svg>
                    </button>

                    <div
                      class="
                        accordion-v2__panel
                        padding-top-xxxs padding-x-md padding-bottom-md
                        js-accordion__panel
                      "
                    >
                      <div
                        class="text-component line-height-md text-space-y-md"
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nostrum a ab quae quas optio ut officia quia?
                          Modi at impedit dolorem est voluptatem facilis, beatae
                          atque tenetur, soluta dolorum inventore sapiente
                          laborum. Alias esse soluta porro distinctio aperiam,
                          qui suscipit.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="accordion-v2__item js-accordion__item">
                    <button
                      class="
                        reset
                        accordion-v2__header
                        padding-y-sm padding-x-md
                        js-tab-focus
                      "
                      type="button"
                    >
                      <span class="text-md">Panel 4</span>

                      <svg
                        class="icon accordion-v2__icon-arrow no-js:is-hidden"
                        viewBox="0 0 20 20"
                      >
                        <g
                          class="icon__group"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="3" y1="3" x2="17" y2="17" />
                          <line x1="17" y1="3" x2="3" y2="17" />
                        </g>
                      </svg>
                    </button>

                    <div
                      class="
                        accordion-v2__panel
                        padding-top-xxxs padding-x-md padding-bottom-md
                        js-accordion__panel
                      "
                    >
                      <div
                        class="text-component line-height-md text-space-y-md"
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nostrum a ab quae quas optio ut officia quia?
                          Modi at impedit dolorem est voluptatem facilis, beatae
                          atque tenetur, soluta dolorum inventore sapiente
                          laborum. Alias esse soluta porro distinctio aperiam,
                          qui suscipit.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nostrum a ab quae quas optio ut officia quia?
                          Modi at impedit dolorem est voluptatem facilis, beatae
                          atque tenetur, soluta dolorum inventore sapiente
                          laborum. Alias esse soluta porro distinctio aperiam,
                          qui suscipit.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="product-v3__cta-clone hide@md js-product-v3__cta-clone"
              aria-hidden="true"
            >
              <div class="container max-width-adaptive-lg">
                <div class="flex flex-wrap gap-md">
                  <div>
                    <label class="sr-only" for="product-qty-input-clone"
                      >Quantity:</label
                    >

                    <div class="number-input number-input--v2 js-number-input">
                      <input
                        class="
                          form-control
                          js-number-input__value
                          js-product-v3__input-clone
                        "
                        type="number"
                        name="product-qty-input-clone"
                        id="product-qty-input-clone"
                        min="0"
                        max="10"
                        step="1"
                        value="1"
                      />

                      <button
                        class="
                          reset
                          number-input__btn number-input__btn--plus
                          js-number-input__btn
                        "
                        aria-label="Increase Number"
                      >
                        <svg
                          class="icon"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z"
                          />
                        </svg>
                      </button>

                      <button
                        class="
                          reset
                          number-input__btn number-input__btn--minus
                          js-number-input__btn
                        "
                        aria-label="Decrease Number"
                      >
                        <svg
                          class="icon"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button class="btn btn--primary flex-grow">
                    Kupi {{ $page.event.title }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container max-width-adaptive-sm">
      <div
        class="text-component line-height-lg v-space-md"
        v-html="$page.event.karakteristike"
      ></div>
    </div>
  </Layout>
</template>


<page-query>

	query Proizvodi ($id: ID!) {
	event: proizvodi(id: $id) {
		 id
        path
         pageTitle
				 title
        metaDesc
				cta
				ctaText
        karakteristike
        namena
        sastojci
        napomena
        upotreba
        utisciText
        utisciIme
        utisciZanimajnje
        utisciSlikaAlt
        opis
        cta
        cena
        category
        nabrajanje
        image{
          url
          
        }

	}
	}
		</page-query>

	<script>
export default {
  // meta deskripcija
  metaInfo() {
    return {
      title: this.$page.event.pageTitle,
      titleTemplate: this.$page.event.pageTitle,
      meta: [{ name: "description", content: this.$page.event.metaDesc }],
      // link: [{ rel: "canonical", href: `https://www.alojanaklik.rs/proizvodi` }],
      // etc...
    };
  },
  //CodyHose javascript UI
  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../../../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    // 👈 load the JS code once the component is mounted
    let accordion = document.createElement("script");
    accordion.setAttribute("src", "../../../accordion.js");
    accordion.setAttribute("id", "accordion-js");
    document.body.appendChild(frontEnd);
    document.body.appendChild(accordion);

    let product = document.createElement("script");
    product.setAttribute("src", "../../product.js");
    product.setAttribute("id", "product-js");
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
    // remove the JS code once the component has been destroyed
    document.getElementById("accordion-js").remove();
    document.getElementById("product-js").remove();
  },
  methods: {
    scroll() {
      let element = document.getElementById("yourID");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
};
</script>
		