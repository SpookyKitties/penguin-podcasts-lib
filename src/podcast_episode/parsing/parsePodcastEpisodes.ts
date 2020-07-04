import { rssChannel } from '../../consts';
import { PodcastEpisode } from '../PodcastEpisode';
import { parseEpisodeKeywords } from './parseEpisodeKeywords';
import { parseEpisodeEnclosure } from './parseEpisodeEnclosure';
import { parseEpisodePubDate } from './parseEpisodePubDate';
import { parseEpisodeItunesTitle } from "./parseEpisodeItunesTitle";
import { parseEpisodeAuthor } from "./parseEpisodeAuthor";
import { parseEpisodeTitle } from "./parseEpisodeTitle";
import { parseEpisodeSubtitle } from "./parseEpisodeSubtitle";
import { parseEpisodeSummary } from "./parseEpisodeSummary";
import { parseEpisodeNumber } from "./parseEpisodeNumber";
import { parseEpisodeType } from "./parseEpisodeType";
import { parseEpisodeDescription } from "./parseEpisodeDescription";
import { parseEpisodeGUID } from "./parseEpisodeGUID";
import { parseEpisodeLink } from "./parseEpisodeLink";
export function parsePodcastEpisodes(document: Document) {
    const episodes = Array.from(document.querySelectorAll(`${rssChannel} > item`)).map((itemElement): PodcastEpisode | undefined => {

        const title = parseEpisodeTitle(itemElement);
        const author = parseEpisodeAuthor(itemElement);
        const itunesTitle = parseEpisodeItunesTitle(itemElement);
        const subtitle = parseEpisodeSubtitle(itemElement);
        const summary = parseEpisodeSummary(itemElement);
        const episode = parseEpisodeNumber(itemElement);
        const episodeType = parseEpisodeType(itemElement);
        const enclosure = parseEpisodeEnclosure(itemElement);
        const guid = parseEpisodeGUID(itemElement);
        const link = parseEpisodeLink(itemElement);
        const pubDate = parseEpisodePubDate(itemElement);
        const description = parseEpisodeDescription(itemElement);
        const keywords = parseEpisodeKeywords(itemElement);


        if ((title || itunesTitle) && enclosure) {
            return {
                title: title, author: author, itunesTitle: itunesTitle, subtitle: subtitle, summary: summary, episode: episode,
                episodeType: episodeType, enclosure: enclosure, guid: guid, link: link,
                pubDate: pubDate, keywords: keywords, description: description
            };
        }
        return undefined;
    }).filter(val => val !== undefined) as PodcastEpisode[];

    return episodes;
}
