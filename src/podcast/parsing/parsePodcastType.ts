import { rssChannel } from "../../consts";
import { parsePodcastDoc } from "./parsePodcastDoc";

export function parsePodcastType(document: Document) {
  const selector = [`${rssChannel} > itunes\\:type`];
  return parsePodcastDoc(document, selector.join(' '));
}
