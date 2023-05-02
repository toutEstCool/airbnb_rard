export const Sorting = () => {
  const sortingComponent = document.createElement('div')
  const wrapper = document.createElement('div')
  const sortingTitle = document.createElement('h4')
  const btnContainer = document.createElement('div')
  const priceBtn = document.createElement('button') 
  const nameBtn = document.createElement('button')  

  sortingComponent.classList.add('sorting')
  wrapper.classList.add('sorting-wrapper')
  sortingTitle.classList.add('sorting__title')
  btnContainer.classList.add('btn-container')
  priceBtn.classList.add('price__btn', 'btn')
  nameBtn.classList.add('name__btn', 'btn')

 

  sortingTitle.textContent = 'Sorting by'
  priceBtn.textContent = 'price'
  nameBtn.textContent = 'name'

  sortingComponent.append(wrapper)
  btnContainer.append(priceBtn, nameBtn)
  wrapper.append(sortingTitle, btnContainer)

  return sortingComponent;
}