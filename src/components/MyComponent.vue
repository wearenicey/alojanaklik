<template>
	<section class="position-relative z-index-1 padding-y-xl bg-secondary">
		<div class="container max-width-adaptive-lg padding-y-lg padding-x-md radius-lg margin-y-xxl bg-white">
			<div class="grid gap-lg">
				<div class="col-5@md">
					<img />
				</div>

				<div class="col-7@md">
					<div class="flex flex-wrap gap-sm items-center">
						<div class="color-primary text-bold text-md">
							<p>Dodaci ishrani</p>
						</div>
						<div class="">
							<h2>Ph ravnoteža putem superhrane - Forever Supergreens</h2>
						</div>

						<div class="">
							<p class="text-lg color-accent font-primary text-normal">1545.00 RSD</p>
						</div>
						<div>
							<p class="color-black">Korišćenjem proizvoda Forever Supergreens živećete opuštenije i zdravije. Na siguran način pomažete sebi i svom organizmu</p>
						</div>
					</div>

					<div class="flex gap-md@sm gap-md flex-column flex-row@sm padding-top-lg justify-between@sm items-center">
						<a :href="$page.event.cta" class="kupiteCTA btn btn--primary flex-grow center-between@lg justify-center btn--md">
							Kupite danas
						</a>
						<g-image class="" src="~/assets/img/logo-futer.png"></g-image>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "MyComponent"
};
</script>
