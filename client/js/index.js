import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';
import { AirbnbItem } from './airbnbItem.js';
import { getAllHouse } from './api/airbnbApi.js';

const createApp = async () => {
  const header = Header()
  const searchSort = SearchAndSort()
  const houses = await getAllHouse()

  for (const house of houses) {
    document.querySelector('.houses').append(AirbnbItem(house))
  }
  
  document.body.append(header, searchSort)
}

createApp();

