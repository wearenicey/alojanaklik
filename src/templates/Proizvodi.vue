<template>
	<Layout>
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "Product",
				"name": "{{ $page.event.ctaText }}",
				"description": "{{ $page.event.title }}",
				"offers": {
					"@type": "Offer",
					"availability": "In Stock",
					"priceCurrency": "EUR",
					"price": "{{ $page.event.cena }}"
				},
				"image": ["https://alojanaklik.rs/assets/img/{{ $page.event.imageUrl[0] }}"]
			}
		</script>

		<div class="bg-white">
			<div class="sticky-banner sticky-banner--bottom bg-light bg-opacity-80% backdrop-blur-10 js-sticky-banner hide@md">
				<div class="gap-xxs padding-y-xs flex flex-column flex-wrap js-product-v3__cta items-center">
					<a :href="$page.event.cta" class="kupiteCTA btn btn--primary flex-grow center-between btn--md letter-spacing-sm">
						Poručite odmah
					</a>
					<a href="tel:+381642839963" class="btn badge badge--accent text-base text-semibold letter-spacing-sm flex-grow">Za popust od 5-30%, pozovite 0642839963</a>
				</div>
			</div>

			<section class="product-v3 padding-y-sm padding-y-lg@md js-product-v3 bg-white">
				<div class="container max-width-adaptive-lg">
					<div class="grid gap-lg">
						<div class="col-6@md col-6@lg">
							<div class="flex flex-column gap-sm display@md">
								<figure v-for="(category, index) in $page.event.imageUrl" class="hide-on-mobile-image">
									<g-image class="block width-100% radius-lg" :src="require(`@/assets/img/` + category)" :alt="$page.event.alt[index]" />
								</figure>
							</div>
						</div>

						<div class="col-6@md col-6@lg">
							<div class="product-v3__panel">
								<div class="margin-bottom-sm color-contrast-low text-md text-center text-left@md">
									<p>{{ $page.event.category[0].ime }}</p>
								</div>

								<div class="margin-y-sm text-center text-left@md">
									<h1>{{ $page.event.title }}</h1>
								</div>

								<div class="flex flex-column gap-sm hide@md">
									<figure v-for="(category, index) in $page.event.imageUrl" class="hide-on-mobile-image">
										<g-image class="block width-100% radius-lg" :src="require(`@/assets/img/` + category)" :alt="$page.event.alt[index]" />
									</figure>
								</div>

								<div class="margin-top-sm margin-bottom-lg text-center text-left@md">
									<p class="text-lg color-accent-dark font-primary text-normal">{{ $page.event.cena }} EUR</p>
								</div>

								<div class="grid margin-bottom-lg gap-xxs">
									<div v-for="(category, index) in $page.event.nabrajanje" :key="category.id" class="flex items-center">
										<g-image class="margin-right-xs" src="~/assets/img/check.svg"></g-image>
										{{ category }}
									</div>
								</div>

								<div class="gap-sm flex flex-column flex-wrap js-product-v3__cta items-center display@md">
									<a :href="$page.event.cta" class="kupiteCTA btn btn--primary flex-grow center-between btn--md letter-spacing-xs" style="font-weight: bold !important; letter-spacing: -0.32px;">
										Poručite odmah
									</a>
									<span class="badge badge--accent text-sm">Ostvarite popust od 5-30%, pozovite 0642839963</span>
								</div>

								<div>
									<ul class="accordion-v2 flex flex-column padding-top-xl gap-xxs js-accordion" data-animation="on" data-multi-items="off" data-version="v2">
										<li class="accordion-v2__item js-accordion__item b accordion-v2__item--is-open">
											<button class="bg-quaternary-light color-secondary-dark reset accordion-v2__header padding-y-md padding-x-md js-tab-focus" type="button">
												<h2 class="text-md">Karakteristike</h2>

												<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 20 20">
													<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
														<line x1="3" y1="3" x2="17" y2="17" />
														<line x1="17" y1="3" x2="3" y2="17" />
													</g>
												</svg>
											</button>

											<div class="accordion-v2__panel padding-top-xxxs padding-x-md padding-bottom-md js-accordion__panel bg-quaternary-light">
												<div class="text-component line-height-md color-contrast-low text-space-y-md" v-html="$page.event.karakteristike"></div>
											</div>
										</li>

										<li class="accordion-v2__item js-accordion__item">
											<button class="bg-quaternary-light color-secondary-dark reset accordion-v2__header padding-y-md padding-x-md js-tab-focus" type="button">
												<h2 class="text-md">Namena</h2>

												<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 20 20">
													<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
														<line x1="3" y1="3" x2="17" y2="17" />
														<line x1="17" y1="3" x2="3" y2="17" />
													</g>
												</svg>
											</button>

											<div class="accordion-v2__panel padding-top-xxxs padding-x-md padding-bottom-md js-accordion__panel bg-quaternary-light">
												<div class="text-component line-height-md color-contrast-low text-space-y-md" v-html="$page.event.namena"></div>
											</div>
										</li>

										<li class="accordion-v2__item js-accordion__item">
											<button class="bg-quaternary-light color-secondary-dark reset accordion-v2__header padding-y-md padding-x-md js-tab-focus" type="button">
												<h2 class="text-md">Sastojci</h2>

												<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 20 20">
													<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
														<line x1="3" y1="3" x2="17" y2="17" />
														<line x1="17" y1="3" x2="3" y2="17" />
													</g>
												</svg>
											</button>

											<div class="accordion-v2__panel padding-top-xxxs padding-x-md padding-bottom-md js-accordion__panel bg-quaternary-light">
												<div class="text-component line-height-md color-contrast-low text-space-y-md" v-html="$page.event.sastojci"></div>
											</div>
										</li>

										<li class="accordion-v2__item js-accordion__item">
											<button class="bg-quaternary-light color-secondary-dark reset accordion-v2__header padding-y-md padding-x-md js-tab-focus" type="button">
												<h2 class="text-md">Napomene</h2>

												<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 20 20">
													<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
														<line x1="3" y1="3" x2="17" y2="17" />
														<line x1="17" y1="3" x2="3" y2="17" />
													</g>
												</svg>
											</button>

											<div class="accordion-v2__panel padding-top-xxxs padding-x-md padding-bottom-md js-accordion__panel bg-quaternary-light">
												<div class="text-component line-height-md color-contrast-low text-space-y-md" v-html="$page.event.napomena"></div>
											</div>
										</li>
										<li class="accordion-v2__item js-accordion__item">
											<button class="bg-quaternary-light color-secondary-dark reset accordion-v2__header padding-y-md padding-x-md js-tab-focus" type="button">
												<h2 class="text-md">Upotreba</h2>

												<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 20 20">
													<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
														<line x1="3" y1="3" x2="17" y2="17" />
														<line x1="17" y1="3" x2="3" y2="17" />
													</g>
												</svg>
											</button>

											<div class="accordion-v2__panel padding-top-xxxs padding-x-md padding-bottom-md js-accordion__panel bg-quaternary-light">
												<div class="text-component line-height-md color-contrast-low text-space-y-md" v-html="$page.event.upotreba"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div class="product-v3__cta-clone hide@md js-product-v3__cta-clone" aria-hidden="true">
								<div class="container max-width-adaptive-lg">
									<div class="flex flex-wrap gap-md">
										<a :href="$page.event.cta" class="btn btn--primary flex-grow">Kupite danas</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="container max-width-adaptive-lg padding-y-xl">
					<div class="margin-bottom-lg">
						<h2 class="text-center">Čujte to od naših kupaca.</h2>
					</div>

					<div class="grid gap-sm">
						<div class="bg-contrast-lower bg-opacity-30% radius-md padding-md flex@md flex-column@md col-4@md">
							<svg class="icon icon--xl color-bg-darker margin-bottom-xxs" aria-hidden="true" width="64" height="64" viewBox="0 0 64 64">
								<polygon points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36" />
								<polygon points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36" />
							</svg>

							<blockquote class="line-height-md margin-bottom-md">
								Koristim Forever Living proizvode već nekoliko meseci i osećam se neverovatno. Kvalitet je izvanredan i rezultati su vidljivi. Preporučujem ih svakome ko želi da se oseća zdravo i snažno.
							</blockquote>

							<footer class="flex flex-wrap items-center margin-top-auto@md">
								<figure class="flex-shrink-0 margin-right-xxs" aria-hidden="true">
									<g-image class="block width-lg height-lg radius-50% border border-2 border-bg" src="~/assets/img/slicica-1.png" alt="Emily Ewing" />
								</figure>

								<cite class="text-sm">
									<strong>Željko Babić</strong>
									<span class="block color-contrast-medium margin-top-xxxxs"></span>
								</cite>
							</footer>
						</div>

						<div class="bg-contrast-lower bg-opacity-30% radius-md padding-md flex@md flex-column@md col-4@md">
							<svg class="icon icon--xl color-bg-darker margin-bottom-xxs" aria-hidden="true" width="64" height="64" viewBox="0 0 64 64">
								<polygon points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36" />
								<polygon points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36" />
							</svg>

							<blockquote class="line-height-md margin-bottom-md">
								Kao atletičar, jako je važno da se brinem o svom zdravlju. Forever Living proizvodi su mi pomogli da održim zdrav životni stil i da se osećam snažno svaki dan. Preporučujem ih svima koji žele da žive zdravo i aktivno.
							</blockquote>

							<footer class="flex flex-wrap items-center margin-top-auto@md">
								<figure class="flex-shrink-0 margin-right-xxs" aria-hidden="true">
									<g-image class="block width-lg height-lg radius-50% border border-2 border-bg" src="~/assets/img/slicica-2.png" alt="James Powell" />
								</figure>

								<cite class="text-sm">
									<strong>Janko Laketić</strong>
									<span class="block color-contrast-medium margin-top-xxxxs"></span>
								</cite>
							</footer>
						</div>

						<div class="bg-contrast-lower bg-opacity-30% radius-md padding-md flex@md flex-column@md col-4@md">
							<svg class="icon icon--xl color-bg-darker margin-bottom-xxs" aria-hidden="true" width="64" height="64" viewBox="0 0 64 64">
								<polygon points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36" />
								<polygon points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36" />
							</svg>

							<blockquote class="line-height-md margin-bottom-md">
								Oduševljena sam sa Forever Living proizvodima! U samo nekoliko nedelja, primetila sam razliku u svom opštem zdravstvenom stanju i samopouzdanju. Proizvodi su prirodni i sigurni, a ja ih često preporučujem svojim prijateljima
								i porodici.
							</blockquote>

							<footer class="flex flex-wrap items-center margin-top-auto@md">
								<figure class="flex-shrink-0 margin-right-xxs" aria-hidden="true">
									<g-image class="block width-lg height-lg radius-50% border border-2 border-bg" src="~/assets/img/slicica-3.png" alt="Olivia Gribben" />
								</figure>

								<cite class="text-sm">
									<strong>Mirjana Tot</strong>
									<span class="block color-contrast-medium margin-top-xxxxs"></span>
								</cite>
							</footer>
						</div>
					</div>
				</div>
			</section>

			<section class="position-relative z-index-1 padding-y-xl bg-secondary">
				<div class="container max-width-adaptive-lg">
					<div class="grid gap-lg items-center">
						<div class="col-5@md">
							<div class="text-component color-quaternary-lighter white-text" v-html="$page.event.opis"></div>

							<div class="">
								<div class="flex flex-wrap inline-flex@sm items-center padding-top-md padding-bottom-lg">
									<a :href="$page.event.cta" class="flex flex-grow btn btn--primary btn--md">Kupite danas</a>
								</div>
							</div>
						</div>

						<div class="col-7@md">
							<g-image class="block width-100% radius-lg" src="@/assets/img/contents.png" alt="forever mozaik" />
						</div>
					</div>
				</div>

				<div class="container max-width-adaptive-lg padding-y-lg padding-x-md radius-lg margin-y-xxl bg-white">
					<div class="grid gap-lg">
						<div class="col-5@md">
							<g-image class="block width-100% radius-lg" :src="require(`@/assets/img/` + $page.event.imageUrl[0])" />
						</div>

						<div class="col-7@md">
							<div class="flex flex-wrap gap-sm items-center">
								<div class="color-primary text-bold text-md">
									<p>{{ $page.event.category[0].ime }}</p>
								</div>
								<div class="">
									<h2>{{ $page.event.title }}</h2>
								</div>

								<div class="">
									<p class="text-lg color-accent font-primary text-normal">{{ $page.event.cena }} EUR</p>
								</div>
								<div>
									<p class="color-black">{{ $page.event.opisDva }}</p>
								</div>
							</div>

							<div class="flex gap-md@sm gap-md flex-column flex-row@sm padding-top-lg justify-between@sm items-center">
								<a :href="$page.event.cta" class="kupiteCTA btn btn--primary flex-grow center-between@lg justify-center btn--md">
									Kupite danas
									<!--	<span> <g-image class="margin-right-xs flex items-center" src="~/assets/img/strelica.svg"></g-image></span> -->
								</a>
								<g-image class="" src="~/assets/img/logo-futer.png"></g-image>
							</div>
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
				opisDva
				category {
      		ime
    		}
        nabrajanje
				imageUrl
				alt
        image {
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
			title: this.$page.event.pageTitle + " | Aloja proizvodi",
			titleTemplate: this.$page.event.pageTitle + " | Aloja proizvodi",
			meta: [{ key: "description", name: "description", content: this.$page.event.metaDesc }]
		};
	},
	//CodyHose javascript UI
	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../../../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");

		let accordion = document.createElement("script");
		accordion.setAttribute("src", "../../../accordion.js");
		accordion.setAttribute("id", "accordion-js");

		let sticky = document.createElement("script");
		sticky.setAttribute("src", "../../../sticky-banner.js");
		sticky.setAttribute("id", "sticky-banner-js");

		let rating = document.createElement("script");
		rating.setAttribute("src", "../../../rating.js");
		rating.setAttribute("id", "rating-js");

		document.body.appendChild(rating);
		document.body.appendChild(frontEnd);
		document.body.appendChild(accordion);
		document.body.appendChild(sticky);
		document.body.appendChild(product);

		let product = document.createElement("script");
		product.setAttribute("src", "../../product.js");
		product.setAttribute("id", "product-js");
	},
	destroyed() {
		document.getElementById("main-header-js").remove();
		// remove the JS code once the component has been destroyed
		document.getElementById("accordion-js").remove();
		document.getElementById("product-js").remove();
		document.getElementById("rating-js").remove();
		document.getElementById("sticky-banner-js").remove();
	},
	methods: {
		scroll() {
			let element = document.getElementById("yourID");
			element.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}
};
</script>
