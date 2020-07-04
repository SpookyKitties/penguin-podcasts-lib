import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";

export function parsePodcastLanguage(document: Document) {
  const selector = [`${rssChannel} > language`];
  return parsePodcastDoc(document, selector.join(' '),);
}
