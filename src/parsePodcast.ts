import { JSDOM } from "jsdom";
import { parsePodcastCategories } from './podcast/parsing/parsePodcastCategories';
import { parsePodcastTitle } from './podcast/parsing/parsePodcastTitle';
import { parsePodcastImage } from './podcast/parsing/parsePodcastImage';
import { parsePodcastKeywords } from './podcast/parsing/parsePodcastKeywords';
import { parsePodcastType } from './podcast/parsing/parsePodcastType';
import { parsePodcastOwner } from './podcast/parsing/parsePodcastOwner';
import { parsePodcastSummary } from './podcast/parsing/parsePodcastSummary';
import { parsePodcastAuthor } from './podcast/parsing/parsePodcastAuthor';
import { parsePodcastDescription } from './podcast/parsing/parsePodcastDescription';
import { parsePodcastLanguage } from './podcast/parsing/parsePodcastLanguage';
import { parsePodcastCopyright } from './podcast/parsing/parsePodcastCopyright';
import { parsePodcastLink } from './podcast/parsing/parsePodcastLink';
import { parsePodcastEpisodes } from "./podcast_episode/parsing/parsePodcastEpisodes";
import { parsePodcastItunesImages } from './podcast/parsing/parsePodcastItunesImages';
import { Podcast } from './podcast/Podcast';

export function parsePodcast(o: Buffer | string): Podcast | undefined {
  try {
    const document = new JSDOM(o, { contentType: 'text/xml' }).window.document;
    const title = parsePodcastTitle(document);

    const link = parsePodcastLink(document);

    const language = parsePodcastLanguage(document);

    const copyright = parsePodcastCopyright(document);

    const author = parsePodcastAuthor(document);

    const description = parsePodcastDescription(document);

    const summary = parsePodcastSummary(document);

    const owner = parsePodcastOwner(document);

    const podcastType = parsePodcastType(document);

    const keywords = parsePodcastKeywords(document);

    const image = parsePodcastImage(document);

    const itunesImage = parsePodcastItunesImages(document);

    const categories = parsePodcastCategories(document);

    const episodes = parsePodcastEpisodes(document);

    const podcast: Podcast = {
      author: author, title: title, link: link, language: language, copyright: copyright, description: description, summary: summary, owner: owner,
      podcastType: podcastType, keywords: keywords, image: image, itunesImage: itunesImage,
      categories: categories, episodes: episodes
    };
    return podcast;

  } catch (error) {
    return undefined;
  }
}
