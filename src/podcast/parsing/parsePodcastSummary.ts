import { rssChannel } from "../../consts";
import { parsePodcastDoc } from "./parsePodcastDoc";

export function parsePodcastSummary(document: Document) {
  const selector = [`${rssChannel} > itunes\\:summary`];
  return parsePodcastDoc(document, selector.join(' '), '');
}
