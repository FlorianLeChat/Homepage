<script lang="ts">
	import OutputRow from "./OutputRow.svelte";
	import { afterUpdate } from "svelte";
	import type { HistoryEntry } from "../interfaces/HistoryEntry";

	export let history: HistoryEntry[] = [];

	afterUpdate(() => {
		const terminal = document.getElementById("term");

		if (terminal) {
			terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight;
		}
	});
</script>

<section>
	<ul>
		{#each history as entry (entry.id)}
			<OutputRow entryText={entry.text} entryType={entry.type} />
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		height: 100%;
		width: 100%;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	section > ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}
</style>
