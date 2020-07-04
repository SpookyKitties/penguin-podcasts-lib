import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodeSubtitle(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'itunes\\:subtitle');

}
