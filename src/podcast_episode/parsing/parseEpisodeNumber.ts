import { parseEpisodeElement } from './parseEpisodeElement';

export function parseEpisodeNumber(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'itunes\\:episode');
}
