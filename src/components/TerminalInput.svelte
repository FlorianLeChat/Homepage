<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	let userInput = "";

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			dispatch("enter", { input: userInput });
			userInput = "";
		} else if (event.key === "ArrowUp") {
			dispatch("historyBackwards");
		} else if (event.key === "ArrowDown") {
			dispatch("historyForwards");
		}
	};
</script>

<section>
	<span>root@ns3086602:/&nbsp;$</span>

	<input autocomplete="off" on:keyup={handleKeyUp} bind:value={userInput} />
</section>

<style>
	section {
		display: flex;
		align-items: center;
		padding: 0;
		gap: 0.5rem;
		margin: 0;
		border: none;
		outline: none;
		background: none;
	}

	section > span {
		color: #00ff00;
	}

	section > input {
		padding: 0;
		margin: 0;
		width: 100%;
		border: none;
		outline: none;
		background: none;
	}
</style>
