<template>
	<Layout>
		<section class="position-relative padding-top-xl padding-bottom-xxl bg-white" style="z-index: 1">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-6@md">
						<div class="text-component text-center text-left@md">
							<h1 class="text-xxl">Otkrijte moć Forever Living proizvoda za zdraviji i srećniji život</h1>
							<p class="text-md color-contrast-medium">
								Izgledaj bolje i osećaj se odlično uz proizvode na bazi aloje vere.
							</p>
						</div>

						<div class="">
							<div class="flex flex-wrap gap-xs inline-flex@sm justify-center justify-start@md items-center padding-top-md padding-bottom-lg">
								<g-link to="/proizvodi/" class="btn btn--primary btn--md display@md justify-between btn--md@lg">
									Upoznajte se sa proizvodima
								</g-link>
								<g-link to="/kontakt/" class="btn btn--subtle btn--md display@md justify-between btn--md@lg">
									Pišite nam
								</g-link>
								<g-link to="/proizvodi/" class="btn btn--primary hide@md ">
									Upoznajte se sa proizvodima
								</g-link>
								<g-link to="/kontakt/" class="btn btn--subtle hide@md  justify-center">
									Pišite nam
								</g-link>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<g-image class="position-absolute bottom-xxxl -translate-x-50% -translate-x-20%@md display@md translate" src="~/assets/img/znak.svg"></g-image>

						<g-image class="block width-100%" :immediate="true" src="~/assets/img/slikaaa.png" alt="Forever Living" quality="75" />
					</div>
				</div>
			</div>
		</section>

		<section class="hiw-v2 position-relative z-index-1 padding-y-xl  bg-white">
			<div class="container max-width-adaptive-lg text-center">
				<div class="margin-bottom-xl">
					<h2 class="text-center">Benefiti</h2>
				</div>

				<ul class="hiw-v2__grid justify-center">
					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100%" :immediate="true" src="~/assets/img/blagostanje-aloe-vera.png" alt="Forever Living" quality="75" />
						</figure>

						<div class="text-component text-center text-left@sm text-space-y-md line-height-md">
							<h2 class="text-lg">Blagostanje</h2>
							<p class="color-contrast-medium">Unapredite zdravlje i vitalnost uz pažljivo formulisane proizvode, dizajnirane da podignu nivoe energije, podrže imuni sistem i poboljšaju vaše blagostanje.</p>
						</div>
					</li>

					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100%" :immediate="true" src="~/assets/img/sjajna-koza-aloe-vera.png" alt="Forever Living" quality="75" />
						</figure>

						<div class="text-component text-center text-left@sm text-space-y-md line-height-md">
							<h2 class="text-lg">Sjajna koža</h2>
							<p class="color-contrast-medium">Otključajte svoju prirodnu lepotu uz moć aloje vere i biljnih ekstrakata, za blistav ten, mladalačku kožu i zdravu kosu i nokte.</p>
						</div>
					</li>

					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100%" :immediate="true" src="~/assets/img/harmonija-aloe-vera.png" alt="Forever Living" quality="75" />
						</figure>

						<div class="text-component text-center text-left@sm text-space-y-md line-height-md">
							<h2 class="text-lg">Harmonija za varenje</h2>
							<p class="color-contrast-medium">Za zdrav sistem za varenje i poboljšanu apsorpciju hranljivih materija uz magičnu aloja veru i umirujuće biljne mešavine.</p>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section class="products-gallery-v2 padding-bottom-md padding-top-xxl">
			<div class="container max-width-adaptive-sm">
				<div class="gap-lg flex-row@md">
					<div class="margin-bottom-md">
						<div class="text-component text-center">
							<h2 class="font-secondary text-xl">Najtraženiji proizvodi</h2>
							<p class="text-base">Počnite danas da živite zdravije, srećnije i ispunjenije. Upoznajte se sa proizvodima.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="">
			<div class="container max-width-adaptive-lg padding-bottom-lg">
				<div class="grid gap-md padding-bottom-md">
					<g-link class="card-v11 col-4@md radius-lg" to="/napici/aloja-vera-gel/" style="background-image: url(../aloe-vera-gel.webp)" aria-label="Link description">
						<div class="card-v11__box width-90% border border-2 border-contrast-low border-opacity-50% radius-lg">
							<div class="padding-sm text-center text-md">
								<p class="color-white">Forever Aloe Vera Gel</p>
							</div>
						</div>
					</g-link>
					<g-link class="card-v11 col-4@md radius-lg" to="/preparati-za-higijenu/pasta-za-zube/" style="background-image: url(../pasta-za-zube.webp)" aria-label="Link description">
						<div class="card-v11__box width-90% border border-2 border-contrast-low border-opacity-50% radius-lg">
							<div class="padding-sm text-center text-md">
								<p class="color-white">Pasta za zube</p>
							</div>
						</div>
					</g-link>
					<g-link class="card-v11 col-4@md radius-lg" to="/preparati-za-negu-koze/aloe-first/" style="background-image: url(../aloe-first.jpg)" aria-label="Link description">
						<div class="card-v11__box width-90% border border-2 border-contrast-low border-opacity-50% radius-lg">
							<div class="padding-sm text-center text-md">
								<p class="color-white">Aloe First</p>
							</div>
						</div>
					</g-link>
					<div class="padding-top-md padding-top-0@md text-center col-12">
						<g-link to="/proizvodi/" class="btn btn--primary margin-right-xs@md margin-bottom-sm">Pogledajte sve proizvode </g-link>
					</div>
				</div>
			</div>
		</section>

		<section class="container max-width-adaptive-lg padding-bottom-xl padding-top-xxl">
			<div class="tab-features-v2 js-tabs" data-show-panel-class="tab-features-v2__panel--display" data-hide-panel-class="tab-features-v2__panel--hide">
				<div class="grid gap-lg items-center@md">
					<div class="col-6@md">
						<div class="col-12 margin-bottom-lg">
							<h2 class="text-lg margin-bottom-xs">Aloe vera gel</h2>
							<p class="color-contrast-medium text-md">99,7% čist gel iz unutrašnjosti lista aloje - Bez dodatnog konzervansa</p>
							<g-link class="btn btn--primary btn--sm margin-top-md" to="/napici/aloja-vera-gel/">Saznajte više</g-link>
						</div>
						<ul class="tab-features-v2__controls-list js-tabs__controls" aria-label="Tabs navigation">
							<li>
								<a href="#tab-features-1" class="tab-features-v2__control" aria-selected="true">
									<span class="tab-features-v2__control-title font-primary">Antioksidans</span>
									<span class="tab-features-v2__control-description">Neutralizuje slobodne radikale u telu</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-2" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Imunostimulans</span>
									<span class="tab-features-v2__control-description">Jača otpornost organizma.</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-3" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Antidijabetik</span>
									<span class="tab-features-v2__control-description">Normalizuje nivo šećera u krvi</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-4" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Antiflogistik</span>
									<span class="tab-features-v2__control-description">Smanjuje zapaljenske procese u telu.</span>
								</a>
							</li>

							<li class="tab-features-v2__text-crop-gradient" aria-hidden="true"></li>
						</ul>
					</div>

					<div class="tab-features-v2__panels col-6@md js-tabs__panels">
						<section id="tab-features-1" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/aloe-vera-gel-sok-limun.jpg" alt="Image description" />
						</section>

						<section id="tab-features-2" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/aloe-vera-gel-sok-limun-2.jpg" alt="Image description" />
						</section>

						<section id="tab-features-3" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/aloe-vera-gel-sok-limun-3.jpg" alt="Image description" />
						</section>

						<section id="tab-features-4" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/aloe-vera-gel-sok-limun-4.jpg" alt="Image description" />
						</section>
					</div>
				</div>
			</div>
		</section>

		<section class="container max-width-adaptive-lg padding-bottom-xl padding-top-xxl">
			<div class="tab-features-v2 js-tabs" data-show-panel-class="tab-features-v2__panel--display" data-hide-panel-class="tab-features-v2__panel--hide">
				<div class="grid gap-lg items-center@md">
					<div class="tab-features-v2__panels order-2 order-1@md col-6@md js-tabs__panels">
						<section id="tab-features-1" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/c9-program-za-mrsavljenje.jpg" alt="Image description" />
						</section>

						<section id="tab-features-2" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/c9-program-za-mrsavljenje-2.jpg" alt="Image description" />
						</section>

						<section id="tab-features-3" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/c9-program-za-mrsavljenje-3.jpg" alt="Image description" />
						</section>

						<section id="tab-features-4" class="tab-features-v2__panel js-tabs__panel">
							<g-image class="block width-100% radius-md" src="~/assets/img/c9-program-za-mrsavljenje-4.jpg" alt="Image description" />
						</section>
					</div>

					<div class="col-6@md order-1 order-2@md">
						<div class="col-12 margin-bottom-lg">
							<h2 class="text-lg margin-bottom-xs">C9 - Program za mršavljenje</h2>
							<p class="color-contrast-medium text-md">Devetodnevni program koji će vam pomoći da promenite navike u ishrani i da izgradite zdraviji životni stil.</p>
							<g-link class="btn btn--primary btn--sm margin-top-md" to="/mrsavljenje/c9-aloja-vanila/">Saznajte više</g-link>
						</div>
						<ul class="tab-features-v2__controls-list js-tabs__controls" aria-label="Tabs navigation">
							<li>
								<a href="#tab-features-1" class="tab-features-v2__control" aria-selected="true">
									<span class="tab-features-v2__control-title font-primary">Čisti</span>
									<span class="tab-features-v2__control-description">Oslobodite se toksina, pokrenite gubitak težine i podstičete dobro varenje.</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-2" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Dodaci ishrani</span>
									<span class="tab-features-v2__control-description">Obezbeđuju esencijalne hranljive materije za opšte blagostanje i energiju.</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-3" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Zamene za obroke</span>
									<span class="tab-features-v2__control-description">Pogodne i uravnotežene opcije za podršku zdravih navika u ishrani.</span>
								</a>
							</li>

							<li>
								<a href="#tab-features-4" class="tab-features-v2__control">
									<span class="tab-features-v2__control-title font-primary">Smernice za vežbanje</span>
									<span class="tab-features-v2__control-description">Prilagođene preporuke za vežbanje za poboljšane rezultate i kondiciju.</span>
								</a>
							</li>

							<li class="tab-features-v2__text-crop-gradient" aria-hidden="true"></li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="feature-v2 padding-top-xl padding-bottom-md">
			<div class="container max-width-adaptive-sm">
				<div class="grid gap-md">
					<div class="text-center">
						<div class="text-component margin-bottom-lg">
							<h2 class="text-xxl">Aloe vera je lekovita biljka koju ljudi koriste hiljadama godina.</h2>
							<p class="text-base">
								O njoj se treba brinuti kako bi gel aloje u njenom lišću ostao svež i moćan sa zdravim prednostima! Zato svake godine, Forever Living prati 50 miliona biljaka tokom njihovog životnog ciklusa, od sadnice do berbe. Koristi se
								od lečenja opekotina do poboljšanja vašeg imuno sistema!
							</p>
						</div>
						<div class="flex flex-wrap flex-center gap-sm">
							<g-link class="btn btn--subtle" to="/istorija-kompanije/">Saznajte više o Aloji</g-link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container max-width-adaptive-md">
				<div class="grid">
					<div class="col">
						<g-image class="block width-100%" :immediate="true" src="~/assets/img/pocetna-zadnja-sekcija.png" alt="flp klijenti" />
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative padding-y-xxxl bg-secondary">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-5@md">
						<div class="text-component color-secondary-lighter white-text">
							<strong>Živite zdrav i srećan način života kakav zaslužujete.</strong> Forever Living pruža priliku da započnete posao sa stvarnim potencijalom i dokazanim rezultatima, a da pritom ne žrtvujete ravnotežu između poslovnog i
							privatnog života.
						</div>

						<div class="">
							<div class="flex flex-wrap inline-flex@sm items-center padding-top-md padding-bottom-lg">
								<g-link to="/proizvodi/" class="flex flex-grow btn btn--primary"> Upoznajte se sa proizvodima </g-link>
							</div>
						</div>
					</div>

					<div class="col-7@md">
						<g-image class="block width-100% r" :immediate="true" src="~/assets/img/join_forever.jpg" alt="Forever Living" />
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center padding-top-xl padding-top-0@md">
					<div class="col-6@md">
						<div class="text-component color-accent black-text text-lg">
							<span>Premijum proizvodi</span> Forever Living predstavlja najbolje u pogledu kvaliteta i efikasnosti. Forever proizvodi su napravljeni od prirodnih sastojaka i podržani su dugogodišnjim ispitivanjem.
						</div>
					</div>
					<div class="col-6@md">
						<g-image class="block width-100% r" :immediate="true" src="~/assets/img/premium-proizvodi.png" alt="flp klijenti" />
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-6@md order-last">
						<g-image class="block width-100% r" :immediate="true" src="~/assets/img/zdravo-okruzenje.png" alt="flp klijenti" />
					</div>
					<div class="col-6@md">
						<div class="text-component color-secondary-light black-text text-lg">
							<span>Zdravo okruženje</span> Forever Living je kompanija sa savešću, gde je na prvom mestu briga o planeti, ljudima i generacijama koje dolaze. Nastojimo da pozitivno utičemo na svet oko nas
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-6@md">
						<div class="text-component color-primary-dark black-text text-lg">
							<span>Briga o drugima</span> nudi priliku za posao u kome možete zaraditi koliko god želite, a da istovremeno budete u mogućnosti da postignete savršenu ravnotežu između poslovnog i privatnog života kojoj svi teže!
						</div>
					</div>
					<div class="col-6@md">
						<g-image class="block width-100%" :immediate="true" src="~/assets/img/briga-o-drugima.png" alt="flp klijenti" />
					</div>
				</div>
			</div>
		</section>

		<section class="container max-width-adaptive-lg">
			<div class="articles padding-top-xxl margin-bottom-xl">
				<div class="text-center">
					<h1 class="text-xxl">Blog - Aloja Vera</h1>
				</div>
			</div>
			<div>
				<div>
					<transition-group class="projects" name="fade">
						<CardItemHome v-for="{ node } in latestPosts" :key="node.id" :record="node" />
					</transition-group>
				</div>
				<div class="flex justify-center margin-top-md">
					<g-link to="/blog/" class="btn btn--subtle">Procitaj više</g-link>
				</div>
			</div>
		</section>

		<div class="container max-width-adaptive-lg padding-y-xl">
			<div class="radius-lg inner-glow shadow-xs padding-xxl bg-secondary">
				<div class="grid gap-md items-center">
					<div class="col text-center">
						<div class="text-component">
							<h2 class="text-xl color-white">Inovativna rešenja</h2>
							<p class="color-bg-darker">Povećanje nivoa energije, jačanje imuno sistema i održavanje zdravlja, sa prirodnim sastojcima bez dodavanja hemikalija i konzervansa. To je Forever Living</p>
						</div>
						<div class="flex padding-top-md justify-center">
							<g-link to="/kontakt/" class="btn btn--accent"> Kontaktirajte nas</g-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
  query LatestPosts {
    latestPosts: allPost (perPage: 4, sortBy: "created", order: DESC) {
      edges {
        node {
          id
          title
          path
          image
          imageTwo {
            path
            alt
          }
          featured
          humanTime: created(format: "DD. MM. YYYY.")
          datetime: created
          tags {
            title
          }
        }
      }
    }
  }
