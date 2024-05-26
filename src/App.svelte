<script lang="ts">
	// Importation des dépendances et composants.
	import { onMount, afterUpdate } from "svelte";
	import CommandParser from "./utilities/CommandParser";
	import TerminalInput from "./components/TerminalInput.svelte";
	import TerminalScreen from "./components/TerminalScreen.svelte";
	import type { HistoryEntry } from "./interfaces/HistoryEntry";

	// Initialisation des variables.
	const parser = new CommandParser();

	let history: HistoryEntry[] = [];
	let userInput = "";
	let historyIndex = 0;
	let terminalInput: HTMLElement;

	// Montage du composant.
	onMount(() => {
		// Affichage du message d'accueil.
		if (!history.length) {
			doOutput(parser.parse("motd"));
		}

		// Initialisation de l'index de l'historique.
		historyIndex = history.length;
	});

	// Mise à jour du composant.
	afterUpdate(() => {
		// Défilement automatique de la console.
		terminalInput.scrollIntoView({ block: "end" });
	});

	// Ajout d'une entrée à l'historique.
	const addToHistory = (type: string, text: string) => {
		history = [...history, { id: history.length, text, type }];
	};

	// Affichage d'une sortie.
	const doOutput = async (output: string | string[]) => {
		if (Array.isArray(output)) {
			// Il s'agit d'un tableau de lignes.
			for (const line of output) {
				addToHistory("output", line);

				await new Promise((resolve) => setTimeout(resolve, 15));
			}
		} else {
			// Il s'agit d'une seule ligne.
			addToHistory("output", output);
		}
	};

	// Gestion de l'événement d'entrée.
	const handleEnter = (event: CustomEvent) => {
		// Récupération de l'entrée utilisateur.
		const { input } = event.detail;

		addToHistory("input", input);

		// Analyse de la commande.
		let [command, ...args] = input.trim().split(" ");
		const output = parser.parse(command, args);

		command = command.toLowerCase();

		// Exécution de la commande.
		switch (command) {
			case "clear": {
				history = [];
				break;
			}

			default: {
				if (command.length && output) {
					doOutput(output);
				}

				break;
			}
		}

		// Mis à jour de l'index de l'historique.
		historyIndex = history.length;
	};

	// Navigation arrière dans l'historique.
	const historyBackwards = () => {
		for (let index = historyIndex - 1; index >= 0; index--) {
			if (history[index].type == "input") {
				userInput = history[index].text;
				historyIndex = index;
				break;
			}
		}
	};

	// Navigation avant dans l'historique.
	const historyForwards = () => {
		for (
			let index = historyIndex + 1;
			index < history.length - 1;
			index++
		) {
			if (history[index].type == "input") {
				userInput = history[index].text;
				historyIndex = index;
				break;
			}
		}
	};
</script>

<!-- Conteneur général -->
<main>
	<!-- Affichage de la console -->
	<TerminalScreen {history} />

	<!-- Saisie utilisateur -->
	<TerminalInput
		{userInput}
		bind:terminalInput
		on:enter={handleEnter}
		on:historyForwards={historyForwards}
		on:historyBackwards={historyBackwards}
	/>
</main>

<style>
	main {
		/* Conteneur général */
		height: 100%;
		overflow-y: auto;
		scrollbar-width: none;
	}
</style>
