import iconSvg from './src/icon-svg'
iconSvg.install = (Vue) => {
  Vue.component(iconSvg.name, iconSvg)
}

export default iconSvg
