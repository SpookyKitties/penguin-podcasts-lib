import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodeGUID(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'guid');
}
