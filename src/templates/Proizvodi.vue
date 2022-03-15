<template>
  <Layout>
    <div class="bg-white">
      <section class="product-v3 padding-y-xxl js-product-v3 bg-white">
        <div class="container max-width-adaptive-xl">
          <div class="grid gap-xl">
            <div class="col-6@md col-6@lg">
              <div class="flex flex-column gap-sm">
                <figure
                  class="hide-on-mobile-image"
                  v-for="(file, index) in $page.event.image"
                  :key="file.id"
                >
                  <g-image class="block width-100% radius-lg" :src="file.url" />
                </figure>
              </div>
            </div>

            <div class="col-6@md col-6@lg">
              <div class="product-v3__panel">
                <div class="margin-bottom-sm color-primary text-bold">
                  <p>{{ $page.event.categoryTitle }}</p>
                </div>
                <div class="margin-y-sm">
                  <h1>{{ $page.event.title }}</h1>
                </div>
                <div class="margin-top-sm margin-bottom-lg">
                  <p class="text-lg color-accent font-primary">
                    {{ $page.event.cena }} RSD
                  </p>
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
                  <a
                    :href="$page.event.cta"
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
                  </a>
                  <g-image
                    class="margin-right-xs display@md"
                    src="~/assets/img/logo-futer.png"
                  ></g-image>
                </div>
                <div class="flex flex-wrap gap-md padding-top-xl">
                  <g-image
                    class="margin-right-xs"
                    src="~/assets/img/aloeScienceCouncil.png"
                  ></g-image>

                  <g-image
                    class="margin-right-xs"
                    src="~/assets/img/kosherRating.png"
                  ></g-image>

                  <g-image
                    class="margin-right-xs"
                    src="~/assets/img/islamicApproval.png"
                  ></g-image>
                </div>
                <div>
                  <ul
                    class="
                      accordion-v2
                      flex flex-column
                      padding-top-xl
                      gap-xxs
                      js-accordion
                    "
                    data-animation="on"
                    data-multi-items="on"
                    data-version="v2"
                  >
                    <li class="accordion-v2__item js-accordion__item b">
                      <button
                        class="
                          bg-contrast-lower
                          color-primary
                          reset
                          accordion-v2__header
                          padding-y-sm padding-x-md
                          js-tab-focus
                        "
                        type="button"
                      >
                        <span class="text-md">Karakteristike</span>

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
                          bg-contrast-lower
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
                          bg-contrast-lower
                          color-primary
                          reset
                          accordion-v2__header
                          padding-y-sm padding-x-md
                          js-tab-focus
                        "
                        type="button"
                      >
                        <span class="text-md">Namena</span>

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
                          bg-contrast-lower
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
                          v-html="$page.event.namena"
                        ></div>
                      </div>
                    </li>

                    <li class="accordion-v2__item js-accordion__item">
                      <button
                        class="
                          bg-contrast-lower
                          color-primary
                          reset
                          accordion-v2__header
                          padding-y-sm padding-x-md
                          js-tab-focus
                        "
                        type="button"
                      >
                        <span class="text-md">Sastojci</span>

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
                          bg-contrast-lower
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
                          v-html="$page.event.sastojci"
                        ></div>
                      </div>
                    </li>

                    <li class="accordion-v2__item js-accordion__item">
                      <button
                        class="
                          bg-contrast-lower
                          color-primary
                          reset
                          accordion-v2__header
                          padding-y-sm padding-x-md
                          js-tab-focus
                        "
                        type="button"
                      >
                        <span class="text-md">Napomene</span>

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
                          bg-contrast-lower
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
                          v-html="$page.event.napomena"
                        ></div>
                      </div>
                    </li>
                    <li class="accordion-v2__item js-accordion__item">
                      <button
                        class="
                          bg-contrast-lower
                          color-primary
                          reset
                          accordion-v2__header
                          padding-y-sm padding-x-md
                          js-tab-focus
                        "
                        type="button"
                      >
                        <span class="text-md">Upotreba</span>

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
                          v-html="$page.event.upotreba"
                        ></div>
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
                    <a
                      :href="$page.event.cta"
                      class="btn btn--primary flex-grow"
                    >
                      Kupi {{ $page.event.title }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container max-width-adaptive-lg bg-white padding-bottom-xl">
        <div class="grid gap-xl">
          <div class="col-6@md col-4@lg">
            <div class="flex flex-column gap-sm">
              <g-image
                class="block width-100% radius-lg"
                :src="$page.event.utisciSlike[0].url"
              />
            </div>
          </div>
          <div class="col-6@md col-8@lg">
            <div class="flex flex-column gap-sm">
              <div
                class="rating rating--read-only js-rating js-rating--read-only"
              >
                <p class="hide">
                  The rating of this product is
                  <span class="rating__value js-rating__value">5</span> out of 5
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
                      fill="#FEC84B"
                    />
                  </svg>
                </div>
              </div>
              <div class="">
                <h2>{{ $page.event.utisciText }}</h2>
                <p
                  class="
                    text-bold
                    color-black
                    line
                    margin-top-md margin-bottom-xxxs
                  "
                >
                  {{ $page.event.utisciIme }}
                </p>
                <p class="color-contrast-low">
                  {{ $page.event.utisciZanimajnje }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        class="position-relative z-index-1 padding-y-xl"
        style="background-color: #264328"
      >
        <div class="container max-width-adaptive-lg">
          <div class="grid gap-lg items-center">
            <div class="col-5@md">
              <div
                class="text-component color-quaternary-lighter white-text"
                v-html="$page.event.opis"
              ></div>

              <div class="margin-top-sm">
                <div class="flex flex-wrap gap-sm items-center">
                  <a :href="$page.event.cta" class="btn btn--primary"
                    >Kupi {{ $page.event.ctaText }}</a
                  >
                </div>
              </div>
            </div>

            <div class="col-7@md">
              <g-image
                class="block width-100% radius-lg"
                :src="$page.event.opisSlika[0].url"
              />
            </div>
          </div>
        </div>
      </section>
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
				utisciSlike {
					url
				}
        utisciText
        utisciIme
        utisciZanimajnje
        utisciSlikaAlt
        opis
				opisSlika {
					url
				}
        cta
        cena
        category
				categoryTitle
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

    let rating = document.createElement("script");
    rating.setAttribute("src", "../../../rating.js");
    rating.setAttribute("id", "rating-js");
    document.body.appendChild(rating);
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
		