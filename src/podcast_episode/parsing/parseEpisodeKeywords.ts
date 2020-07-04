import { parseEpisodeElement } from './parseEpisodeElement';

export function parseEpisodeKeywords(itemElement: Element): string[] | undefined {
    const keywordsString = parseEpisodeElement(itemElement, 'itunes\\:keywords');

    return keywordsString?.split(',').map(keyword => keyword.trim());
}
