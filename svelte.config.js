import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "control-shift",
			toggleButtonPos: "bottom-left",
			showToggleButton: "always",
		},
	},
};
