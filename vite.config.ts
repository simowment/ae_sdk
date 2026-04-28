import { defineConfig } from "vitest/config";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

function loadEnvFile(file: string): Record<string, string> {
  if (!existsSync(file)) return {};
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split("\n")
      .filter((l) => l.trim() && !l.startsWith("#") && l.includes("="))
      .map((l) => {
        const idx = l.indexOf("=");
        return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
      }),
  );
}

const localEnv = loadEnvFile(join(__dirname, ".env.local"));

export default defineConfig({
  test: {
    env: { ...localEnv, ...process.env } as Record<string, string>,
  },
});
