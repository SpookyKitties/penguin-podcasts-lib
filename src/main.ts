import { of, asyncScheduler } from 'rxjs';
import normalize from 'normalize-path';
import { flatMap$ } from './podcast-manager';
import { map, filter, flatMap } from 'rxjs/operators';
import fastGlob from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { parsePodcast } from './parsePodcast';
import cuid from 'cuid';
import axios from 'axios';
async function axiosGet(url: string): Promise<string | undefined> {
  try {
    const data = await axios.get(url);

    return data.data as string;
  } catch (error) {
    return undefined;
  }
}

function downloadTestData() {
  of(fastGlob(normalize(`./test_data/podcast_urls/**`)))
    .pipe(
      flatMap$,
      flatMap$,
      filter((o) => o !== undefined && o !== null),
      map((o) => readFile(o)),
      flatMap$,
      map((file) => JSON.parse(file.toString()) as string[]),
      flatMap$,
      map((o) => axiosGet(o)),
    )
    .pipe(
      flatMap$,
      filter((o) => o !== undefined),
      map((o: string) => writeFile(`./test_data/${cuid()}.xml`, o)),
      flatMap((o) => o),
    )
    .subscribe();
}

function main() {
  // of(readFile(normalize('./src/podcast.xml'))).pipe(flatMap$, map(o => {
  //   const podcast: Podcast = parsePodcast(o);
  //   (podcast);
  // }
  // )).subscribe();
  downloadTestData();
  // of(fastGlob(normalize('./test_data/*.xml')), asyncScheduler)
  //   .pipe(
  //     flatMap$,
  //     flatMap$,
  //     map((fileName) => readFile(fileName)),
  //     flatMap$,
  //     filter((o) => o !== undefined),
  //     map((o) => parsePodcast(o)),
  //     filter((o) => o !== undefined),

  //     map((o) => {
  //       // console.log(o);
  //       return of(
  //         writeFile(
  //           normalize(`./test_data/json/${cuid()}.json`),
  //           JSON.stringify(o),
  //         ),
  //       ).pipe(flatMap((o) => o));
  //     }),
  //   )
  //   .pipe(flatMap((o) => o))
  //   .subscribe();
}

main();
