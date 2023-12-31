import { env } from "node:process";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export function getPackageManager(): PackageManager {
	const userAgent = env.npm_config_user_agent;

	if (userAgent) {
		if (userAgent.startsWith("yarn")) {
			return "yarn";
		} else if (userAgent.startsWith("pnpm")) {
			return "pnpm";
		} else if (userAgent.startsWith("bun")) {
			return "bun";
		} else {
			return "npm";
		}
	} else {
		return "npm";
	}
}
