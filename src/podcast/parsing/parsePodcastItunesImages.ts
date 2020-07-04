import { rssChannel } from "../../consts";
export function parsePodcastItunesImages(document: Document) {
  try {

    const selector = [`${rssChannel} > itunes\\:image`];
    const element = document.querySelector(selector.join(' '));
    const imageAttr = element?.getAttribute('href');
    return imageAttr && imageAttr.length > 0 ? imageAttr : '';
  }
  catch (error) {
    return '';
  }
}
