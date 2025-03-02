<script lang="ts">
	// Déclaration des propriétés.
	interface InputProps
	{
		enter: ( input: string ) => void;
		userInput?: string;
		terminalInput?: HTMLElement;
		historyForwards: () => void;
		historyBackwards: () => void;
	}

	// Initialisation des variables.
	let {
		enter,
		userInput = $bindable( "" ),
		terminalInput = $bindable(),
		historyForwards,
		historyBackwards
	}: InputProps = $props();

	// Gestion de l'événement de relâchement d'une touche.
	const handleKeyUp = ( event: KeyboardEvent ) =>
	{
		if ( event.key === "Enter" )
		{
			// Envoi de l'événement d'entrée.
			enter( userInput );
			userInput = "";
		}
		else if ( event.key === "ArrowUp" )
		{
			// Envoi de l'événement de remontée dans l'historique.
			historyBackwards();
		}
		else if ( event.key === "ArrowDown" )
		{
			// Envoi de l'événement de descente dans l'historique.
			historyForwards();
		}
	};
</script>

<section bind:this={terminalInput}>
	<!-- Préfixe de commande -->
	<span>root@ns3086602:/$</span>

	<!-- Champ de saisie -->
	<!-- svelte-ignore a11y_autofocus -->
	<input
		type="text"
		onkeyup={handleKeyUp}
		autofocus
		spellcheck="false"
		autocomplete="off"
		autocapitalize="off"
		bind:value={userInput}
	/>
</section>

<style>
	section {
		/* Conteneur de l'entrée utilisateur */
		gap: 0.5rem;
		display: flex;
		padding: 0 0.5rem 0.5rem 0.5rem;
	}

	section > span {
		/* Préfixe de commande */
		color: #00ff00;
		white-space: nowrap;
	}

	section > input {
		/* Champ de saisie */
		color: inherit;
		width: 100%;
		border: none;
		padding: 0;
		outline: none;
		font-size: inherit;
		background: none;
		font-family: inherit;
	}
</style>