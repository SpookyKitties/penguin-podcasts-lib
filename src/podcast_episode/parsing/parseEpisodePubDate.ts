import { parseEpisodeElement } from './parseEpisodeElement';
export function parseEpisodePubDate(itemElement: Element): Date | undefined {
    const elem = parseEpisodeElement(itemElement, 'pubDate');


    return elem ? new Date(`${elem}`) : undefined;
}
