<template>
	<Layout>
		<div class="padding-y-sm"></div>

		<section class="contact-v3 position-relative z-index-1">
			<div class="container max-width-xs margin-bottom-lg">
				<div class="text-component text-center">
					<h1>Kontaktirajte nas</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos impedit nesciunt voluptates magni vero itaque.</p>
				</div>
			</div>

			<div class="container max-width-adaptive-md">
				<div class="grid gap-lg">
					<div class="col-6@md">
						<dl class="dl-v2">
							<div class="grid gap-xs">
								<div class="dl-v2__item border-left">
										<div class="user-cell__body margin-bottom-sm">
											<figure aria-hidden="true">
												<img class="user-cell__img" src="https://codyhouse.co/app/assets/img/user-cell-img-1.jpg" alt="Jelena Babarogic" />
											</figure>

											<div class="user-cell__content text-component line-height-sm text-space-y-xxs">
												<p>
													<a href="#0" class="color-contrast-high"><strong>Jelena Babarogic</strong></a>
												</p>
												<p class="color-contrast-medium">Doktor opste prakse</p>
											</div>
										</div>

										<div class="user-cell__cta">
											<button class="btn btn--subtle">Pozovi</button>
										</div>
								</div>

								<div class="dl-v2__item border-left">
									<dt class="dl-v2__title">Email</dt>
									<dd class="dl-v2__description">
										<a href="mailto:webmaster@example.com" class="link">hello@myemail.com</a>
									</dd>
								</div>

								<div class="dl-v2__item border-left">
									<dt class="dl-v2__title">Telefon</dt>
									<dd class="dl-v2__description">
										<p><a href="tel:+44 7656 6455" class="link">+44 7656 6455</a></p>
										<p>Pon - Pet, 9AM - 9PM</p>
									</dd>
								</div>
							</div>
						</dl>
					</div>

					<div class="col-6@md">
						<p class="text-md margin-bottom-sm">Ili nam posaljite poruku ovde</p>
						<form method="POST" :action="formActionUrl">
							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="name">Name</label>
								<input class="form-control width-100%" type="text" name="name" id="name" required />
							</div>

							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="email">Email</label>
								<input class="form-control width-100%" type="email" name="email" id="email" />
							</div>

							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="message">Message</label>
								<textarea class="form-control width-100%" rows="9" name="message" id="message" required></textarea>
							</div>

							<div class="text-right">
								<button type="submit" class="btn btn--primary">Posalji</button>
							</div>
						</form>
					</div>
				</div>
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

	data() {
		return {
			formActionUrl: "https://submit-form.com/gYGTzTM6"
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
	}
};
</script>
