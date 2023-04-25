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

  searchComponent.append(wrapper)
  wrapper.append(searchTitle, searchInput)

  return searchComponent;
}