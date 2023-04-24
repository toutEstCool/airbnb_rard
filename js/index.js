import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';

const createApp = () => {
  const header = Header()
  const searchSort = SearchAndSort()
  document.body.append(header, searchSort)
}

createApp();


