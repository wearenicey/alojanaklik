<template>
  <Layout>
    <div
      class="
        overscroll-section
        position-relative
        z-index-1
        js-overscroll-section
        bg-secondary
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
                      Forever Aloe Vera Gel
                    </h1>
                    <p class="text-md">
                      99,7% čista aloja vera za Vaš imuni sistem
                    </p>
                  </div>

                  <div class="margin-top-sm">
                    <div class="flex flex-wrap gap-sm items-center">
                      <a href="#0" class="btn btn--primary">Naruči proizvod</a>
                    </div>
                  </div>
                </div>

                <div class="col-7@md">
                  <figure>
                    <g-image
                      class="block width-100%"
                      src="~/assets/img/aloja_1.jpg"
                      alt="Image description"
                    />
                  </figure>
                  <div class="text-componet text-center margin-top-xxs">
                    <p>👇 Skroluj niže za više informacija</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="feature-v5 padding-bottom-lg">
          <div class="feature-v5__content">
            <div class="container max-width-adaptive-sm">
              <div class="grid">
                <div class="margin-bottom-md">
                  <h2 class="text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>

                <div class="text-component col-8@md margin-left-auto@md">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Placeat voluptatem voluptates ut ratione, dignissimos natus
                    velit consectetur, quibusdam mollitia laudantium eveniet
                    laborum illum non explicabo sunt. Consequatur itaque quod
                    necessitatibus?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <figure class="feature-v5__media container max-width-lg">
            <g-image
              class="block width-100% shadow-lg"
              src="~/assets/img/aloja_1.jpg"
              alt="Image description"
            />
          </figure>
        </section>

        <section class="feature-v2 padding-y-xl sekcija">
          <div class="container max-width-adaptive-lg">
            <div class="grid gap-md">
              <div class="col-4@md">
                <div class="text-sm color-contrast-medium margin-bottom-xxs">
                  This is a Label
                </div>
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
              </div>

              <div class="col-8@md">
                <div class="text-component padding-left-md@md">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint tempore repellat earum. Natus accusantium dolores quas
                    porro delectus corporis explicabo, adipisci eaque, tempore
                    beatae blanditiis totam iste alias ipsum. Asperiores,
                    temporibus quo.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis tempore officiis voluptatem et, sequi qui explicabo
                    esse excepturi minus quisquam cupiditate cum recusandae ad
                    dicta doloribus doloremque omnis inventore ipsa a veritatis
                    laboriosam. Nostrum numquam nesciunt animi dolore. Sit earum
                    vel illum obcaecati dolorem recusandae voluptates molestias
                    iure repellendus blanditiis porro aspernatur tempora nam
                    commodi ipsam ipsum minus nobis omnis pariatur sed dolor
                    fugiat, nulla facilis! Ducimus quasi dolorum laudantium
                    distinctio cum voluptatibus inventore nostrum, a qui
                    deleniti odit dicta!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <h2>Lorem ipsum dolor ssaasad</h2>
              </div>
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
                <span class="text-md">Namena</span>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
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
                <span class="text-md">Kako se upotrebljava </span>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
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
                <span class="text-md">Sastojci</span>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
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
                <span class="text-md">Napomena</span>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum a ab quae quas optio ut officia quia? Modi at
                    impedit dolorem est voluptatem facilis, beatae atque
                    tenetur, soluta dolorum inventore sapiente laborum. Alias
                    esse soluta porro distinctio aperiam, qui suscipit.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <section>
            <div class="container max-width-adaptive-lg margin-y-xl">
              <div class="margin-bottom-md">
                <h2 class="text-center">Iskustva naših korisnika</h2>
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
          </section>
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
                      <h2>Build &amp; Deploy</h2>
                      <p class="color-contrast-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, rem neque doloribus impedit explicabo minus
                        laborum cupiditate atque esse consectetur.
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
                      <h2>Build &amp; Deploy</h2>
                      <p class="color-contrast-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, rem neque doloribus impedit explicabo minus
                        laborum cupiditate atque esse consectetur.
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
                    <img
                      class="block width-100% height-100% object-cover"
                      src="https://photos.smugmug.com/photos/i-WjnsmsG/0/X3/i-WjnsmsG-X3.jpg"
                      alt="Image description"
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
          <!-- Mobile -->
          <div class="container hide@md max-adaptive-xl margin-bottom-lg">
            <div class="grid">
              <div class="col-12 margin-bottom-md">
                <g-image
                  src="https://photos.smugmug.com/photos/i-WjnsmsG/0/X3/i-WjnsmsG-X3.jpg"
                  alt="Image description"
                ></g-image>
                <div class="text-component margin-top-xs">
                  <h2>Build &amp; Deploy</h2>
                  <p class="color-contrast-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, rem neque doloribus impedit explicabo minus laborum
                    cupiditate atque esse consectetur.
                  </p>
                </div>
              </div>
              <div class="col-12">
                <g-image
                  src="https://photos.smugmug.com/photos/i-fjkczJV/0/X3/i-fjkczJV-X3.jpg"
                  alt="Image description"
                ></g-image>
                <div class="text-component margin-top-xs">
                  <h2>Build &amp; Deploy</h2>
                  <p class="color-contrast-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, rem neque doloribus impedit explicabo minus laborum
                    cupiditate atque esse consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end mobile -->

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

<script>
export default {
  metaInfo: {
    title: "Test!",
  },

  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    document.body.appendChild(frontEnd);
    // 👈 load the JS code once the component is mounted

    let accordion = document.createElement("script");
    accordion.setAttribute("src", "../accordion.js");
    accordion.setAttribute("id", "accordion-js");
    document.body.appendChild(accordion);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();

    // remove the JS code once the component has been destroyed
    document.getElementById("overscroll-section-js").remove();
  },
};
</script>