import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";
export function parsePodcastCopyright(document: Document) {
  const selector = [`${rssChannel} > copyright`];
  return parsePodcastDoc(document, selector.join(' '), '');
}
