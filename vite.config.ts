import basicSsl from "@vitejs/plugin-basic-ssl";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), basicSsl()],
});
