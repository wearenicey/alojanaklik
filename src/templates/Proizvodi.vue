<template>
	<Layout>
		<div class="bg-white">
			<section class="product-v3 padding-y-lg js-product-v3 bg-white">
				<div class="container max-width-adaptive-lg">
					<div class="grid gap-lg">
						<div class="col-6@md col-6@lg">
							<div class="flex flex-column gap-sm">
								<figure v-for="(category, index) in $page.event.imageUrl" class="hide-on-mobile-image">
									<g-image class="block width-100% radius-lg" :src="require(`@/assets/img/` + category)" :alt="$page.event.alt[index]" />
								</figure>
							</div>
						</div>

						<div class="col-6@md col-6@lg">
							<div class="product-v3__panel">
								<div class="margin-bottom-sm color-contrast-low text-md">
									<p>{{ $page.event.category[0].ime }}</p>
								</div>
								<div class="margin-y-sm">
									<h1>{{ $page.event.title }}</h1>
								</div>
								<div class="margin-top-sm margin-bottom-lg">
									<p class="text-lg color-accent-dark font-primary text-normal">{{ $page.event.cena }} RSD</p>
								</div>

								<div class="grid margin-bottom-lg gap-xxs">
									<div v-for="(category, index) in $page.event.nabrajanje" :key="category.id" class="flex items-center">
										<g-image class="margin-right-xs" src="~/assets/img/check.svg"></g-image>
										{{ category }}
									</div>
								</div>

								<div class="flex flex-wrap gap-md js-product-v3__cta items-center">
									<a :href="$page.event.cta" class="kupiteCTA btn btn--primary flex-grow center-between btn--md">
										Kupite danas
										<!-- <span><g-image class="margin-right-xs flex items-center" src="~/assets/img/strelica.svg"></g-image></span> -->
									</a>
									<div>
										<g-image class="margin-right-xs display@md" src="~/assets/img/logo-futer.png"></g-image>
									</div>
								</div>
								<div class="flex flex-wrap gap-md padding-top-xl">
									<g-image class="margin-right-xs" src="~/assets/img/aloeScienceCouncil.png"></g-image>

									<g-image class="margin-right-xs" src="~/assets/img/kosherRating.png"></g-image>

									<g-image class="margin-right-xs" src="~/assets/img/islamicApproval.png"></g-image>
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
							<g-image class="block width-100% radius-lg" :src="require(`@/assets/img/` + $page.event.imageUrl[0] )" />
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
									<p class="text-lg color-accent font-primary text-normal">{{ $page.event.cena }} RSD</p>
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
		}
	},

	
	metaInfo: {

		script: [
      
        
        { t: 'application/ld+json', i: '{	"@context":"https://schema.org/","@type":"asdfghg","name":"hjfsdkhfsdjkhfk","image":[/assets/img/logo-futer.png],"description": "Sleeker than ACMEs Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.","sku": "0446310786","mpn": "925872","brand": {"@type": "Forever Living Products Srbija","name": "hjksjdkh"},"review": {"@type": "Review","reviewRating": {"@type": "Rating","ratingValue": 4,"bestRating": 5},"author": {"@type": "Person","name": "Fred Benson"}	},"aggregateRating":{"@type":"AggregateRating","ratingValue": 4.4,"reviewCount": 89},"offers": {"@type": "Offer","offerCount": 5,"lowPrice": 4,"highPrice": 122,"priceCurrency": "RSD"} }' },
					],
						}
	
}

</script>


