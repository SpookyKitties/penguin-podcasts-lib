
export function parseEpisodeElement(itemElement: Element, selector: string): string | undefined {
    const elem = itemElement.querySelector(selector);
    if (elem?.textContent) {
        return elem.textContent;
    }
    return undefined;
}
