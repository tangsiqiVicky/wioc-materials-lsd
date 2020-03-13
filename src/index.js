import {
    card1
} from './components/card'
import {
  canvas1,
  canvas2
} from './components/canvas'
import {
    digitalText1
} from './components/digital-text'
import  {
    chartBarOne,
    chartBarTwo,
    chartBarThree,
    chartBarFour,
    chartBarFive,
    chartBarSix,
    chartBarSeven,
    chartBarEight,
    chartBarNine,
    chartBarTen,
    chartBarLineOne,
    chartBarLineTwo,
    chartBarLineThree,
    chartBarLineFour,
    chartLineOne,
    chartLineTwo,
    chartLineThree,
    chartLinefour,
    chartPieOne,
    chartPieTwo,
    chartPercentageOne,
    chartRadarOne,
    chartWordCloud
} from './components/echarts'

import {
    list1
} from './components/list'

import {
    menu1
} from './components/menu'

import {
    popup1
} from  './components/popup'

import {
    table1
} from './components/table'


import {
    tab1
} from './components/tab'

import iconSvg from './components/icon-svg'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
function install (Vue) {
    Vue.component(card1.name, card1)
    Vue.component(canvas1.name, canvas1)
    Vue.component(canvas2.name, canvas2)
    Vue.component(digitalText1.name, digitalText1)
    Vue.component(chartBarOne.name, chartBarOne)
    Vue.component(chartBarTwo.name, chartBarTwo)
    Vue.component(chartBarThree.name, chartBarThree)
    Vue.component(chartBarFour.name, chartBarFour)
    Vue.component(chartBarFive.name, chartBarFive)
    Vue.component(chartBarSix.name, chartBarSix)
    Vue.component(chartBarSeven.name, chartBarSeven)
    Vue.component(chartBarEight.name, chartBarEight)
    Vue.component(chartBarNine.name, chartBarNine)
    Vue.component(chartBarTen.name, chartBarTen)
    Vue.component(chartBarLineOne.name, chartBarLineOne)
    Vue.component(chartBarLineTwo.name, chartBarLineTwo)
    Vue.component(chartBarLineThree.name, chartBarLineThree)
    Vue.component(chartBarLineFour.name, chartBarLineFour)
    Vue.component(chartLineOne.name, chartLineOne)
    Vue.component(chartLineTwo.name, chartLineTwo)
    Vue.component(chartLineThree.name, chartLineThree)
    Vue.component(chartLinefour.name, chartLinefour)
    Vue.component(chartPieOne.name, chartPieOne)
    Vue.component(chartPieTwo.name, chartPieTwo)
    Vue.component(chartPercentageOne.name, chartPercentageOne)
    Vue.component(chartRadarOne.name, chartRadarOne)
    Vue.component(chartWordCloud.name, chartWordCloud)
    Vue.component(popup1.name, popup1)
    Vue.component(menu1.name, menu1)
    Vue.component(table1.name, table1)
    Vue.component(tab1.name,tab1)
    Vue.component(list1.name, list1)
    Vue.component(iconSvg.name, iconSvg)
}

export default {
    install,
    card1,
    canvas1,
    canvas2,
    digitalText1,
    chartBarOne,
    chartBarTwo,
    chartBarThree,
    chartBarFour,
    chartBarFive,
    chartBarSix,
    chartBarSeven,
    chartBarEight,
    chartBarNine,
    chartBarTen,
    chartBarLineOne,
    chartBarLineTwo,
    chartBarLineThree,
    chartBarLineFour,
    chartLineOne,
    chartLineTwo,
    chartLineThree,
    chartLinefour,
    chartPieOne,
    chartPieTwo,
    chartPercentageOne,
    chartRadarOne,
    chartWordCloud,
    list1,
    iconSvg,
    menu1,
    popup1,
    table1,
    tab1
}
