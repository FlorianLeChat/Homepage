<script lang="ts">
	// Importation des dépendances et composants.
	import { onMount, afterUpdate } from "svelte";
	import type { HistoryEntry } from "./interfaces/HistoryEntry";
	import TerminalScreen from "./components/TerminalScreen.svelte";
	import TerminalInput from "./components/TerminalInput.svelte";

	// Importation des commandes personnalisées.
	import home from "./commands/home";
	import menu from "./commands/menu";
	import error from "./commands/error";
	import github from "./commands/github";
	import twitter from "./commands/twitter";
	import linkedin from "./commands/linkedin";
	import projects from "./commands/projects";

	// Initialisation des variables.
	let history: HistoryEntry[] = [];
	let userInput = "";
	let historyIndex = 0;
	let terminalInput: HTMLElement;

	// Ajout d'une entrée à l'historique.
	const addToHistory = ( type: string, text: string ) =>
	{
		history = [ ...history, { id: history.length, text, type } ];
	};

	// Affichage d'une sortie.
	const addQueuedOutput = async ( output: string | string[] ) =>
	{
		if ( Array.isArray( output ) )
		{
			// Il s'agit d'un tableau de lignes.
			await Promise.all(
				output.map( ( line, index ) => new Promise( ( resolve ) =>
				{
					setTimeout( () =>
					{
						addToHistory( "output", line );
						resolve( undefined );
					}, 15 * index );
				} ) )
			);
		}
		else
		{
			// Il s'agit d'une seule ligne.
			addToHistory( "output", output );
		}
	};

	// Interprétation des commandes.
	const parseCommand = ( command: string, internal?: boolean ) =>
	{
		// Initialisation de la sortie.
		let output;

		switch ( command )
		{
			case "home":
				output = internal ? JSON.parse( JSON.stringify( home ) ) : undefined;
				break;

			case "ls" || "dir" || "menu":
				output = JSON.parse( JSON.stringify( menu ) );
				break;

			case "error":
				output = internal ? JSON.parse( JSON.stringify( error ) ) : undefined;
				break;

			case "projects":
				output = JSON.parse( JSON.stringify( projects ) );
				break;

			case "github":
				output = JSON.parse( JSON.stringify( github ) );
				break;

			case "linkedin":
				output = JSON.parse( JSON.stringify( linkedin ) );
				break;

			case "twitter":
				output = JSON.parse( JSON.stringify( twitter ) );
				break;

			default:
				break;
		}

		if ( !output )
		{
			// Message d'erreur si la commande n'est pas reconnue.
			output = [ `${ command }: command not found` ];
		}

		// Transformation de la sortie en tableau si ce n'est pas déjà le cas.
		if ( !Array.isArray( output ) )
		{
			output = [ output ];
		}

		// Interprétation de la sortie.
		return output.map( ( line ) => line
			.replace( /\t/g, "    " )
			.replace( / /g, "&nbsp;" )
			.replace( /\n/g, "<br>" )
			.replace( /\r\n/g, "<br>" )
			.replace(
				/<color="(.*?)">(.*?)<\/color>/g,
				"<span class='color-$1'>$2</span>"
			)
			.replace(
				/<link="(.*?)">(.*?)<\/link>/g,
				"<a href='$1' target='_blank'>$2</a>"
			) );
	};

	// Gestion de l'événement d'entrée.
	const handleEnter = ( event: CustomEvent ) =>
	{
		// Récupération de l'entrée utilisateur.
		const { input } = event.detail as { input?: string };

		if ( !input )
		{
			return;
		}

		addToHistory( "input", input );

		// Analyse de la commande.
		const command = input.toLocaleLowerCase().trim();
		const output = parseCommand( command );

		// Exécution de la commande.
		switch ( command )
		{
			case "clear": {
				history = [];
				break;
			}

			default: {
				if ( command.length && output )
				{
					addQueuedOutput( output );
				}

				break;
			}
		}

		// Mis à jour de l'index de l'historique.
		historyIndex = history.length;
	};

	// Navigation arrière dans l'historique.
	const historyBackwards = () =>
	{
		for ( let index = historyIndex - 1; index >= 0; index-- )
		{
			if ( history[ index ].type === "input" )
			{
				userInput = history[ index ].text;
				historyIndex = index;
				break;
			}
		}
	};

	// Navigation avant dans l'historique.
	const historyForwards = () =>
	{
		for (
			let index = historyIndex + 1;
			index < history.length - 1;
			index++
		)
		{
			if ( history[ index ].type === "input" )
			{
				userInput = history[ index ].text;
				historyIndex = index;
				break;
			}
		}
	};

	// Montage du composant.
	onMount( () =>
	{
		// Message d'erreur sur les terminaux mobiles.
		const media = window.matchMedia( "(max-width: 1024px)" );

		if ( media.matches )
		{
			addQueuedOutput( parseCommand( "error", true ) );
			terminalInput.style.display = "none";
			return;
		}

		// Affichage du message d'accueil.
		if ( !history.length )
		{
			addQueuedOutput( parseCommand( "home", true ) );
		}

		// Initialisation de l'index de l'historique.
		historyIndex = history.length;
	} );

	// Mise à jour du composant.
	afterUpdate( () =>
	{
		// Défilement automatique de la console.
		terminalInput.scrollIntoView( { block: "end" } );
	} );
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