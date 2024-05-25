<script lang="ts">
	export let entryText: string;
	export let entryType: string;
</script>

<li class:input-row={entryType === "input"}>
	{#if entryType === "input"}
		<span class="prompt-icon">root@ns3086602:/&nbsp;$</span>
	{/if}

	<span class="entry-text">{@html entryText}</span>
</li>

<style>
	li {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 0.5rem;
		width: 100%;
		align-items: center;
	}

	li .prompt-icon {
		color: #00ff00;
	}

	li .entry-text {
		word-break: break-word;
		display: inline-block;
	}
</style>
