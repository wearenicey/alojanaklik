<template>
	<Layout>
		<!-- your content here -->
		<div class="feature-v4 padding-top-xxxl padding-top-xxl@md">
			<div class="container max-width-adaptive-lg">
				<div class="feature-v4__grid grid gap-md items-center">
					<div class="col-5@md position-relative z-index-1">
						<div class="text-component">
							<h1 class="text-xxxl text-center text-left@md line-height-1 color-accent-dark">
								{{ $page.event.h1Hero }}
							</h1>
							<p class="color-accent-dark text-center text-left@md">
								{{ $page.event.pHero }}
							</p>
						</div>

						<div class="margin-top-sm margin-top-lg@lg">
							<div class="flex flex-wrap gap-sm items-center justify-center justify-start@md">
								<a @click="scroll" class="btn btn--md btn--primary">{{ $page.event.ctaHero }}</a>
							</div>
						</div>
					</div>

					<div class="col-7@md order-2">
						<figure>
							<g-image :immediate="true" class="block width-100%" :src="$page.event.slikaHero[0].url"
											 :alt="$page.event.heroAlt"/>
						</figure>
					</div>
					<div class="col-12 order-1 hide@md  margin-top-xl margin-top-0@md">
						<div class="
                    text-componet text-md@md
                    flex-center
                    margin-top-xxs
                    flex
                  ">
							<div class="vert-move">👇</div>
							<div class="text-center">
								<p>Skroluj niže za više informacija</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section class="feature-v5 margin-top-xxl padding-bottom-lg">
			<div class="feature-v5__content padding-top-xxl">
				<div class="container max-width-adaptive-lg">
					<div class="grid justify-center">
						<div class="col-12 col-8@md margin-bottom-md">
							<h2 class="font-secondary text-center color-accent-dark font-normal">
								{{ $page.event.sekcija2Naslov }}
							</h2>
						</div>

						<div class="col-12 col-8@md text-component text-center">
							<p>
								{{ $page.event.sekcija2P }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<figure class="feature-v5__media container max-width-lg">
				<g-image class="block width-100% shadow-lg" :src="$page.event.sekcija2Slika[0].url" :alt="$page.event.alt2"/>
			</figure>
		</section>

		<div class="feature-v2 padding-y-xl">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-md">
					<div class="col-4@md">
						<h2 class="text-xl letter-spacing-sm color-accent-dark font-secondary font-normal">
							{{ $page.event.sekcija3Naslov }}
						</h2>
					</div>

					<div class="col-8@md">
						<div class="text-component padding-left-md@md">
							<p class="color-accent-dark">
								{{ $page.event.sekcija3Tekst }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- your content here -->
		<section class="feature-v7 margin-bottom-xl">
			<div class="container max-width-adaptive-md">
				<div class="text-component text-center text-left@md margin-bottom-lg">
					<h2 class="font-secondary color-accent-dark font-normal">{{ $page.event.h1Hero }} karakteristike</h2>
				</div>
				<div class="grid gap-md">
					<div class="col-6@md">
						<div class="feature-v7__item flex gap-sm">
							<figure>
								<g-image :src="$page.event.kar1Ikonica[0].url" alt="Image description"/>
							</figure>

							<div class="text-component">
								<h4 class="font-secondary color-accent font-normal">{{ $page.event.kar1Naslov }}</h4>
								<p class="text-sm color-accent-dark">
									{{ $page.event.kar1P }}
								</p>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<div class="feature-v7__item flex gap-sm">
							<figure>
								<g-image :src="$page.event.kar2Ikonica[0].url" alt="Image description"/>
							</figure>

							<div class="text-component">
								<h4 class="font-secondary color-accent font-normal">{{ $page.event.kar2Naslov }}</h4>
								<p class="text-sm color-accent-dark">
									{{ $page.event.kar2P }}
								</p>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<div class="feature-v7__item flex gap-sm">
							<figure>
								<g-image :src="$page.event.kar3Ikonica[0].url" alt="Image description"/>
							</figure>

							<div class="text-component">
								<h4 class="font-secondary color-accent font-normal">{{ $page.event.kar3Naslov }}</h4>
								<p class="text-sm color-accent-dark">
									{{ $page.event.kar3P }}
								</p>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<div class="feature-v7__item flex gap-sm">
							<figure>
								<g-image :src="$page.event.kar4Ikonica[0].url" alt="Image description"/>
							</figure>

							<div class="text-component">
								<h4 class="font-secondary color-accent font-normal">{{ $page.event.kar4Naslov }}</h4>
								<p class="text-sm color-accent-dark">
									{{ $page.event.kar4P }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="container max-width-sm padding-y-xl">
			<ul class="accordion-v2 flex flex-column gap-xxxs js-accordion" data-animation="on" data-multi-items="on"
					data-version="v2">
				<li class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                ">
					<button class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  " type="button">
						<span class="text-md text-bold">Namena</span>

						<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 16 16" aria-hidden="true">
							<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
								<path d="M2 2l12 12"/>
								<path d="M14 2L2 14"/>
							</g>
						</svg>
					</button>

					<div class="accordion-v2__panel js-accordion__panel">
						<div class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    ">
							<p>
								{{ $page.event.namena }}
							</p>
						</div>
					</div>
				</li>

				<li class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                ">
					<button class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  " type="button">
						<span class="text-md text-bold">Kako se upotrebljava </span>

						<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 16 16" aria-hidden="true">
							<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
								<path d="M2 2l12 12"/>
								<path d="M14 2L2 14"/>
							</g>
						</svg>
					</button>

					<div class="accordion-v2__panel js-accordion__panel">
						<div class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    ">
							<p>{{ $page.event.upotreba }}</p>
						</div>
					</div>
				</li>

				<li class="
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                ">
					<button class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  " type="button">
						<span class="text-md text-bold">Sastojci</span>

						<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 16 16" aria-hidden="true">
							<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
								<path d="M2 2l12 12"/>
								<path d="M14 2L2 14"/>
							</g>
						</svg>
					</button>

					<div class="accordion-v2__panel js-accordion__panel">
						<div class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    ">
							<p>
								{{ $page.event.sastojci }}
							</p>
						</div>
					</div>
				</li>

				<li v-if="$page.event.napomena === '-'" class=" hide
                  accordion-v2__item
                  bg
                  shadow-sm
                  radius-md
                  js-accordion__item
                ">
					<button class="
                    reset
                    accordion-v2__header
                    padding-y-sm padding-x-md
                    js-tab-focus
                  " type="button">
						<span class="text-md text-bold">Napomena</span>

						<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 16 16" aria-hidden="true">
							<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
								<path d="M2 2l12 12"/>
								<path d="M14 2L2 14"/>
							</g>
						</svg>
					</button>

					<div class="accordion-v2__panel js-accordion__panel">
						<div class="
                      text-component
                      padding-top-xxxs padding-x-md padding-bottom-md
                    ">
							<p>
								{{ $page.event.napomena }}
							</p>
						</div>
					</div>
				</li>
				<li v-else class="
        accordion-v2__item
        bg
        shadow-sm
        radius-md
        js-accordion__item
      ">
					<button class="
          reset
          accordion-v2__header
          padding-y-sm padding-x-md
          js-tab-focus
        " type="button">
						<span class="text-md text-bold">Napomena</span>

						<svg class="icon accordion-v2__icon-arrow no-js:is-hidden" viewBox="0 0 16 16" aria-hidden="true">
							<g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10">
								<path d="M2 2l12 12"/>
								<path d="M14 2L2 14"/>
							</g>
						</svg>
					</button>

					<div class="accordion-v2__panel js-accordion__panel">
						<div class="
            text-component
            padding-top-xxxs padding-x-md padding-bottom-md
          ">
							<p>
								{{ $page.event.napomena }}
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<section class="position-relative z-index-1 padding-y-xl">
			<div class="container max-width-adaptive-md position-relative">
				<div class="grid padding-x-md padding-x-0@md">
					<div class="position-relative z-index-2 col-6@md col-5@lg">
						<div class="
                          text-component
                          bg
                          padding-md padding-lg@md
                          shadow-sm
                          line-height-md
                          margin-top-xxxl
                        ">
							<h2>{{ $page.event.opis1Naslov }}</h2>
							<p class="color-contrast-medium">
								{{ $page.event.opis1Tekst }}
							</p>
						</div>
					</div>

					<figure class="
                        position-absolute
                        z-index-1
                        top-0
                        right-0
                        height-90%
                        col-10@md
                      ">
						<g-image class="block width-100% height-100% object-cover" :src="$page.event.opis1Slika[0].url"
										 :alt="$page.event.alt3"/>
					</figure>
				</div>
			</div>
		</section>

		<section class="position-relative z-index-1 padding-y-xl">
			<div class="container max-width-adaptive-md position-relative">
				<div class="grid padding-x-md padding-x-0@md">
					<div class="position-relative z-index-2 col-6@md col-5@lg">
						<div class="
                          text-component
                          bg
                          padding-md padding-lg@md
                          shadow-sm
                          line-height-md
                          margin-top-xxxl
                        ">
							<h2>{{ $page.event.opis2Naslov }}</h2>
							<p class="color-contrast-medium">
								{{ $page.event.opis2Tekst }}
							</p>
						</div>
					</div>

					<figure class="
                        position-absolute
                        z-index-1
                        top-0
                        left-0
                        height-90%
                        col-10@md
                      ">
						<g-image class="block width-100% height-100% object-cover" :src="$page.event.opis2Slika[0].url"
										 :alt="$page.event.alt4"/>
					</figure>
				</div>
			</div>
		</section>

	</Layout>
</template>
<page-query>

query Proizvodi ($id: ID!) {
event: proizvodi(id: $id) {

id
pageTitle
metaDesc
category
h1Hero
path
pHero
ctaHero
slikaHero
{
url
}
heroAlt

sekcija2Naslov
sekcija2P
sekcija2Slika {
url
}
alt2
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
alt3
opis2Naslov
opis2Tekst
opis2Slika {
url
}
alt4
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
			titleTemplate: this.$page.event.pageTitle,

			meta: [{name: "description", content: this.$page.event.metaDesc}],
			// link: [{ rel: "canonical", href: `https://www.alojanaklik.rs/proizvodi` }],

			// etc...
		};
	},

	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");

		// 👈 load the JS code once the component is mounted


		let accordion = document.createElement("script");
		accordion.setAttribute("src", "../../accordion.js");
		accordion.setAttribute("id", "accordion-js");
		document.body.appendChild(frontEnd);


		document.body.appendChild(accordion);
	},
	destroyed() {
		document.getElementById("main-header-js").remove();
		// remove the JS code once the component has been destroyed
		document.getElementById("accordion-js").remove();
	},
	methods: {
		scroll() {
			let element = document.getElementById("yourID");
			element.scrollIntoView({behavior: "smooth", block: "end"});
		},
	},
};
</script>
