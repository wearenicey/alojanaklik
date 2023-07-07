<template>
	<Layout>
		<div class="padding-y-sm"></div>

		<section class="contact-v3 position-relative z-index-1">
			<div class="container max-width-xs margin-bottom-lg">
				<div class="text-component text-center">
					<h1>Kontaktirajte nas</h1>
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
											<p class="color-contrast-medium">Master farmacije</p>
										</div>
									</div>

									<div class="user-cell__cta">
										<a href="tel:tel:+381642839963" class="btn btn--subtle">Pozovi - 064 2839 963</a>
										<p class="margin-top-sm">Pon - Pet 9AM - 9PM</p>
									</div>
								</div>
							</div>
						</dl>
					</div>

					<div class="col-6@md">
						<p class="text-md margin-bottom-sm">Ili nam posaljite poruku ovde</p>

						<form @submit.prevent="submit" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/poruka">
							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="name">Name</label>
								<input class="form-control width-100%" type="text" name="name" id="name" required v-model="formData.name" />
							</div>

							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="email">Email</label>
								<input class="form-control width-100%" type="email" name="email" id="email" v-model="formData.email" />
							</div>

							<div class="margin-bottom-sm">
								<label class="form-label margin-bottom-xxs" for="message">Message</label>
								<textarea class="form-control width-100%" rows="9" name="message" id="message" required v-model="formData.message"></textarea>
							</div>

							<div class="text-right">
								<button :disabled="formData.submitStatus === 'PENDING'" type="submit" class="btn btn--primary">Posalji</button>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-green-900 bg-green-100" v-if="formData.submitStatus === 'OK'">
									<p class="typo__p">Poruka je poslata!</p>
								</div>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-red-900 bg-red-100" v-if="formData.submitStatus === 'ERROR'">
									<p class="typo__p">Popunite ispravno formu.</p>
								</div>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-blue-900 bg-blue-100" v-if="formData.submitStatus === 'PENDING'">
									<p class="typo__p">Poruka se šalje...</p>
								</div>
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

	// data() {
	// 	return {
	// 		formActionUrl: "https://submit-form.com/gYGTzTM6"
	// 	};
	// },

	data() {
		return {
			formData: {
				name: "",
				email: "",
				message: "",
				submitStatus: null
			}
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

	encode(data) {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	},
	submit(e) {
		console.log("submit!");
		this.$v.$touch();
		if (this.$v.formData.$invalid) {
			this.formData.submitStatus = "ERROR";
		} else {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(
					() => (this.formData.submitStatus = "PENDING"),

					setTimeout(() => {
						this.formData.submitStatus = "OK";
					}, 500)
				)
				.then(() => window.location.reload(3))
				.catch(error => alert(error));
		}
	}
};
</script>
