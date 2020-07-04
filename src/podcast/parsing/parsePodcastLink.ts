import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";

export function parsePodcastLink(document: Document) {
  const selector = [`${rssChannel} > link`];
  return parsePodcastDoc(document, selector.join(' '));
}