</page-query>

<script>
import CardItemHome from "~/components/CardItemHome.vue";

export default {
	metaInfo() {
		// meta deskripcija
		return {
			title: "Forever Living Proizvodi - Zdravlje na klik od vas",
			titleTemplate: "Forever Living Proizvodi - Zdravlje na klik od vas",
			meta: [
				{
					name: "description",
					content: "Proizvodi od aloe vere koji pomažu u poboljšanju zdravlja, imuniteta i opšteg stanja. Besplatne informacije o proizvodima i popusti."
				},
				{
					name: "og:image",
					content: "https://www.alojanaklik.rs/assets/static/pocetna-kartica-1.71307f6.c41812ecc77912f15e9cd0d465c2cdf6.jpg"
				}
			]
		};
	},

	// call component
	components: {
		CardItemHome
	},

	data() {
		return {
			latestPosts: [] // Replace loadedPosts with latestPosts
		};
	},

	created() {
		this.latestPosts.push(...this.$page.latestPosts.edges); // Replace this.$page.entries.edges with this.$page.latestPosts.edges
	},

	// pozivanje codyhouse javascript ui
	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");
		document.body.appendChild(frontEnd);

		let sticky = document.createElement("script");
		sticky.setAttribute("src", "../sticky.js");
		sticky.setAttribute("id", "sticky-js");
		document.body.appendChild(sticky);

		let tabs = document.createElement("script");
		tabs.setAttribute("src", "../tabs.js");
		tabs.setAttribute("id", "tabs-js");
		document.body.appendChild(tabs);
	},
	destroyed() {
		document.getElementById("sticky-js").remove();
		document.getElementById("main-header-js").remove();
		document.getElementById("tabs-js").remove();
	}
};
</script>

<style>
.hover-text:hover {
	color: white;
}
</style>
