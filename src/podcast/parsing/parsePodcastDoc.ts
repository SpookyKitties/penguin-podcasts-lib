
export function parsePodcastDoc(document: Document, selector: string, err?: string): string {
    const podcastElement = document.querySelector(selector);

    if (!podcastElement || podcastElement.textContent === null) {
        throw new Error(err);
    }
    return (podcastElement.textContent);
}
