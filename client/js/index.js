import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';
import { WrapperHouse } from './wrapperHouse.js';
import { getAllHouse } from './api/airbnbApi.js';
import { AirbnbItem } from './airbnbItem.js';

const createApp = async () => {
  const header = Header()
  const searchSort = SearchAndSort()
  const houses = await getAllHouse()
  const wrapperHouse = WrapperHouse()

  for (const house of houses) {
    wrapperHouse.append(AirbnbItem(house))
  }
  
  document.body.append(header, searchSort, wrapperHouse)
}

createApp();

