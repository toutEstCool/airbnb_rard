import { penSvg } from './svg.js';
import { formatDate } from './formatDate.js';
import { modalUpdate } from './modalUpdate.js';

export const AirbnbItem = (house) => {
  const productContainer = document.createElement('div')
  const productWrapper = document.createElement('div')
  const productImg = document.createElement('img')
  const productName = document.createElement('h3')
  const productSpace = document.createElement('div')
  const productEdit = document.createElement('div')
  const productEditImg = document.createElement('img')
  const productSummaryWrapper = document.createElement('div')
  const productSummaryTitle = document.createElement('h4')
  const productSummaryDescription = document.createElement('span')
  const productReferences = document.createElement('div')
  const productReferencesTitle = document.createElement('h4')
  const productReferencesItems = document.createElement('div')
  const productReferencesLinks = document.createElement('a')
  const productReferencesPrice = document.createElement('span')
  const createdTime = document.createElement('span')

  createdTime.classList.add('created-time')
  createdTime.textContent = formatDate(house.createdAt)

  productEdit.addEventListener('click', () => {
    modalUpdate(house)
  })

  
  productContainer.classList.add('product-container')
  productWrapper.classList.add('product-wrapper')
  productSpace.classList.add('product-space')
  productEdit.classList.add('product-edit')
  productEditImg.classList.add('edit-img')

  productImg.src = house.imgUrl
  productName.textContent = house.name

  productImg.classList.add('product-img')
  productName.classList.add('product-title')

  productSummaryTitle.textContent = 'Summary'
  productSummaryDescription.textContent = house.summary

  productSummaryWrapper.classList.add('product-summary')
  productSummaryTitle.classList.add('summary-title')
  productSummaryDescription.classList.add('summary-description')


  productEdit.innerHTML = penSvg

  productReferencesTitle.textContent = 'References'
  productReferencesLinks.textContent = 'airbnb'
  productReferencesLinks.target = '_blanck'
  productReferencesLinks.href = house.airbnbUrl
  productReferencesPrice.textContent = `$${house.price} night`

  productReferences.classList.add('references-container')
  productReferencesTitle.classList.add('references-title')
  productReferencesItems.classList.add('references-items')
  productReferencesLinks.classList.add('items-links')
  productReferencesPrice.classList.add('items-price')

  productEdit.append(productEditImg)
  productReferencesItems.append(productReferencesLinks, productReferencesPrice)
  productReferences.append(productReferencesTitle, productReferencesItems)
  productSummaryWrapper.append(productSummaryTitle,productSummaryDescription)

  productWrapper.append(productEdit, productImg, productSpace)
  productSpace.append(productName, productSummaryWrapper, productReferences, createdTime)
  productContainer.append(productWrapper)

  return productContainer;
}

