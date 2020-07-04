import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodeDescription(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'description');
}
