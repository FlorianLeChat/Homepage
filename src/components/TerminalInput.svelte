<script lang="ts">
	// Importation des dépendances et composants.
	import { createEventDispatcher } from "svelte";

	// Initialisation des variables.
	export let userInput = "";
	export let terminalInput: HTMLElement;

	// Gestion de l'événement de relâchement d'une touche.
	const dispatch = createEventDispatcher();
	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			// Envoi de l'événement d'entrée.
			dispatch("enter", { input: userInput });
			userInput = "";
		} else if (event.key === "ArrowUp") {
			// Envoi de l'événement de remontée dans l'historique.
			dispatch("historyBackwards");
		} else if (event.key === "ArrowDown") {
			// Envoi de l'événement de descente dans l'historique.
			dispatch("historyForwards");
		}
	};
</script>

<section bind:this={terminalInput}>
	<!-- Préfixe de commande -->
	<span>root@ns3086602:/$</span>

	<!-- Champ de saisie -->
	<input
		type="text"
		spellcheck="false"
		autocomplete="off"
		autocapitalize="off"
		on:keyup={handleKeyUp}
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
	}

	section > input {
		/* Champ de saisie */
		width: 100%;
		border: none;
		padding: 0;
		outline: none;
		background: none;
	}
</style>
