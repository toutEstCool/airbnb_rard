import { editHouse, postHouse } from './api/airbnbApi.js'
import { Modal } from './modal.js'

export const modalUpdate = (house) => {
  const { modalTitle, modalBtn, modalContainer, modalForm } = Modal()

  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const product = {}
    console.log(1);
    
    product.name = modalForm.labelName.value
    product.airbnbUrl = modalForm.labelAirUrl.value
    product.imgUrl = modalForm.labelImg.value
    product.summary = modalForm.labelSummary.value
    product.price = modalForm.labelPrice.value

    
    await postHouse(product)
    editHouse(product, house.id)
  })

  modalForm.labelName.value = house.name
  modalForm.labelAirUrl.value = house.airbnbUrl
  modalForm.labelImg.value = house.imgUrl
  modalForm.labelSummary.value = house.summary
  modalForm.labelPrice.value = house.price
  
  modalTitle.textContent = 'Edit House'
  modalBtn.textContent = 'Edit'
  
  document.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      modalContainer.remove()
    }
  })
  document.body.append(modalContainer)
}

