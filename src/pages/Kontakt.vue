<template>
	<Layout>
		<div class="padding-y-sm"></div>

		<section class="">
			<div class="container max-width-xs margin-y-xxxl">
				<div class="text-component text-center margin-bottom-lg">
					<h1>Kontaktirajte nas</h1>
					<p>Putem emaila na <a href="mailto:aloja@nicey.rs">aloja@nicey.rs</a></p>
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
