import { rssChannel } from "../../consts";


import { Category } from "../../Category";
export function parsePodcastCategories(document: Document) {
  const selectors = [`${rssChannel} > itunes\\:category`];

  const categories: Category[] = Array.from(document.querySelectorAll(selectors.join(' '))).map((elem): Category | undefined => {
    const categoryName = elem?.getAttribute('text');


    const subCategoryElements = elem.querySelector(`itunes\\:category`);
    const subCategoryName = subCategoryElements?.getAttribute('text');
    let subCategory: Category | undefined = subCategoryName ? { categoryName: subCategoryName } : undefined;
    return categoryName ? { categoryName: categoryName, subCategory: subCategory } : undefined;

  }).filter(val => val !== undefined) as Category[];

  return categories;
}
