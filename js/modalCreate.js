import { Modal } from './modal.js'

export const modalCreate = () => {
  const { modalTitle, modalBtn, modalContainer, modalForm } = Modal()

  // const product = {
  //   name: 'Malax, Finland',
  //   linkUrL: 'HTTPS',
  //   imgUrl: 'img',
  //   summary: 'asdasdasd',
  //   price: 125
  // }

  const product = {}

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    product.name = modalForm.labelName.value
    product.airUrl = modalForm.labelAirUrl.value
    product.img = modalForm.labelImg.value
    product.summary = modalForm.labelSummary.value
    product.price = modalForm.labelPrice.value
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

