<script context="module" lang="ts">
	import CategoriesSection from '../lib/components/CategoriesSection.svelte';
	import SearchSection from '../lib/components/SearchSection.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<SearchSection />
<CategoriesSection />
