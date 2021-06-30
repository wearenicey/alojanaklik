<template>
  <Layout>
    <div>
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
                        {{ $page.event.subtitle }}
                      </h1>
                      <h2>{{ $page.event.textOne }}</h2>
                    </div>

                    <div class="margin-top-sm">
                      <div class="flex flex-wrap gap-sm items-center">
                        <a :href="$page.event.link" class="btn btn--primary"
                          >Naruči proizvod</a
                        >
                        <a :href="$page.event.link" class="color-inherit"
                          >Saznaj više</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-7@md">
                    <figure>
                      <g-image
                        class="block width-100%"
                        :src="$page.event.imgOne[0].url"
                        alt="Image description"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="
            bg-secondary
            overscroll-section__scroll-content
            bg
            js-overscroll-section__scroll-content
          "
        >
          <!-- your content here -->
          <div class="container max-width-lg padding-y-xl">
            <section class="feature-v7 margin-bottom-xl">
              <div class="container max-width-adaptive-lg">
                <div class="grid gap-md">
                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.karakteristika1Slika[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.karakteristika1Naslov }}</h4>
                        <p>
                          {{ $page.event.karakteristika1 }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.karakteristika2Slika[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.karakteristika2Naslov }}</h4>
                        <p>
                          {{ $page.event.karakteristika2 }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.karakteristika3Slika[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.karakteristika3Naslov }}</h4>
                        <p>
                          {{ $page.event.karakteristika3 }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-6@md">
                    <div class="feature-v7__item flex gap-sm">
                      <figure>
                        <g-image
                          :src="$page.event.karakteristika4Slika[0].url"
                          alt="Image description"
                        />
                      </figure>

                      <div class="text-component">
                        <h4>{{ $page.event.karakteristika4Naslov }}</h4>
                        <p>
                          {{ $page.event.karakteristika4 }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              class="
                video-feature
                radius-lg
                padding-top-xxxxl padding-x-sm padding-bottom-sm
              "
            >
              <div class="video-feature__box-wrapper grid justify-end@sm">
                <div class="video-feature__box radius-md col-6@sm col-4@lg">
                  <div class="text-component padding-md">
                    <h1 class="text-xl">{{ $page.event.videoNaslov }}</h1>
                    <ul class="opacity-60%">
                      <li v-for="text of $page.event.videoTekst">
                        {{ text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <figure class="video-feature__video-wrapper" aria-hidden="true">
                <!-- <img src="img/video-feature-img-1.jpg" alt="Video Preview" /> -->
                <video
                  autoplay
                  loop
                  muted
                  playsInline
                  :src="$page.event.video[0].url"
                ></video>
              </figure>
            </div>

            <section>
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
                      <mark
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit</mark
                      >. Eligendi atque doloremque beatae! Doloremque
                      perspiciatis aliquid repellat quasi praesentium, minima
                      nobis assumenda ex?
                    </blockquote>

                    <footer
                      class="flex flex-column items-center margin-top-auto@md"
                    >
                      <figure
                        class="flex-shrink-0 margin-bottom-xxxs"
                        aria-hidden="true"
                      >
                        <g-image
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="~/assets/img/slicica-3.png"
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
                        <g-image
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="~/assets/img/slicica-3.png"
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
                        <g-image
                          class="
                            block
                            width-lg
                            height-lg
                            radius-50%
                            border border-2 border-bg
                          "
                          src="~/assets/img/slicica-3.png"
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
            </section>
            <div class="display@md">
              <section
                class="position-relative z-index-1 padding-y-xl display@md"
              >
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
                        <h1>{{ $page.event.opis1Naslov }}</h1>
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
                        <h1>{{ $page.event.opis2Naslov }}</h1>
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
            <!--start Mobile -->
            <div class="container hide@md max-adaptive-xl margin-bottom-lg">
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
                <div class="col-12 margin-bottom-md">
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
            <!-- end Mobile -->
            <section class="feature-v9">
              <div class="grid">
                <div
                  class="feature-v9__block col-6@md"
                  :style="{
                    backgroundImage: `url(${$page.event.slika1[0].url})`,
                  }"
                >
                  <div
                    class="
                      feature-v9__content
                      text-component text-center
                      max-width-xxxs
                    "
                  >
                    <!-- <h2 class="text-xxl color-inherit">Women</h2>
                <p class="opacity-90%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam animi
                  rerum.</p> -->
                    <p>
                      <a class="feature-v9__link" href="#0">Naruči proizvod</a>
                    </p>
                  </div>
                </div>

                <div
                  class="feature-v9__block col-6@md"
                  :style="{
                    backgroundImage: `url(${$page.event.slika2[0].url})`,
                  }"
                >
                  <div
                    class="
                      feature-v9__content
                      text-component text-center
                      max-width-xxxs
                    "
                  >
                    <!-- <h2 class="text-xxl color-inherit">Men</h2> -->
                    <p class="opacity-90%">Ostvari minimum 5% popusta</p>
                    <p>
                      <a class="feature-v9__link" href="#0">Naruči proizvod</a>
                    </p>
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

query Event ($id: ID!) {
  event: event(id: $id) {

      id
        title
        subtitle
        link
        textOne
        path
        imgOne{
            url
          }
      
      karakteristika1Naslov
      karakteristika1
      karakteristika1Slika {
        url
      }
      karakteristika2Naslov
      karakteristika2
      karakteristika2Slika {
        url
      }
      
      karakteristika3Naslov
      karakteristika3
      karakteristika3Slika{
        url
      }
      karakteristika4Naslov
      karakteristika4
      karakteristika4Slika{
        url
      }
      
      videoNaslov
      videoTekst
      video {
        url
      }
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
      slika1 {
        url
      }
      slika2 {
        url
      }  
      }

  }
  </page-query>

<script>
export default {
  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    let front = document.createElement("script");
    front.setAttribute("src", "../../overscroll-section.js"); // 👈 make sure to use the correct path
    front.setAttribute("id", "overscroll-section-js");
    document.body.appendChild(frontEnd);

    document.body.appendChild(front);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
    document.getElementById("overscroll-section-js").remove();
    document.getElementById("accordion-js").remove();
  },
};
</script>