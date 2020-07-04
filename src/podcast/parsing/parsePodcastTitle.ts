import { rssChannel } from "../../consts";
import { parsePodcastDoc } from "./parsePodcastDoc";


export function parsePodcastTitle(document: Document) {
  try {

    const selector = [`${rssChannel} > title`];
    return parsePodcastDoc(document, selector.join(' '), 'No Podcast Title found');
  }
  catch (error) {
    return '';
  }
}
