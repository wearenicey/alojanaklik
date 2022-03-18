<template>
	<Layout>
		<div class="padding-y-sm"></div>

		<section class="">
			<div class="container max-width-xs margin-y-xl">
				<form class="sign-up-form" method="POST" data-netlify="true">
					<div class="text-component text-center margin-bottom-sm">
						<h1>Get started</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
							Already have an account? <a href="#0">Login</a>
						</p>
					</div>

					<div class="grid gap-xs">
						<div class="col-6@xs">
							<button class="btn btn--subtle width-100%">
								<svg aria-hidden="true" class="icon margin-right-xxxs" viewBox="0 0 16 16">
									<g>
										<path
											d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"
										></path>
									</g>
								</svg>
								<span>Join using Twitter</span>
							</button>
						</div>

						<div class="col-6@xs">
							<button class="btn btn--subtle width-100%">
								<svg aria-hidden="true" class="icon margin-right-xxxs" viewBox="0 0 16 16">
									<g><path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z"></path></g>
								</svg>
								<span>Join using Facebook</span>
							</button>
						</div>
					</div>

					<p class="text-center margin-y-sm">or</p>

					<div class="margin-bottom-sm">
						<div class="grid gap-xs">
							<div class="col-12">
								<!-- <label class="form-label margin-bottom-xxxs" for="input-first-name">Kako vam mozemo pomoci?</label> -->

								<div class="select">
									<select class="select__input btn btn--subtle"  name="role[]" id="select-this" required>
										<option value="">Kako vam mozemo pomoci?</option>
										<option value="Želimo da saznamo više o Aloja proizvodima">Želimo da saznamo više o Aloja proizvodima</option>
										<option value="Podrška mom zdravlju">Podrška mom zdravlju</option>
										<option value="Pogodnosti kupovine Aloe Vera proizvoda">Pogodnosti kupovine Aloe Vera proizvoda</option>
										<option value="Buduča poslovna saradnja">Buduča poslovna saradnja</option>
									</select>

									<svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
								</div>
							</div>
							<div>
								<label class="form-label margin-bottom-xxs" for="textarea">Šta bi ste hteli da nas pitate ili nam kažete?</label>
								<textarea class="form-control width-100%" name="textarea" id="textarea" required></textarea>
								<!-- <p class="text-xs color-contrast-medium margin-top-xxs">Use helper text to provide additional information.</p> -->
							</div>
							<div class="col-6@md">
								<label class="form-label margin-bottom-xxxs" for="input-first-name" >Kako se zovete? </label>
								<input class="form-control width-100%" type="text" name="input-first-name" id="input-first-name" required />
							</div>

							<div class="col-6@md">
								<label class="form-label margin-bottom-xxxs" for="input-last-name">Broj telefona na koji Vas možemo dobiti? </label>
								<input class="form-control width-100%" type="tel" id="phone" name="phone" placeholder="064444000"  required />
							</div>
						</div>
					</div>

					<div class="margin-bottom-sm">
						<label class="form-label margin-bottom-xxxs" for="input-email">Vaša email adresa kako bi Vam poslali naš odgovor?</label>
						<input class="form-control width-100%" type="email" name="input-email" id="input-email" placeholder="email@myemail.com" required />
					</div>

				

			

					<div class="margin-bottom-sm">
						<button class="btn btn--primary btn--md width-100%" type="submit">Posalji</button>
					</div>

				</form>

			</div>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Kontakt",
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