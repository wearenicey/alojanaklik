<template>
	<article class="story story--featured" id="story">
		<a :href="record.path" class="story__img">
			<figure class="media-wrapper media-wrapper--4:3">
				<g-image :src="require(`!!assets-loader!@img/${record.image}`)" :alt="record.title" />
			</figure>
		</a>

		<div class="story__content">
			<div class="margin-bottom-xs">
				<a :href="record.tags.path" class="story__category">
					<svg class="icon margin-right-xxxs" aria-hidden="true" viewBox="0 0 16 16">
						<g stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="8" cy="7" r="1.5"></circle>
							<path d="M12.121,14.263a7.5,7.5,0,1,0-8.242,0"></path>
							<path d="M12.377,11.32a5.5,5.5,0,1,0-8.754,0"></path>
							<path d="M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z"></path>
						</g>
					</svg>
					<i>{{ record.tags.title }}</i>
				</a>
			</div>

			<div class="text-component">
				<h2 class="story__title">
					<a :href="record.path">{{ record.title }}</a>
				</h2>
				<p>
					{{ record.excerpt }}
				</p>
			</div>

			<div class=" margin-top-sm flex">
				<div class="line-height-xs">
					<p class="story__meta">
						<time :datetime="record.datetime">{{ record.humanTime }}</time
						>, &mdash; {{ record.timeToRead }} min
					</p>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		record: {}
	}
};
</script>
