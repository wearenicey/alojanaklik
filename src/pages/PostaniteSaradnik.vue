<template>
	<Layout>
		<section class="position-relative padding-y-xxl" style="background-color: #f9fafb">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-6@md">
						<div class="text-component">
							<h1>Savremeni online business</h1>
							<p class="color-contrast-medium">Svi znamo da je pokretanje sopstvenog posla najbolji način za postizanje
								finansijske slobode, ali većina nas je previše uplašena ili nema dovoljno novca da to započne.</p>
						</div>

						<div class="">
							<div class="flex flex-wrap inline-flex@sm items-center padding-top-md padding-bottom-lg">
								<a href="/kontakt/" class="btn btn--primary btn--md display@md flex-grow justify-between btn--md@lg">
									Kontaktirajte nas

									<span>
										<g-image class="margin-left-md flex flex-center radius-bottom-left"></g-image>
									</span>
								</a>
								<a href="/kontakt/" class="btn btn--primary hide@md flex-grow justify-between btn--md@lg">
									Kontaktirajte nas

									<span>
										<g-image class="margin-left-md flex flex-center radius-bottom-left"></g-image>
									</span>
								</a>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<g-image class="block width-100%" :immediate="true" src="~/assets/img/slikaaa.png" alt="Forever Living"
							quality="75" />
					</div>
				</div>
			</div>
		</section>

		<section class="hiw-v2 position-relative z-index-1 padding-y-xl">
			<div class="container max-width-adaptive-lg">
				<div class="margin-bottom-xl">
					<h1 class="text-center">4 jednostavna koraka!</h1>
				</div>

				<ul class="hiw-v2__grid">
					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100% radius-lg shadow-sm" :immediate="true" src="~/assets/img/1 korak.svg"
								alt="Forever Living" quality="75" />

							<svg class="hiw-v2__arrow" viewBox="0 0 40 40">
								<circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
								<polyline points="29 17 20 26 11 17" fill="none" stroke="var(--color-white)" stroke-linecap="round"
									stroke-linejoin="round" stroke-width="2" />
							</svg>
						</figure>

						<div class="text-component text-space-y-md line-height-md">
							<h2 class="text-md">1. Korak</h2>
							<p class="color-contrast-medium">Kontaktirajte nas ili popunite obrazac</p>
						</div>
					</li>

					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100% radius-lg shadow-sm" :immediate="true" src="~/assets/img/2 korak.svg"
								alt="Forever Living" quality="75" />

							<svg class="hiw-v2__arrow" viewBox="0 0 40 40">
								<circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
								<polyline points="29 17 20 26 11 17" fill="none" stroke="var(--color-white)" stroke-linecap="round"
									stroke-linejoin="round" stroke-width="2" />
							</svg>
						</figure>

						<div class="text-component text-space-y-md line-height-md">
							<h2 class="text-md">2. Korak</h2>
							<p class="color-contrast-medium">Kupovinom "Start Your Journey" paketa dobijate ulaznicu u naš tim</p>
						</div>
					</li>

					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100% radius-lg shadow-sm" :immediate="true" src="~/assets/img/3 korak.svg"
								alt="Forever Living" quality="75" />

							<svg class="hiw-v2__arrow" viewBox="0 0 40 40">
								<circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
								<polyline points="29 17 20 26 11 17" fill="none" stroke="var(--color-white)" stroke-linecap="round"
									stroke-linejoin="round" stroke-width="2" />
							</svg>
						</figure>

						<div class="text-component text-space-y-md line-height-md">
							<h2 class="text-md">3. Korak</h2>
							<p class="color-contrast-medium">Upoznajte svoje okruženje sa proizvodima iz Forever-a i poslovnim
								mogućnostima</p>
						</div>
					</li>

					<li class="hiw-v2__item">
						<figure class="hiw-v2__figure margin-bottom-md">
							<g-image class="block width-100% radius-lg shadow-sm" :immediate="true" src="~/assets/img/4 korak.svg"
								alt="Forever Living" quality="75" />
						</figure>

						<div class="text-component text-space-y-md line-height-md">
							<h2 class="text-md">4. Korak</h2>
							<p class="color-contrast-medium">Razvijajte svoj poslovni plan sa svojim sponzorom i novim članovima kroz
								isti ciklus</p>
						</div>
					</li>
				</ul>
			</div>
		</section>

		
		<section class="position-relative bg-quaternary-light padding-bottom-xl padding-bottom-0@lg">
			<div class="container max-width-adaptive-sm">
				<div class="text-center padding-top-xl padding-bottom-lg">
					<div class="text-component">
						<h2>Forever Living benefiti</h2>
						<!-- <p class="color-secondary">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p> -->
					</div>
				</div>
			</div>
			<div class="container max-width-adaptive-lg">
				<div class="grid items-center">
					<div class="col-6@md col-3@lg">
						<div class="grid flex-column flex-center">
							<div class="col margin-bottom-lg">
								<div class="text-center text-left@md">
									<g-image class="margin-bottom-sm" src="~/assets/img/forever-living-benefiti-icon-01.svg"></g-image>
									<div class="text-component">
										<h4>Budite sebi šef</h4>
										<p class="color-secondary">Imajte slobodu da sami napravite svoj raspored, radite gde želite i koliko želite.</p>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="text-center text-left@md">
									<g-image class="margin-bottom-sm" src="~/assets/img/forever-living-benefiti-icon-02.svg"></g-image>
									<div class="text-component">
										<h4>Alati i obuke</h4>
										<p class="color-secondary">Od raznih radionica i webinara, do stotine besplatnih materijala online, imate sve što Vam je potrebno za uspeh.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-6@md order-lasT display@lg">
						<g-image class="block width-100% height-100%" quality="100" :immediate="true" src="~/assets/img/forever-living-benefiti.png" alt="Forever Living" />
					</div>
					<div class="col-6@md col-3@lg">
						<div class="grid flex-column flex-center">
							<div class="col margin-bottom-lg">
								<div class="text-center text-left@md">
									<g-image class="margin-bottom-sm" src="~/assets/img/forever-living-benefiti-icon-03.svg"></g-image>
									<div class="text-component">
										<h4>Putujte svetom</h4>
										<p class="color-secondary">Postanite svetski putnik uz Forever Living. Iskoristite priliku i posetite najlepše gradove na planeti.</p>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="text-center text-left@md">
									<g-image class="margin-bottom-sm" src="~/assets/img/forever-living-benefiti-icon-04.svg"></g-image>
									<div class="text-component">
										<h4>Popusti na proizvode</h4>
										<p class="color-secondary">Ostvarite ekskluzivne popuste na proizvode u kojima ćete uživati sami ili prilikom prodaje drugima</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="feature-v2 padding-y-xxxl bg-primary">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-md">
					<div class="col-4@md">
						<h1 class="">Mnogi odustanu pre nego što i pokušaju. Ali Vi niste poput većine ljudi</h1>
					</div>

					<div class="col-8@md">
						<div class="padding-left-md@md">
							<div class="text-component">
								<p class="">
									Forever Living je prilika za sve koji žele više od standardnog 8 do 4 posla, bez budućih izgleda ili
									koristi, dok ujedno ne žele da budu zaglavljeni u tuđem snu. Kada se pridružite Forever Livingu,
									dobijate pristup ekskluzivnim proizvodima po veleprodajnim cenama, tako da ih možete prodati po maloprodajnoj vrednosti
									bez ikakvih dodatnih troškova - to će vam omogućiti da ostvarite dodatni prihod dok drugima pomažete
									da pomognu sebi i ostvare svoje snove!
								</p>
							</div>

							<div class="flex justify-start margin-top-sm"><a class="btn btn--subtle" href="/kontakt/">Kontaktirajte
									nas</a></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative z-index-1 padding-y-xl">
			<div class="container max-width-adaptive-md">
				<div class="margin-bottom-xl">
					<h1 class="text-center">Stvorimo Vaš izuzetan poslovni kutak uz Forever Living</h1>
					<div class="margin-top-md text-center">
						<a class="btn btn--sm btn--primary" href="/kontakt/">Pridružite nam se</a>
					</div>
				</div>

				<ol class="hiw-list">
					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100% radius-lg" :immediate="true" src="~/assets/img/sekcija-3-1.jpg"
											alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Sami planirate i organizujete svoje vreme.</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100% radius-lg" :immediate="true" src="~/assets/img/sekcija-3-2.jpg"
											alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Osećajte se kao da je svaki dan poput godisnjeg odmora.</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100% radius-lg" :immediate="true" src="~/assets/img/sekcija-3-3.jpg"
											alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Dragoceni momenti sa najdražima nikada neće biti propušteni.</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100% radius-lg" :immediate="true" src="~/assets/img/sekcija-3-4.jpg"
											alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Prilagodite posao Vašem ritmu i stilu života.</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>

					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100% radius-lg" :immediate="true" src="~/assets/img/sekcija-3-5.jpg"
											alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Ostvarite finansijsku slobodu u razvijenom poslovnom biznisu.</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<section class="sticky-hero sticky-hero--overlay-layer margin-bottom-xl js-sticky-hero">
			<div class="sticky-hero__media" style="background-image: url(../postanite-saradnik-2.jpg)" aria-hidden="true">
			</div>

			<div class="sticky-hero__content">
				<div class="container max-width-md text-component text-center">
					<h3 class="text-xxxxl color-secondary">Stvorimo Vaš izuzetan poslovni kutak uz Forever Living</h3>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
	export default {
		//meta deskripcija
		metaInfo: {
			title: "Postanite saradnik",
		},
		methods: {
			z() {
				if (process.isClient)
					// this will run when linking directly or after a refresh
					window.location.href = "https://www.alojanaklik.rs/kontakt/";
			},
		},

		//CodyHouse javascript UI
		mounted() {
			let frontEnd = document.createElement("script");
			frontEnd.setAttribute("src", "../main-header.js");
			frontEnd.setAttribute("id", "main-header-js");

			let scrolling = document.createElement("script");
			scrolling.setAttribute("src", "../scrolling-animations.js");
			scrolling.setAttribute("id", "scrolling-animations");

			let stickyHero = document.createElement("script");
			scrolling.setAttribute("src", "../sticky.js");
			scrolling.setAttribute("id", "stickyHero");

			document.body.appendChild(frontEnd);
			document.body.appendChild(scrolling);
		},
		destroyed() {
			document.getElementById("main-header-js").remove();
			document.getElementById("scrolling-animations").remove();
			document.getElementById("stickyHero").remove();

			// remove the JS code once the component has been destroyed
		},
	};
</script>