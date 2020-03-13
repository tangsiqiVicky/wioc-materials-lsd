<template>
	<svg class="icon-svg" :width="width" :height="height" aria-hidden="true">
		<use :xlink:href="getName"></use>
	</svg>
</template>
<script>
	export default {
		name: 'wioc-icon-svg',
		props: {
			name: {
				type: String,
				required: true
			},
			className: {
				type: String
			},
			width: {
				type: String
			},
			height: {
				type: String
			}
		},
		created(){
			
			
		},
		computed: {
			getName() {
				return `#${this.name}`
			},
			getClassName() {
				return [
					'icon-svg',
					`icon-svg__${this.name}`,
					this.className && /\S/.test(this.className) ? `${this.className}` : ''
				]
			}
		}
	}
</script>

<style>
	.icon-svg {
		width: 0.25rem;
		height: 0.25rem;
		vertical-align: middle;
		fill: currentColor;
		overflow: hidden;
	}
</style>
