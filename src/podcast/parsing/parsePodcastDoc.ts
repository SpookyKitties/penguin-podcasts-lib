
export function parsePodcastDoc(document: Document, selector: string, err?: string): string {

  const podcastElement = document.querySelector(selector);
  if (err && (!podcastElement || !podcastElement.textContent)) {
    throw (`Error ${err}`);

  }


  return (podcastElement && podcastElement.textContent ? podcastElement.textContent : '');
}
