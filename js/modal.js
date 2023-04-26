export const Modal = () => {
  const modalContainer = document.createElement('div')
  const modalWrapper = document.createElement('div')
  const modalTitle = document.createElement('h3')
  const modalForm = document.createElement('form')

  const labelName = document.createElement('label')
  const labelAirUrl = document.createElement('label')
  const labelImg = document.createElement('label')
  const labelSummary = document.createElement('label')
  const labelPrice = document.createElement('label')
  
  const inputName = document.createElement('input')
  const inputAirUrl = document.createElement('input')
  const inputImg = document.createElement('input')
  const textareaSummary = document.createElement('textarea')
  const inputPrice = document.createElement('input')

  const modalBtn = document.createElement('button')

  modalContainer.classList.add('modal-container')
  modalWrapper.classList.add('modal-wrapper')
  modalTitle.classList.add('modal__title')
  modalForm.classList.add('modal-form')
  modalBtn.classList.add('modal__btn')

  labelName.setAttribute('for', 'labelName')
  labelAirUrl.setAttribute('for', 'labelAirUrl')
  labelImg.setAttribute('for', 'labelImg')
  labelSummary.setAttribute('for', 'labelSummary')
  
  labelName.textContent = 'Enter name'
  labelAirUrl.textContent = 'Enter url'
  labelImg.textContent = 'Enter Img'
  labelSummary.textContent = 'Enter summary'
  labelPrice.textContent = 'Enter price'

  inputName.id = 'labelName' 
  inputAirUrl.id = 'labelAirUrl'
  inputImg.id = 'labelImg'
  textareaSummary.id = 'labelSummary'
  inputPrice.id = 'labelPrice'

  inputName.placeholder = 'Enter name' 
  inputAirUrl.placeholder = 'Enter url'
  inputImg.placeholder = 'Enter url'
  textareaSummary.placeholder = 'Enter summary'
  inputPrice.placeholder = 'Enter price'

  modalContainer.append(modalWrapper)
  modalWrapper.append(modalTitle, modalForm)
  
  modalForm.append(
    labelName,
    inputName,
    labelAirUrl,
    inputAirUrl,
    labelImg,
    inputImg,
    labelSummary,
    textareaSummary,
    labelPrice,
    inputPrice,
    modalBtn
  )
  return {
    modalContainer,
    modalTitle,
    modalBtn
  }
}