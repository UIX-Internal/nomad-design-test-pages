import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	base: "/nomad-design-test-pages/",
	plugins: [
		react(),
		tsconfigPaths(),
		legacy({
			targets: ["defaults", "not IE 11"]
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/Assets/Styles/Mixin.scss"; 
			@import "@/Assets/Styles/Variables.scss";`
			}
		}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}
});
