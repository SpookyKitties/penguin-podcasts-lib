import { PodcaseEpisodeEnclosure } from "../PodcaseEpisodeEnclosure";

export function parseEpisodeEnclosure(itemElement: Element): PodcaseEpisodeEnclosure {
    const elem = itemElement.querySelector('enclosure');

    if (elem) {
        const enclosureUrl = elem.getAttribute('url');
        const enclosureType = elem.getAttribute('type');
        const length = elem.getAttribute('length');

        if (enclosureUrl) {
            return { enclosureType: enclosureType ? enclosureType : undefined, url: enclosureUrl, length: length ? length : undefined };
        }
    }
    throw new Error('No enclosure found');
}
