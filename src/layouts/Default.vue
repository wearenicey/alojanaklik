<template>
  <div>
    <header
      class="
        f-header
        js-f-header
        position-relative
        bg-white
        border-bottom
        position-fixed
      "
    >
      <div class="f-header__mobile-content container max-width-lg">
        <a @click="x" class="f-header__logo">
          <g-image
            src="~/assets/img/Forever Living Proizvodi _ Aloja Vera.svg"
          ></g-image>
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
              <g-image
                src="~/assets/img/Forever Living Proizvodi _ Aloja Vera.svg"
              ></g-image>
            </a>
          </div>

          <ul class="f-header__list flex-grow flex-basis-0 justify-end@md">
            <li class="f-header__item">
              <g-link to="/proizvodi/" class="f-header__link">
                <span>Proizvodi</span>
                <svg
                  class="f-header__dropdown-icon icon"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                >
                  <path d="M6,9l4-5H2Z" />
                </svg>
              </g-link>

              <ul class="f-header__dropdown">
                <li>
                  <g-link
                    to="/jacanje-imuniteta/"
                    class="f-header__dropdown-link"
                    >Jačanje imuniteta
                  </g-link>
                </li>
                <li>
                  <g-link to="/ishrana/" class="f-header__dropdown-link"
                    >Ishrana
                  </g-link>
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
              <g-link to="/postanite-saradnik/" class="f-header__link"
                >Postanite saradnik
              </g-link>
            </li>
            <li class="f-header__item">
              <g-link to="/istorija-kompanije/" class="f-header__link"
                >Istorija kompanije
              </g-link>
            </li>
            <!-- <li class="f-header__item">
              <g-link to="/blog/" class="f-header__link">Blog</g-link>
            </li> -->
            <li class="f-header__item">
              <a @click="y" class="f-header__btn btn btn--primary">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <slot />
    <footer class="footer-v4 padding-y-lg">
      <div class="container max-width-lg">
        <nav class="footer-v4__nav">
          <ul class="footer-v4__nav-list">
            <li class="footer-v4__nav-item">
              <g-link to="/proizvodi/"> Proizvodi</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/jacanje-imuniteta/">Jačanje imuniteta</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/ishrana/">Ishrana</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/mrsavljenje/"> Mršavljenje</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/nega-lica-i-tela/"> Nega lica i tela</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/licna-higijena/"> Lična higijena</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/postanite-saradnik/">Postanite saradnik</g-link>
            </li>
            <li class="footer-v4__nav-item">
              <g-link to="/istorija-kompanije/">Istorija kompanije</g-link>
            </li>
            <!-- <li class="footer-v4__nav-item">
							<g-link to="/blog/">Blog</g-link>
						</li> -->
            <li class="footer-v4__nav-item">
              <g-link to="/contact/">Kontakt</g-link>
            </li>
          </ul>
        </nav>

        <div class="footer-v4__logo">
          <a @click="x">
            <g-image
              src="~/assets/img/foreverlogogold.png"
              alt="Forever Living Gold"
            ></g-image>
          </a>
        </div>

        <p class="footer-v4__print">FOREVER POSLOVNI SARADNIK</p>

        <!-- <div class="footer-v4__socials">
					<a href="#0">
						<svg class="icon" viewBox="0 0 16 16">
							<title>Follow us on Twitter</title>
							<g>
								<path
									d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"
								></path>
							</g>
						</svg>
					</a>

					<a href="#0">
						<svg class="icon" viewBox="0 0 16 16">
							<title>Follow us on Youtube</title>
							<g>
								<path
									d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"
								></path>
							</g>
						</svg>
					</a>

					<a href="#0">
						<svg class="icon" viewBox="0 0 16 16">
							<title>Follow us on Github</title>
							<g>
								<path
									d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"
								></path>
							</g>
						</svg>
					</a>
				</div> -->
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
metadata {
siteName
siteDescription

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
        window.location.href = "https://www.alojanaklik.rs/";
    },

    y() {
      if (process.isClient)
        // this will run when linking directly or after a refresh
        window.location.href = "https://www.alojanaklik.rs/contact/";
    },
  },
};
</script>
