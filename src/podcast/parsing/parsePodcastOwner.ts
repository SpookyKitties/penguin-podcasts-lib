import { rssChannel } from "../../consts";


export class PodcastOwner {
  public name: string;
  public email: string;
}
export function parsePodcastOwner(document: Document): PodcastOwner | undefined {
  const selector = `${rssChannel} > itunes\\:owner`;


  const ownerName = document.querySelector([`${selector} > itunes\\:name`].join(' '));
  const ownerEmail = document.querySelector([`${selector} > itunes\\:email`].join(' '));

  if (ownerName?.textContent && ownerEmail?.textContent) {
    return { email: ownerEmail.textContent, name: ownerName.textContent };
  }

  return undefined;
}
