import { BaseCaller } from "@api/callers/base";

export const githubCaller = new BaseCaller({
  baseApiUrl: "https://api.github.com",
  lsCached: true,
  lsCacheTTL: 1000 * 60 * 60 * 24,
})

