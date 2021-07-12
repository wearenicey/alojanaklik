<template>
  <div>
    <header class="f-header js-f-header position-relative bg-white">
      <div class="f-header__mobile-content container max-width-lg">
        <a @click="x" class="f-header__logo">
          <svg width="104" height="30" viewBox="0 0 104 30">
            <title>Go to homepage</title>
            <path
              d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z"
              fill="var(--color-contrast-higher)"
            />
            <circle cx="15" cy="15" r="15" fill="var(--color-primary)" />
          </svg>
        </a>

        <button
          class="
            reset
            anim-menu-btn
            js-anim-menu-btn
            f-header__nav-control
            js-tab-focus
          "
          aria-label="Toggle menu"
        >
          <i
            class="anim-menu-btn__icon anim-menu-btn__icon--close"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      <div class="f-header__nav" role="navigation">
        <div
          class="f-header__nav-grid justify-between@md container max-width-lg"
        >
          <div class="f-header__nav-logo-wrapper flex-grow flex-basis-0">
            <a a @click="x" class="f-header__logo">
              <svg width="104" height="30" viewBox="0 0 104 30">
                <title>Go to homepage</title>
                <path
                  d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z"
                  fill="var(--color-contrast-higher)"
                />
                <circle cx="15" cy="15" r="15" fill="var(--color-primary)" />
              </svg>
            </a>
          </div>

          <ul class="f-header__list flex-grow flex-basis-0 justify-center@md">
            <li class="f-header__item">
              <a href="#0" class="f-header__link">
                <span>Proizvodi</span>
                <svg
                  class="f-header__dropdown-icon icon"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                >
                  <path d="M6,9l4-5H2Z" />
                </svg>
              </a>

              <ul class="f-header__dropdown">
                <li>
                  <g-link
                    to="/jacanje-imuniteta/"
                    class="f-header__dropdown-link"
                    >Jačanje imuniteta</g-link
                  >
                </li>
                <li>
                  <g-link to="/ishrana/" class="f-header__dropdown-link"
                    >Ishrana</g-link
                  >
                </li>
                <li>
                  <g-link to="/mrsavljenje/" class="f-header__dropdown-link">
                    Mršavljenje
                  </g-link>
                </li>
                <li>
                  <g-link
                    to="/nega-lica-i-tela/"
                    class="f-header__dropdown-link"
                  >
                    Nega lica i tela
                  </g-link>
                </li>
                <li>
                  <g-link to="/licna-higijena/" class="f-header__dropdown-link">
                    Lična higijena
                  </g-link>
                </li>
              </ul>
            </li>
            <li class="f-header__item">
              <a href="#0" class="f-header__link">About</a>
            </li>

            <li class="f-header__item">
              <g-link to="/blog/" class="f-header__link">Blog</g-link>
            </li>
            <li class="f-header__item">
              <g-link to="/postanite-saradnik/" class="f-header__link"
                >Postanite saradnik</g-link
              >
            </li>
            <li class="f-header__item">
              <g-link to="/contact/" class="f-header__link">Kontakt</g-link>
            </li>
          </ul>

          <ul class="f-header__list flex-grow flex-basis-0 justify-end@md">
            <li class="f-header__item">
              <a href="#0" class="f-header__btn btn btn--primary">Button</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
       twitter {
        site
        creator
      }
    }
  }
</static-query>

<style>
</style>

<script>
export default {
  methods: {
    x() {
      // this will only run when navigating to the page
      if (process.isClient)
        // this will run when linking directly or after a refresh
        window.location.href = "https://serene-feynman-2c0e7e.netlify.app/";
    },
  },
  mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "./main-header.js");
    frontEnd.setAttribute("id", "main-header-js");

    document.body.appendChild(frontEnd);
  },
  destroyed() {
    document.getElementById("main-header-js").remove();
  },
};
</script>
