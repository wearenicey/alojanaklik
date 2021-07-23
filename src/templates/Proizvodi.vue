<template>
  <Layout>
    <div class="bg-secondary">
      <!-- your content here -->
      <div
        class="
          container
          max-width-adaptive-lg
          min-height-100vh
          flex flex-center
        "
      >
        <div class="feature-v4">
          <div class="container max-width-adaptive-lg">
            <div class="feature-v4__grid grid gap-md items-center">
              <div class="col-5@md position-relative z-index-1">
                <div class="text-component">
                  <h1 class="text-xxxl feature-v4__text-offset@md">
                    {{ $page.event.h1Hero }}
                  </h1>
                  <p class="text-md">
                    {{ $page.event.pHero }}
                  </p>
                </div>

                <div class="margin-top-sm">
                  <div class="flex flex-wrap gap-sm items-center">
                    <a @click="scroll" class="btn btn--primary"
                      >Naruči proizvod</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-7@md">
                <figure>
                  <g-image
                    class="block width-100%"
                    :src="$page.event.slikaHero[0].url"
                    alt="Image description"
                  />
                </figure>
              </div>
              <div class="col-12">
                <div
                  class="
                    text-componet text-md@md
                    flex-center
                    margin-top-xxs
                    flex
                  "
                >
                  <div class="vert-move">👇</div>
                  <div class="text-center">
                    <p>Skroluj niže za više informacija</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          overscroll-section
          position-relative
          z-index-1
          js-overscroll-section
        "
      >
        <section
          class="
            overscroll-section__sticky-content
            js-overscroll-section__sticky-content
          "
        >
          <section class="feature-v5 padding-bottom-lg">
            <div class="feature-v5__content">
              <div class="container max-width-adaptive-lg">
                <div class="grid">
                  <div class="margin-bottom-md">
                    <h2 class="text-xl">
                      {{ $page.event.sekcija2Naslov }}
                    </h2>
                  </div>

                  <div class="text-component col-8@md margin-left-auto@md">
                    <p>
                      {{ $page.event.sekcija2P }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <figure class="feature-v5__media container max-width-lg">
              <g-image
                class="block width-100% shadow-lg"
                :src="$page.event.sekcija2Slika[0].url"
                alt="Image description"
              />
            </figure>
          </section>

          <div class="feature-v2 padding-y-xl sekcija">
            <div class="container max-width-adaptive-lg">
              <div class="grid gap-md">
                <div class="col-4@md">
                  <h2>
                    {{ $page.event.sekcija3Naslov }}
                  </h2>
                </div>

                <div class="col-8@md">
                  <div class="text-component padding-left-md@md">
                    <p>
                      {{ $page.event.sekcija3Tekst }}
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <div
                    class="
                      text-componet text-md@md
                      flex-center
                      margin-top-xxs
                      flex
                    "
                  >
                    <div class="vert-move">👇</div>
                    <div class="text-center">
                      <p>Skroluj niže za više informacija</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="
            overscroll-section__scroll-content
            bg
            js-overscroll-section__scroll-content
            bg-secondary
          "
        >
          <!-- your content here -->
          <div class="container max-width-lg padding-y-xl">
            <section class="feature-v7 margin-bottom-xl">
              <div class="container max-width-adaptive-lg">
                <div class="text-component text-center margin-bottom-xl">
                  <h2>{{ $page.event.h1Hero }} karakteristike</h2>
                </div>
                <div class="grid gap-md">
                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.kar1Ikonica[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.kar1Naslov }}</h4>
                        <p>
                          {{ $page.event.kar1P }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.kar2Ikonica[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.kar2Naslov }}</h4>
                        <p>
                          {{ $page.event.kar2P }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.kar3Ikonica[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.kar3Naslov }}</h4>
                        <p>
                          {{ $page.event.kar3P }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.kar4Ikonica[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.kar4Naslov }}</h4>
                        <p>
                          {{ $page.event.kar4P }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ul
              class="accordion-v2 flex flex-column gap-xxxs js-accordion"
              data-animation="on"
              data-multi-items="on"
              data-version="v2"
            >
              <li
                class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                "
              >
                <button
                  class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  "
                  type="button"
                >
                  <span class="text-md text-bold">Namena</span>

                  <svg
                    class="icon accordion-v2__icon-arrow no-js:is-hidden"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <g
                      class="icon__group"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                    >
                      <path d="M2 2l12 12" />
                      <path d="M14 2L2 14" />
                    </g>
                  </svg>
                </button>

                <div class="accordion-v2__panel js-accordion__panel">
                  <div
                    class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    "
                  >
                    <p>
                      {{ $page.event.namena }}
                    </p>
                  </div>
                </div>
              </li>

              <li
                class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                "
              >
                <button
                  class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  "
                  type="button"
                >
                  <span class="text-md text-bold">Kako se upotrebljava </span>

                  <svg
                    class="icon accordion-v2__icon-arrow no-js:is-hidden"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <g
                      class="icon__group"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                    >
                      <path d="M2 2l12 12" />
                      <path d="M14 2L2 14" />
                    </g>
                  </svg>
                </button>

                <div class="accordion-v2__panel js-accordion__panel">
                  <div
                    class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    "
                  >
                    <p>{{ $page.event.upotreba }}</p>
                  </div>
                </div>
              </li>

              <li
                class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                "
              >
                <button
                  class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  "
                  type="button"
                >
                  <span class="text-md text-bold">Sastojci</span>

                  <svg
                    class="icon accordion-v2__icon-arrow no-js:is-hidden"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <g
                      class="icon__group"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                    >
                      <path d="M2 2l12 12" />
                      <path d="M14 2L2 14" />
                    </g>
                  </svg>
                </button>

                <div class="accordion-v2__panel js-accordion__panel">
                  <div
                    class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    "
                  >
                    <p>
                      {{ $page.event.sastojci }}
                    </p>
                  </div>
                </div>
              </li>

              <li
                class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                "
              >
                <button
                  class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  "
                  type="button"
                >
                  <span class="text-md text-bold">Napomena</span>

                  <svg
                    class="icon accordion-v2__icon-arrow no-js:is-hidden"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <g
                      class="icon__group"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                    >
                      <path d="M2 2l12 12" />
                      <path d="M14 2L2 14" />
                    </g>
                  </svg>
                </button>

                <div class="accordion-v2__panel js-accordion__panel">
                  <div
                    class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    "
                  >
                    <p>
                      {{ $page.event.napomena }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <!-- recenzije -->
            <!-- <section>
              <div class="container max-width-adaptive-lg margin-y-xl">
                <div class="margin-bottom-md text-bold">
                  <h2 class="text-center">Aloe Vera Gel iskustva</h2>
                </div>

                <div class="grid gap-sm">
                  <div
                    class="
                      radius-md
                      padding-md
                      text-center
                      flex@md
                      flex-column@md
                      col-4@md
                      bg-white
                    "
                  >
                    <svg
                      class="
                        icon icon--xl
                        color-primary
                        margin-x-auto margin-bottom-xxxxs
                      "
                      aria-hidden="true"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                    >
                      <polygon
                        points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
                      />
                      <polygon
                        points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
                      />
                    </svg>

                    <blockquote class="line-height-md margin-bottom-md">
                      {{ $page.event.recenzija1 }}
                    </blockquote>

                    <footer
                      class="flex flex-column items-center margin-top-auto@md"
                    >
                      <figure
                        class="flex-shrink-0 margin-bottom-xxxs"
                        aria-hidden="true"
                      >
                        <img
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="img/slicica-1.png"
                          alt="Emily Ewing"
                        />
                      </figure>

                      <cite class="text-sm">
                        <strong>Marko</strong>
                        <span class="block color-contrast-high margin-top-xxxxs"
                          >Beograd</span
                        >
                      </cite>
                    </footer>
                  </div>

                  <div
                    class="
                      radius-md
                      padding-md
                      text-center
                      flex@md
                      flex-column@md
                      col-4@md
                      bg-white
                    "
                  >
                    <svg
                      class="
                        icon icon--xl
                        color-primary
                        margin-x-auto margin-bottom-xxxxs
                      "
                      aria-hidden="true"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                    >
                      <polygon
                        points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
                      />
                      <polygon
                        points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
                      />
                    </svg>

                    <blockquote class="line-height-md margin-bottom-md">
                      <mark>Lorem ipsum dolor sit amet</mark>, consectetur
                      adipisicing elit. Consectetur, recusandae? Saepe, facere.
                    </blockquote>

                    <footer
                      class="flex flex-column items-center margin-top-auto@md"
                    >
                      <figure
                        class="flex-shrink-0 margin-bottom-xxxs"
                        aria-hidden="true"
                      >
                        <img
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="img/slicica-2.png"
                          alt="James Powell"
                        />
                      </figure>

                      <cite class="text-sm">
                        <strong>Nikola</strong>
                        <span class="block color-contrast-high margin-top-xxxxs"
                          >Novi Sad</span
                        >
                      </cite>
                    </footer>
                  </div>

                  <div
                    class="
                      bg-white
                      radius-md
                      padding-md
                      text-center
                      flex@md
                      flex-column@md
                      col-4@md
                    "
                  >
                    <svg
                      class="
                        icon icon--xl
                        color-primary
                        margin-x-auto margin-bottom-xxxxs
                      "
                      aria-hidden="true"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                    >
                      <polygon
                        points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
                      />
                      <polygon
                        points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
                      />
                    </svg>

                    <blockquote class="line-height-md margin-bottom-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <mark
                        >Suscipit provident numquam velit officiis impedit</mark
                      >, molestiae adipisci architecto dolore expedita esse
                      minima ut asperiores explicabo, aut iure exercitationem
                      quam.
                    </blockquote>

                    <footer
                      class="flex flex-column items-center margin-top-auto@md"
                    >
                      <figure
                        class="flex-shrink-0 margin-bottom-xxxs"
                        aria-hidden="true"
                      >
                        <img
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="img/slicica-3.png"
                          alt="Olivia Gribben"
                        />
                      </figure>

                      <cite class="text-sm">
                        <strong>Ana</strong>
                        <span class="block color-contrast-high margin-top-xxxxs"
                          >Kragujevac</span
                        >
                      </cite>
                    </footer>
                  </div>
                </div>
              </div>
            </section> -->
            <!--end recenzije  -->
            <div class="display@md">
              <section class="position-relative z-index-1 padding-y-xl">
                <div class="container max-width-adaptive-lg position-relative">
                  <div class="grid padding-x-md padding-x-0@md">
                    <div class="position-relative z-index-2 col-6@md col-5@lg">
                      <div
                        class="
                          text-component
                          bg
                          padding-md padding-lg@md
                          shadow-sm
                          line-height-md
                          margin-top-xxxl
                        "
                      >
                        <h2>{{ $page.event.opis1Naslov }}</h2>
                        <p class="color-contrast-medium">
                          {{ $page.event.opis1Tekst }}
                        </p>
                      </div>
                    </div>

                    <figure
                      class="
                        position-absolute
                        z-index-1
                        top-0
                        right-0
                        height-90%
                        col-10@md
                      "
                    >
                      <g-image
                        class="block width-100% height-100% object-cover"
                        :src="$page.event.opis1Slika[0].url"
                        alt="Image description"
                      />
                    </figure>
                  </div>
                </div>
              </section>

              <section class="position-relative z-index-1 padding-y-xl">
                <div class="container max-width-adaptive-lg position-relative">
                  <div class="grid justify-end padding-x-md padding-x-0@md">
                    <div class="position-relative z-index-2 col-6@md col-5@lg">
                      <div
                        class="
                          text-component
                          bg
                          padding-md padding-lg@md
                          shadow-sm
                          line-height-md
                          margin-top-xxxl
                        "
                      >
                        <h2>{{ $page.event.opis2Naslov }}</h2>
                        <p class="color-contrast-medium">
                          {{ $page.event.opis2Tekst }}
                        </p>
                      </div>
                    </div>

                    <figure
                      class="
                        position-absolute
                        z-index-1
                        top-0
                        left-0
                        height-90%
                        col-10@md
                      "
                    >
                      <g-image
                        class="block width-100% height-100% object-cover"
                        :src="$page.event.opis2Slika[0].url"
                        alt="Image description"
                      />
                    </figure>
                  </div>
                </div>
              </section>
            </div>
            <!-- Mobile -->
            <div class="container hide@md max-adaptive-xl margin-y-lg">
              <div class="grid">
                <div class="col-12 margin-bottom-md">
                  <g-image
                    :src="$page.event.opis1Slika[0].url"
                    alt="Image description"
                  ></g-image>
                  <div class="text-component margin-top-xs">
                    <h2>{{ $page.event.opis1Naslov }}</h2>
                    <p class="color-contrast-medium">
                      {{ $page.event.opis1Tekst }}
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <g-image
                    :src="$page.event.opis2Slika[0].url"
                    alt="Image description"
                  ></g-image>
                  <div class="text-component margin-top-xs">
                    <h2>{{ $page.event.opis2Naslov }}</h2>
                    <p class="color-contrast-medium">
                      {{ $page.event.opis2Tekst }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end mobile -->
            <section class="padding-y-lg" id="yourID">
              <div class="container max-width-adaptive-lg margin-bottom-lg">
                <div class="text-component text-center">
                  <h1>
                    Naruči sa zvanične stranice, plati karticom ili pouzećem.
                  </h1>
                  <p class="width-66%@md width-100% margin-x-auto">
                    Internet prodavnica kompanije Forever Living Products doo
                    Beograd je jedina zvanična prodavnica artikala sa obeležjima
                    Forever Living Products International.
                  </p>
                </div>
              </div>
              <div class="container max-width-adaptive-lg">
                <div class="grid items-center">
                  <div class="col-9@md bg-white padding-xl@md padding-lg">
                    <div class="grid items-center gap-md">
                      <div class="text-component">
                        <h3>{{ $page.event.ctaNaslov }}</h3>
                        <p class="text-sm">
                          {{ $page.event.ctaTekst }}
                        </p>
                      </div>
                      <div class="">
                        <div class="flex items-center">
                          <h5 class="proba color-error-lighter margin-right-sm">
                            Učlanjenjem dobijate
                          </h5>
                          <div class="proba2"></div>
                        </div>
                        <ul class="grid gap-sm margin-top-md">
                          <li class="col-6@md">
                            <div class="flex items-center">
                              <font-awesome
                                class="ikonice"
                                :icon="['fas', 'check-circle']"
                              />
                              Proizvode na popustu
                            </div>
                          </li>
                          <li class="col-6@md">
                            <div class="flex items-center">
                              <font-awesome
                                class="ikonice"
                                :icon="['fas', 'check-circle']"
                              />Dodatni materijal
                            </div>
                          </li>
                          <li class="col-6@md">
                            <div class="flex items-center">
                              <font-awesome
                                class="ikonice"
                                :icon="['fas', 'check-circle']"
                              />
                              Dodatnu zaradu "sa strane"
                            </div>
                          </li>
                          <li class="col-6@md">
                            <div class="flex items-center">
                              <font-awesome
                                class="ikonice"
                                :icon="['fas', 'check-circle']"
                              />
                              Posao po svojoj meri
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      col-3@md
                      padding-y-xl padding-x-xs
                      shadow-lg
                      bg-contrast-lower
                    "
                  >
                    <div class="text-component text-center">
                      <p class="text-bold">Pay once, own it forever</p>
                      <g-link
                        class="margin-y-sm text-sm"
                        to="/postanite-saradnik/"
                        >Saznaj više o benefitima saradnje sa Alojom
                      </g-link>
                      <h4>{{ $page.event.ctaCena }} RSD</h4>
                      <a
                        :href="$page.event.ctaLink"
                        class="btn btn--primary margin-top-sm"
                        >{{ $page.event.ctaHero }}</a
                      >
                      <p class="text-sm margin-top-sm">
                        *Kako biste izvršili kupovinu sa 5% popusta, neophodno
                        je da se učlanite i poručite proizvode u minimalnom
                        iznosu od 66eur!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>
<page-query>

  query Proizvodi ($id: ID!) {
  event: proizvodi(id: $id) {

  id
  pageTitle
  metaDesc
  kategorija
  h1Hero
  path
  pHero
  ctaHero
  slikaHero{
  url
  }

  sekcija2Naslov
  sekcija2P
  sekcija2Slika {
  url
  }
  sekcija3Naslov
  sekcija3Tekst


  kar1Naslov
  kar1P
  kar1Ikonica{
  url
  }
  kar2Naslov
  kar2P
  kar2Ikonica{
  url
  }

  kar3Naslov
  kar3P
  kar3Ikonica{
  url
  }
  kar4Naslov
  kar4P
  kar4Ikonica{
  url
  }

  namena
  upotreba
  sastojci
  napomena

  recenzija1
  recenzija1Ime

  recenzija2
  recenzija2Ime

  recenzija3
  recenzija3Ime

  opis1Naslov
  opis1Tekst
  opis1Slika {
  url
  }
  opis2Naslov
  opis2Tekst
  opis2Slika {
  url
  }
  ctaNaslov
  ctaTekst
  ctaLink
  ctaCena
  }

  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.pageTitle,
      meta: [{ name: "description", content: this.$page.event.metaDesc }],
      // etc...
    };
  },

  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    // 👈 load the JS code once the component is mounted
    let front = document.createElement("script");
    front.setAttribute("src", "../../overscroll-section.js"); // 👈 make sure to use the correct path
    front.setAttribute("id", "overscroll-section-js");

    let accordion = document.createElement("script");
    accordion.setAttribute("src", "../../accordion.js");
    accordion.setAttribute("id", "accordion-js");
    document.body.appendChild(frontEnd);

    document.body.appendChild(front);

    document.body.appendChild(accordion);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
    document.getElementById("overscroll-section-js").remove();

    // remove the JS code once the component has been destroyed
    document.getElementById("accordion-js").remove();
  },
  methods: {
    scroll() {
      let element = document.getElementById("yourID");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
};
</script>