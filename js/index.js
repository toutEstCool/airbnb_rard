import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';
import { AirbnbItem } from './airbnbItem.js';

const createApp = () => {
  const header = Header()
  const searchSort = SearchAndSort()
  const airBnb = AirbnbItem()
  
  document.body.append(header, searchSort, airBnb)
}

createApp();

