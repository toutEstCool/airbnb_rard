export const Header = () => {
  const header = document.createElement('header')
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const link = document.createElement('a')
  const logoImg = document.createElement('img')
  const createImg = document.createElement('div')
  const createImgElement = document.createElement('img')

  header.classList.add('header')
  container.classList.add('container')
  wrapper.classList.add('header-wrapper')
  link.classList.add('header-link')
  logoImg.classList.add('link__logo')
  createImg.classList.add('header-create')
  createImgElement.classList.add('create__ImgElement')
  createImgElement.src = '../img/header-create.svg'
  logoImg.src = '../img/logo.svg'
  link.href = '/'

  header.append(container)
  container.append(wrapper)
  createImg.append(createImgElement)
  wrapper.append(link, createImg)
  link.append(logoImg)

  return header;
}
