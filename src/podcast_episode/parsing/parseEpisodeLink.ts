import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodeLink(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'link');
}
