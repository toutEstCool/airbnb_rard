import { postHouse } from './api/airbnbApi.js'
import { Modal } from './modal.js'

export const modalCreate = () => {
  const { modalTitle, modalBtn, modalContainer, modalForm } = Modal()


  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const product = {}
    product.name = modalForm.labelName.value
    product.airbnbUrl = modalForm.labelAirUrl.value
    product.imgUrl = modalForm.labelImg.value
    product.summary = modalForm.labelSummary.value
    product.price = modalForm.labelPrice.value

    await postHouse(product)
  })


  
  modalTitle.textContent = 'Create House'
  modalBtn.textContent = 'Create'
  
  document.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      modalContainer.remove()
    }
  })
  document.body.append(modalContainer)
}

