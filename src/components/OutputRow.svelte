<script lang="ts">
	// Déclaration des propriétés.
	interface EntryProps
	{
		entryText: string;
		entryType: string;
	}

	// Initialisation des variables.
	const { entryText, entryType }: EntryProps = $props();
</script>

<li>
	<!-- Préfixe de commande -->
	{#if entryType === "input"}
		<span class="prompt-icon">root@ns3086602:/$</span>
	{/if}

	<!-- Sortie de commande -->
	<span class="entry-text">{@html entryText}</span>
</li>

<style>
	li
	{
		/* Conteneur d'une ligne de sortie */
		gap: 0.5rem;
		width: 100%;
		margin: 0;
		display: flex;
		padding: 0;
		align-items: center;
	}

	li .prompt-icon
	{
		/* Préfixe de commande */
		color: #00ff00;
	}

	li .entry-text
	{
		/* Sortie de commande */
		display: inline-block;
		word-break: break-word;
	}
</style>