import { parseEpisodeElement } from './parseEpisodeElement';


export function parseEpisodeAuthor(itemElement: Element): string | undefined {
  return parseEpisodeElement(itemElement, 'itunes\\:author');

}
