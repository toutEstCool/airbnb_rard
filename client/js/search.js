import { AirbnbItem } from "./airbnbItem.js"
import { findHouse } from "./api/airbnbApi.js"
import { WrapperHouse } from "./wrapperHouse.js"

export const Search = () => {
  const searchComponent = document.createElement('div')
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const searchTitle = document.createElement('h4')
  const searchInput = document.createElement('input')

  searchComponent.classList.add('search')
  container.classList.add('container')
  wrapper.classList.add('search-wrapper')
  searchTitle.classList.add('search__title')
  searchInput.classList.add('search-input')
  searchInput.placeholder = 'Enter what you are looking for'
  
  searchTitle.textContent = 'Search by'


  searchInput.addEventListener('change', async (e) => {
    const response = await findHouse(e.target.value);
    const wrapper = document.querySelector('.wrapper-house')

    wrapper.innerHTML = ''
    
    for (const house of response) {
      wrapper.append(AirbnbItem(house))
    }
  })

  searchComponent.append(wrapper)
  wrapper.append(searchTitle, searchInput)

  return searchComponent;
}