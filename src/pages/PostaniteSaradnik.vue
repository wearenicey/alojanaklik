<template>
	<Layout>
		<section class="position-relative padding-y-xxl" style="background-color: #f9fafb">
			<div class="container max-width-adaptive-lg">
				<div class="grid gap-lg items-center">
					<div class="col-6@md">
						<div class="text-component">
							<h1>Savremeni online business</h1>
							<p class="color-contrast-medium">Svi znamo da je pokretanje sopstvenog posla najbolji način za postizanje finansijske slobode, ali većina nas je previše uplašena ili nema dovoljno novca da to započne.</p>
						</div>

						<div class="">
							<div class="flex flex-wrap inline-flex@sm items-center padding-top-md padding-bottom-lg">
								<a href="" class="btn btn--primary btn--md display@md flex-grow justify-between btn--md@lg">
									Saznaj više

									<span> <g-image class="margin-left-md flex flex-center radius-bottom-left" src="~/assets/img/strelica.svg"></g-image></span>
								</a>
								<a href="" class="btn btn--primary hide@md flex-grow justify-between btn--md@lg">
									Saznaj više

									<span>
										<g-image class="margin-left-md flex flex-center radius-bottom-left" src="~/assets/img/strelica.svg"></g-image>
									</span>
								</a>
							</div>
						</div>
					</div>

					<div class="col-6@md">
						<g-image class="block width-100%" :immediate="true" src="~/assets/img/slikaaa.png" alt="Forever Living" quality="75" />
					</div>
				</div>
			</div>
		</section>

		<section class="position-relative z-index-1 padding-y-xl">
			<div class="container max-width-adaptive-md">
				<div class="margin-bottom-xl">
					<h1 class="text-center">4 jednostavna koraka!</h1>
				</div>

				<ol class="hiw-list">
					<li class="hiw-list__item">
						<div class="hiw-list__item-inner">
							<div class="hiw-list__counter" aria-hidden="true"></div>

							<div class="flex-grow">
								<div class="hiw-list__content grid gap-md items-center@md">
									<figure class="col-6@md">
										<g-image class="block width-100%" :immediate="true" src="~/assets/img/how-it-works-img-1.png" alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Kontaktirajte nas ili popunite obrazac</h2>
											<p class="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto dolor a atque accusantium accusamus similique unde ipsum quos.</p>
										</div>
                    <div class="margin-top-md">
											<a class="btn btn--primary" href="#0">Get Started</a>
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
										<g-image class="block width-100%" :immediate="true" src="~/assets/img/how-it-works-img-2.png" alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Kupovinom Start Your Journey paketa dobijate ulaznicu u naš tim</h2>
											<p class="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur id qui in nulla debitis saepe.</p>
										</div>
                    <div class="margin-top-md">
											<a class="btn btn--primary" href="#0">Get Started</a>
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
										<g-image class="block width-100%" :immediate="true" src="~/assets/img/how-it-works-img-3.png" alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Upoznajte svoje okruženje sa proizvodima iz Forever-a i poslovnim mogućnostima</h2>
											<p class="color-contrast-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In qui quos nostrum amet assumenda.</p>
										</div>

										<div class="margin-top-md">
											<a class="btn btn--primary" href="#0">Get Started</a>
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
										<g-image class="block width-100%" :immediate="true" src="~/assets/img/how-it-works-img-3.png" alt="Forever Living" quality="75" />
									</figure>

									<div class="col-6@md">
										<div class="text-component">
											<h2 class="text-lg">Razvijajte svoj poslovni plan sa svojim sponzorom i novim članovima kroz isti ciklus</h2>
											<p class="color-contrast-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In qui quos nostrum amet assumenda.</p>
										</div>

										<div class="margin-top-md">
											<a class="btn btn--primary" href="#0">Get Started</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ol>
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
				window.location.href = "https://www.alojanaklik.rs/contact/";
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

		document.body.appendChild(frontEnd);
		document.body.appendChild(scrolling);
	},
	destroyed() {
		document.getElementById("main-header-js").remove();
		document.getElementById("scrolling-animations").remove();

		// remove the JS code once the component has been destroyed
	},
};
</script>