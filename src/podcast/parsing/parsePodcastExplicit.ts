import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";
export function parsePodcastExplicit(document: Document) {
  const selector = [`${rssChannel} > itunes\\:explicit`];
  return parsePodcastDoc(document, selector.join(' '), '');
}
