import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";
export function parsePodcastDescription(document: Document) {
  const selector = [`${rssChannel} > description`];
  return parsePodcastDoc(document, selector.join(' '), '');
}
