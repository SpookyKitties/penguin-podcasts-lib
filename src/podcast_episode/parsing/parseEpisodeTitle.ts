

export function parseEpisodeTitle(itemElement: Element): string {
    const elem = itemElement.querySelector('title');

    if (elem && elem.textContent) {
        return elem.textContent;
    }

    throw new Error("No episode title found");
}
