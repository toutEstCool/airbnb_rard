import { deleteData, sendData } from './api/airbnbApi.js'
import { Modal } from './modal.js'

export const modalUpdate = (house) => {
  const deleteBtn = document.createElement('button')
  const { modalTitle, modalBtn, modalContainer, modalForm } = Modal()

  deleteBtn.classList.add('modal__btn', 'delete')
  deleteBtn.textContent = 'Delete'
  modalForm.append(deleteBtn)
  
  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const product = {}
    
    product.name = modalForm.labelName.value
    product.airbnbUrl = modalForm.labelAirUrl.value
    product.imgUrl = modalForm.labelImg.value
    product.summary = modalForm.labelSummary.value
    product.price = modalForm.labelPrice.value
    
    sendData(product, 'PATCH', 'house', house.id)
  })

  deleteBtn.addEventListener('click', () => {
    let response = confirm('Вы уверенны ?')
    if (response) deleteData('house', house.id)
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

