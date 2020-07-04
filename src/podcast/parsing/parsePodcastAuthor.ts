import { rssChannel } from "../../consts";
import { parsePodcastDoc } from "./parsePodcastDoc";

export function parsePodcastAuthor(document: Document) {
  const selector = [`${rssChannel} > itunes\\:author`];
  return parsePodcastDoc(document, selector.join(' '),);
}
