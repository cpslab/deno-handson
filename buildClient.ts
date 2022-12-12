import * as esbuild from "https://deno.land/x/esbuild@v0.15.14/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.167.0/path/posix.ts";

const handleOutputFiles = async (
  outputFiles: ReadonlyArray<esbuild.OutputFile>,
): Promise<void> => {
  for (const esbuildResultFile of outputFiles) {
    if (esbuildResultFile.path === "<stdout>") {
      const contents = new TextDecoder().decode(esbuildResultFile.contents);
      await Deno.writeTextFile(
        new URL(import.meta.resolve("./dist.json")),
        JSON.stringify({ scriptContent: contents }, undefined, 2),
      );
      return;
    }
  }
  throw new Error("esbuild で <stdout> の出力を取得できなかった...");
};

await handleOutputFiles(
  (await esbuild.build({
    entryPoints: [
      fromFileUrl(
        import.meta.resolve("./client.tsx"),
      ),
    ],
    plugins: [denoPlugin()],
    write: false,
    bundle: true,
    minify: true,
    format: "iife",
    target: ["chrome106"],
    watch: {
      onRebuild: (error, result) => {
        if (error) {
          console.error(error);
        }
        if (result !== null) {
          handleOutputFiles(
            result.outputFiles ?? [],
          );
        }
      },
    },
  })).outputFiles,
);
