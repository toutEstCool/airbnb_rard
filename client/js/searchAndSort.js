import { Search } from './search.js';
import { Sorting } from './sorting.js';

export const SearchAndSort = () => {
  const search = Search()
  const sorting = Sorting()

  const searchAndSortWrapper = document.createElement('div')
  const container = document.createElement('div')
  const wrapper = document.createElement('div')

  container.classList.add('container')
  searchAndSortWrapper.classList.add('sortAndSearch')
  wrapper.classList.add('wrapper-sortAndSearch')

  searchAndSortWrapper.append(container)
  container.append(wrapper)
  wrapper.append(search, sorting)

  return searchAndSortWrapper;
}