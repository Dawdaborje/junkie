<script>
	import ProjectTable from '$lib/components/pages/projects/projectTable.svelte';

	let projects = $state();
</script>

<div>
	<ProjectTable {projects} />
</div>
