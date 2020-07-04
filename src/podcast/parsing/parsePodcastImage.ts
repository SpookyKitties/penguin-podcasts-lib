import { parsePodcastDoc } from "./parsePodcastDoc";
import { rssChannel } from "../../consts";
import { PodcastImage } from "../PodcastImage";
export function parsePodcastImage(document: Document) {
  const url = parsePodcastDoc(document, [`${rssChannel} > image > url`].join(' '));
  const title = parsePodcastDoc(document, [`${rssChannel} > image > title`].join(' '));
  const link = parsePodcastDoc(document, [`${rssChannel} > image > link`].join(' '));

  return new PodcastImage(url, title, link);
}
