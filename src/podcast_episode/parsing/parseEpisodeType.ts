import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodeType(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'itunes\\:episodeType');
}
