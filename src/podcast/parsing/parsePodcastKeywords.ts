import { rssChannel } from "../../consts";
import { parsePodcastDoc } from "./parsePodcastDoc";
export function parsePodcastKeywords(document: Document) {
  const selector = [`${rssChannel} > itunes\\:keywords`];
  const keywords = parsePodcastDoc(document, selector.join(' '));

  return keywords && keywords.length > 0 && keywords.includes(',') ? keywords.split(',').map(keyword => keyword.trim()) : [];
}
