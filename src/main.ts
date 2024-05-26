import "./app.scss";
import App from "./App.svelte";

const app = new App( {
	target: document.querySelector( "body" ) as Element
} );

export default app;