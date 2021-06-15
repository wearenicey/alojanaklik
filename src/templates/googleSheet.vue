<template>
  <Layout>
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
                      {{ $page.googleSheet.subtitle }}
                    </h1>
                    <h2>{{ $page.googleSheet.textOne }}</h2>
                  </div>

                  <div class="margin-top-sm">
                    <div class="flex flex-wrap gap-sm items-center">
                      <a :href="$page.googleSheet.link" class="btn btn--primary"
                        >Naruči proizvod</a
                      >
                      <a :href="$page.googleSheet.link" class="color-inherit"
                        >Saznaj više</a
                      >
                    </div>
                  </div>
                </div>

                <div class="col-7@md">
                  <figure>
                    <g-image
                      class="block width-100%"
                      :src="
                        require(`!!assets-loader!@img/${$page.googleSheet.imgOne}`)
                      "
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
                      <img src="img/vitamin-c.svg" alt="Image description" />
                    </figure>

                    <div class="text-component">
                      <h4>Vitamin C</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium assumenda doloribus eos provident modi.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-6@md">
                  <div class="feature-v7__item flex gap-sm">
                    <figure>
                      <img src="img/stomachache.svg" alt="Image description" />
                    </figure>

                    <div class="text-component">
                      <h4>Zdrava probava</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quibusdam distinctio inventore architecto.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-6@md">
                  <div class="feature-v7__item flex gap-sm">
                    <figure>
                      <img
                        src="img/immune-system.svg"
                        alt="Image description"
                      />
                    </figure>

                    <div class="text-component">
                      <h4>Imuni sistem</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium assumenda doloribus eos provident modi.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-6@md">
                  <div class="feature-v7__item flex gap-sm">
                    <figure>
                      <img src="img/protection.svg" alt="Image description" />
                    </figure>

                    <div class="text-component">
                      <h4>Čišćenje organizma</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quibusdam distinctio inventore architecto.
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
                  <h1 class="text-xl">Kako piti aloja veru</h1>
                  <ul class="opacity-60%">
                    <li>Promućkati pre upotrebe</li>
                    <li>2 puta po 60 ml ili 3 puta po 40 ml dnevno</li>
                    <li>
                      Nakon otvaranja čuvati u frižideru na temperaturi nižoj od
                      7 &#8451; ne duže od 30 dana
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <figure class="video-feature__video-wrapper" aria-hidden="true">
              <img src="img/video-feature-img-1.jpg" alt="Video Preview" />
              <video
                autoplay
                loop
                muted
                playsInline
                src="img/video-aloe-1.mp4"
              ></video>
            </figure>
          </div>

          <section>
            <div class="container max-width-adaptive-lg margin-y-xl">
              <div class="margin-bottom-md">
                <h1 class="text-center">Iskustva naših korisnika</h1>
              </div>

              <div class="grid gap-sm">
                <div
                  class="
                    bg-accent-lighter
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
                      color-contrast-low
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
                    >. Eligendi atque doloremque beatae! Doloremque perspiciatis
                    aliquid repellat quasi praesentium, minima nobis assumenda
                    ex?
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
                    bg-accent-lighter
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
                      color-contrast-low
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
                    bg-accent-lighter
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
                      color-contrast-low
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
                    >, molestiae adipisci architecto dolore expedita esse minima
                    ut asperiores explicabo, aut iure exercitationem quam.
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
                    <h1>Build &amp; Deploy</h1>
                    <p class="color-contrast-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa, rem neque doloribus impedit explicabo minus laborum
                      cupiditate atque esse consectetur.
                    </p>
                    <p><a class="btn btn--primary" href="#0">Learn more</a></p>
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
                  <img
                    class="block width-100% height-100% object-cover"
                    src="https://photos.smugmug.com/photos/i-fjkczJV/0/X3/i-fjkczJV-X3.jpg"
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
                    <h1>Build &amp; Deploy</h1>
                    <p class="color-contrast-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa, rem neque doloribus impedit explicabo minus laborum
                      cupiditate atque esse consectetur.
                    </p>
                    <p><a class="btn btn--primary" href="#0">Learn more</a></p>
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
                  <img
                    class="block width-100% height-100% object-cover"
                    src="https://photos.smugmug.com/photos/i-WjnsmsG/0/X3/i-WjnsmsG-X3.jpg"
                    alt="Image description"
                  />
                </figure>
              </div>
            </div>
          </section>
          <section class="feature-v9">
            <div class="grid">
              <div
                class="feature-v9__block col-6@md"
                style="
                  background-image: url('https://photos.smugmug.com/photos/i-sZSfjXr/0/X2/i-sZSfjXr-X2.jpg');
                "
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
                style="
                  background-image: url('https://cdn.foreverliving.com/content/cards/images/your_opp_become_a_product_of_the_products_ad_560x568_1614968984056.jpg');
                "
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
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  googleSheet (path: $path) {
    title
    subtitle
    imgOne
    link
    textOne
    id
    
  }
}
</page-query>

<script>
import SEO from "../mixins/SEO";

export default {
  mixins: [SEO],

  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    let front = document.createElement("script");
    front.setAttribute("src", "../overscroll-section.js"); // 👈 make sure to use the correct path
    front.setAttribute("id", "overscroll-section-js");
    document.body.appendChild(frontEnd);

    document.body.appendChild(front);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
  },
};
</script>
