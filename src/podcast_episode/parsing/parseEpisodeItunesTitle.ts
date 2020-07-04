import { parseEpisodeElement } from './parseEpisodeElement';


export function parseEpisodeItunesTitle(itemElement: Element): string | undefined {
    return parseEpisodeElement(itemElement, 'itunes\\:title');

}
