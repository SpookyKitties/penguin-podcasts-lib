import { PodcaseEpisodeEnclosure } from "./PodcaseEpisodeEnclosure";
export class PodcastEpisode {


  public title: string | undefined;
  public author: string | undefined;
  public itunesTitle: string | undefined;
  public subtitle: string | undefined;
  public summary: string | undefined;
  public episode: string | undefined;
  public episodeType: string | undefined;
  public description: string | undefined;
  public enclosure: PodcaseEpisodeEnclosure;
  public guid: string | undefined;
  public link: string | undefined;
  public pubDate: Date | undefined;
  public keywords: string[] | undefined;
}
