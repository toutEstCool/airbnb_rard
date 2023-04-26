export const AirbnbItem = () => {
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

  productContainer.classList.add('product-container')
  productWrapper.classList.add('product-wrapper')
  productSpace.classList.add('product-space')

  productImg.src = 'https://i.pinimg.com/564x/f8/f9/9b/f8f99b724b008406401cb8d11db705b0.jpg'
  productName.textContent = 'Malax, Finland'

  productImg.classList.add('product-img')
  productName.classList.add('product-title')

  productSummaryTitle.textContent = 'Summary'
  productSummaryDescription.textContent = 'Since the original Annotation Kit came out, Figma shipped new versions of Auto Layout and Variants.'

  productSummaryWrapper.classList.add('product-summary')
  productSummaryTitle.classList.add('summary-title')
  productSummaryDescription.classList.add('summary-description')

  productReferencesTitle.textContent = 'References'
  productReferencesLinks.textContent = 'airbnb'
  productReferencesLinks.target = '_blanck'
  productReferencesLinks.href = 'https://www.airbnb.com/rooms/44532052?adults=1&category_tag=Tag%3A4104&children=0&enable_m3_private_room=false&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-05-04&check_out=2023-05-09&federated_search_id=a8278581-e56d-4224-8a60-4ab4f1e105e0&source_impression_id=p3_1682515038_pSHB5wkPBzyTvW5s'
  productReferencesPrice.textContent = '$253 night'

  productReferences.classList.add('references-container')
  productReferencesTitle.classList.add('references-title')
  productReferencesItems.classList.add('references-items')
  productReferencesLinks.classList.add('items-links')
  productReferencesPrice.classList.add('items-price')

  productReferencesItems.append(productReferencesLinks, productReferencesPrice)
  productReferences.append(productReferencesTitle, productReferencesItems)
  productSummaryWrapper.append(productSummaryTitle,productSummaryDescription)

  productWrapper.append(productImg, productSpace)
  productSpace.append(productName, productSummaryWrapper, productReferences)
  productContainer.append(productWrapper)

  return productContainer;
}

