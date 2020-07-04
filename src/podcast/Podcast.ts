import { PodcastImage } from './PodcastImage';
import { Category } from '../Category';
import { PodcastEpisode } from '../podcast_episode/PodcastEpisode';
import { PodcastOwner } from './parsing/parsePodcastOwner';

export class Podcast {


  public title: string;
  public link: string;
  public language: string;
  public copyright: string;
  public author: string;
  public description: string;
  public summary: string;
  public owner?: PodcastOwner;
  public podcastType: string;
  public keywords: string[];
  public image: PodcastImage;
  public itunesImage: string;
  public categories: Category[];
  public episodes: PodcastEpisode[];
}
