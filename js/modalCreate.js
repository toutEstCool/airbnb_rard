import { Modal } from './modal.js'

export const modalCreate = () => {
  const { modalTitle, modalBtn, modalContainer } = Modal()

  modalTitle.textContent = 'Create House'
  modalBtn.textContent = 'Create'
  document.body.append(modalContainer)
}

