<script lang="ts">
	// Importation des dépendances et composants.
	import OutputRow from "./OutputRow.svelte";
	import type { HistoryEntry } from "../interfaces/HistoryEntry";

	// Initialisation des variables.
	const { history = [] }: { history?: HistoryEntry[] } = $props();
</script>

<!-- Liste des sorties -->
<section>
	<ul>
		{#each history as entry ( entry.id )}
			<OutputRow entryText={entry.text} entryType={entry.type} />
		{/each}
	</ul>
</section>

<style>
	section {
		/* Conteneur des sorties */
		padding: 0.5rem 0.5rem 0 0.5rem;
	}

	section > ul {
		/* Liste des sorties */
		margin: 0;
		padding: 0;
	}
</style>