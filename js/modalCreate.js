import { Modal } from './modal.js'

export const modalCreate = () => {
  const { modalTitle, modalBtn, modalContainer } = Modal()

  modalTitle.textContent = 'Create House'
  modalBtn.textContent = 'Create'
  
  document.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      modalContainer.remove()
    }
  })
  document.body.append(modalContainer)
}

