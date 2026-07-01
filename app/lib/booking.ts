export const BOOKING_URLS = {
  intro:
    "https://predictivefitness.pipedrive.com/scheduler/drBkYjfDk/coaching-call-for-my-premium-athletes",
  discovery:
    "https://predictivefitness.pipedrive.com/scheduler/BpklX3fa/initial-connect-call",
} as const;

/**
 * Pipedrive scheduler iframe URL.
 *
 * Pipedrive provides an official embed snippet via:
 * Activities → Meeting scheduler → Manage availability → Share → Embed on your website
 *
 * Paste the iframe `src` from that snippet here, or map each scheduler URL below.
 * Example snippet:
 * `<iframe src="https://…" width="100%" height="100%" frameborder="0"></iframe>`
 *
 * Until you add embed URLs from Pipedrive, the public scheduler link is used.
 * If embedding is blocked (X-Frame-Options), visitors can use “Open scheduler in a new tab”.
 */
export function getSchedulerEmbedUrl(schedulerUrl: string) {
  const embedUrls: Partial<Record<string, string>> = {
    // [BOOKING_URLS.intro]: "PASTE_PIPEDRIVE_EMBED_SRC_FOR_INTRO_CALL",
    // [BOOKING_URLS.discovery]: "PASTE_PIPEDRIVE_EMBED_SRC_FOR_DISCOVERY_CALL",
  };

  return embedUrls[schedulerUrl] ?? schedulerUrl;
}
