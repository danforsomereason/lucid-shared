import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "index.ts",
        "schema/index": "schema.ts",
    },
    format: ["cjs", "esm"], // Build for commonJS and ESmodules
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true,
    skipNodeModulesBundle: true,
});
