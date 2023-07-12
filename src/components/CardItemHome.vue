<template>
	<article class="story story--featured" id="story">
		<g-link :to="record.path" class="story__img">
			<figure class="media-wrapper media-wrapper--16:9">
				<g-image :src="require(`!!assets-loader!@img/${record.image}`)" :alt="record.title" />
			</figure>
		</g-link>

		<div class="story__content">
			<div class="margin-bottom-xs">
				<g-link :to="record.tags.path" class="story__category" :class="colorClass">
					<i>{{ record.tags.title }}</i>
				</g-link>
			</div>

			<div class="text-component">
				<h2 class="story__title">
					<g-link :to="record.path">{{ record.title }}</g-link>
				</h2>
			</div>

			<div class=" margin-top-sm flex">
				<div class="line-height-xs">
					<p class="story__meta">
						<time :datetime="record.datetime">{{ record.humanTime }}</time>
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
	},
	data() {
		return {
			colorClass: ''
		};
	},
	mounted() {
		const tagColorMap = {
			// Define tag-to-color mappings here
			'Zdravlje': 'tag1',
			'Ishrana po bolestima': 'tag2',
			'O aloji': 'tag3',
			'Dodaci ishrani': 'tag4',
			'Zdravlje muškarca': 'tag5',
			'Dijabetes': 'tag6',
			'Lična higijena': 'tag7',
			'Ishrana po bolestima': 'tag8',
			'Dijeta': 'tag9',
		};

		const tag = this.record.tags.title;
		if (tagColorMap[tag]) {
			this.colorClass = tagColorMap[tag];
		}
	}
};
</script>
