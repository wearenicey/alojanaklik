<template>
	<div>
		<header class="f-header js-f-header bg hide-nav js-hide-nav js-hide-nav--main bg-white" data-nav-target-class="f-header--expanded">
			<div class="f-header__mobile-content container max-width-lg">
				<g-link to="/" class="f-header__logo">
					<img src="/aloja-na-klik-logo.png" height="" alt="Aloja na klik" />
				</g-link>

				<button class="reset anim-menu-btn js-anim-menu-btn f-header__nav-control js-tab-focus" aria-label="Toggle menu">
					<i class="anim-menu-btn__icon anim-menu-btn__icon--close" aria-hidden="true"></i>
				</button>
			</div>

			<div class="f-header__nav" role="navigation">
				<div class="f-header__nav-grid justify-between@md container max-width-lg">
					<div class="f-header__nav-logo-wrapper flex-grow flex-basis-0">
						<g-link to="/" class="f-header__logo">
							<img src="/aloja-na-klik-logo.png" height="" alt="Aloja na klik" />
						</g-link>
					</div>

					<ul class="f-header__list flex-grow flex-basis-0 justify-end@md">
						<li class="f-header__item">
							<g-link to="/blog/" class="btn">Blog</g-link>
						</li>
						<ul class="f-header__listflex-basis-0 justify-center@md">
							<li class="f-header__item">
								<g-link to="/proizvodi/" class="f-header__link">
									<span>Proizvodi</span>
									<svg class="f-header__dropdown-icon icon" aria-hidden="true" viewBox="0 0 12 12">
										<path d="M9.943,4.269A.5.5,0,0,0,9.5,4h-7a.5.5,0,0,0-.41.787l3.5,5a.5.5,0,0,0,.82,0l3.5-5A.5.5,0,0,0,9.943,4.269Z" />
									</svg>
								</g-link>

								<ul class="f-header__dropdown">
									<li><g-link to="/napici/" class="f-header__dropdown-link">Aloe Vera napici</g-link></li>
									<li><g-link to="/mrsavljenje/" class="f-header__dropdown-link">Preparati za mršavljenje</g-link></li>
									<li><g-link to="/dodaci-ishrani/" class="f-header__dropdown-link">Suplementi</g-link></li>
									<li><g-link to="/preparati-za-higijenu/" class="f-header__dropdown-link">Lična higijena</g-link></li>	
									<li><g-link to="/preparati-za-negu-koze/" class="f-header__dropdown-link">Nega kože</g-link></li>
									<li><g-link to="/pcelinji-proizvodi/" class="f-header__dropdown-link">Pčelinji proizvodi</g-link></li>
								</ul>
							</li>
							<!--	<li class="f-header__item"><g-link to="/postanite-saradnik/" class="f-header__link">Postanite saradnik</g-link></li>
						<li class="f-header__item"><g-link to="/istorija-kompanije/" class="f-header__link">Istorija kompanije</g-link></li>
						<li class="f-header__item"><g-link to="/blog/" class="f-header__link">Blog </g-link></li> -->
						</ul>
						<li class="f-header__item"><g-link to="/postanite-saradnik/" class="btn">Postanite saradnik</g-link></li>
						<li class="f-header__item"><g-link to="/kontakt/" class="btn btn--subtle">Kontakt</g-link></li>
					</ul>
				</div>
			</div>
		</header>

		<slot />

		<footer class="footer-v4 padding-y-lg">
			<div class="container max-width-lg">
				<nav class="footer-v4__nav">
					<ul class="footer-v4__nav-list text-center">
						<!-- <li class="footer-v4__nav-item">
							<g-link to="/proizvodi/">Proizvodi</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/dodaci-ishrani/">Dodaci ishrani</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/preparati-za-higijenu/">Lična higijena</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/mrsavljenje/">Mršavljenje</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/napici/"> Napici</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/preparati-za-negu-koze/">Nega kože</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/pcelinji-proizvodi/">Pčelinji proizvodi</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/postanite-saradnik/">Postanite saradnik</g-link>
						</li>
						<li class="footer-v4__nav-item">
							<g-link to="/blog/">Blog</g-link>
						</li> -->
						<li class="footer-v4__nav-item">
							<g-link to="/istorija-kompanije/">Istorija kompanije</g-link>
						</li>
						<!-- <li class="footer-v4__nav-item">
							<g-link to="/blog/">Blog</g-link>
						</li> -->
						<li class="footer-v4__nav-item">
							<g-link to="/kontakt/">Kontakt</g-link>
						</li>
					</ul>
				</nav>

				<div class="footer-v4__logo">
					<g-image class="margin-x-auto" src="~/assets/img/foreverlogogold.png" alt="Forever Living Gold"></g-image>
				</div>

				<p class="footer-v4__print text-center">FOREVER POSLOVNI SARADNIK</p>
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

<style></style>

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
				window.location.href = "https://www.alojanaklik.rs/kontakt/";
		}
	}
};
</script>
