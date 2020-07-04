import { parseEpisodeElement } from './parseEpisodeElement';

export function parseEpisodeSummary(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'itunes\\:summary');
}
