<template>
	<Layout>
		<div class="padding-y-sm"></div>

		<section class="">
			<div class="container max-width-xs margin-y-xl">
				<form class="sign-up-form" method="POST" data-netlify="true">
					<div class="text-component text-center margin-bottom-lg">
						<h1>Kontaktirajte nas</h1>
					</div>


					<div class="margin-bottom-sm">
						<div class="grid gap-md">
							<div>
								<label class="form-label margin-bottom-xxs" for="textarea">Oblast interesovanja?</label>
								<div class="select">
									<select class="select__input btn radius-0 shadow-none border" name="role[]" id="select-this" required>
										<option value="" disabled selected hidden>Izaberite</option>
										<option value="Želimo da saznamo više o Aloja proizvodima">Želimo da saznamo više o Aloja proizvodima</option>
										<option value="Podrška mom zdravlju">Podrška mom zdravlju</option>
										<option value="Pogodnosti kupovine Aloe Vera proizvoda">Pogodnosti kupovine Aloe Vera proizvoda</option>
										<option value="Buduča poslovna saradnja">Buduća poslovna saradnja</option>
									</select>

									<svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
								</div>
							</div>
							<div>
								<label class="form-label margin-bottom-xxs" for="textarea">Šta biste želeli da nas pitate?</label>
								<textarea cols="64" rows="6" class="form-control width-100%" name="textarea" id="textarea" required></textarea>
								<!-- <p class="text-xs color-contrast-medium margin-top-xxs">Use helper text to provide additional information.</p> -->
							</div>
							<div>
								<label class="form-label margin-bottom-xxxs" for="input-first-name">Vaše ime? </label>
								<input class="form-control width-100%" type="text" name="input-first-name" id="input-first-name" required />
							</div>

							<div>
								<label class="form-label margin-bottom-xxxs" for="input-last-name">Broj telefona na koji Vas možemo kontaktirati? </label>
								<input class="form-control width-100%" type="tel" id="phone" name="phone" placeholder="064444000" required />
							</div>
						</div>
					</div>

					<div class="margin-bottom-sm">
						<label class="form-label margin-bottom-xxxs" for="input-email">Vaša email adresa kako bismo Vam poslali naš odgovor?</label>
						<input class="form-control width-100%" type="email" name="input-email" id="input-email" placeholder="email@myemail.com" required />
					</div>

					<div class="margin-bottom-sm">
						<button class="btn btn--primary btn--md width-100%" type="submit">Pošaljite</button>
					</div>
				</form>
			</div>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo() {
		// meta deskripcija
		return {
			title: "Kontakt",
			titleTemplate: "Kontakt",
			meta: [
				{
					name: "description",
					content: "Kontaktirtajte nas i raspitajte se u vezi sa aktuelnim akcijama i popustima."
				},
				{
					name: "og:image",
					content: "https://www.alojanaklik.rs/assets/static/pocetna-kartica-1.71307f6.c41812ecc77912f15e9cd0d465c2cdf6.jpg"
				}
			]
		};
	},

	mounted() {
		let frontEnd = document.createElement("script");
		frontEnd.setAttribute("src", "../main-header.js");
		frontEnd.setAttribute("id", "main-header-js");

		// 👈 load the JS code once the component is mounted

		let accordion = document.createElement("script");
		accordion.setAttribute("src", "../accordion.js");
		accordion.setAttribute("id", "accordion-js");
		document.body.appendChild(frontEnd);

		document.body.appendChild(accordion);
	},
	destroyed() {
		document.getElementById("main-header-js").remove();

		// remove the JS code once the component has been destroyed
		document.getElementById("accordion-js").remove();
	},
};
</script>