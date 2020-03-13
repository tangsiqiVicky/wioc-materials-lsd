import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'
import Card1 from './docs/card1.md' //卡片
import Tab1 from './docs/tab1.md'//选项卡
import Menu1 from './docs/menu1.md'//菜单
import Dagitaltext1 from './docs/dagitalText1.md' //数字指标
import Bar from './docs/bar.md' //柱形图
import Pie from './docs/pie.md' //饼状图
import Line from './docs/line.md' //折线图
import Com from './docs/com.md' //复合图
import Radar from './docs/radar.md' //雷达图
import Words from './docs/words.md' //词云图
import Canvas1 from './docs/canvas1.md' //动画
import List1 from './docs/list1.md'//列表
import Popup1 from './docs/Popup1.md'//弹出框
import Table1 from './docs/Table1.md'//表格
import IconSvg from './docs/iconSvg.md'


const routes = [
    {
        path: '/',
        component: Install,
        name: 'default'
    },
    {
        path: '/guide/install',
        name: 'Install',
        component: Install
    },
    {
        path: '/guide/quikeStart',
        name: 'quikeStart',
        component: QuikeStart
    },
    {
        path: '/card1',
        name: 'card1',
        component: Card1
    },
    {
        path: "/tab1",
        name: "tab1",
        component: Tab1
    },
    {
        path: '/menu1',
        name: 'menu1',
        component: Menu1
    },
    {
        path: '/dagitaltext1',
        name: 'dagitaltext1',
        component: Dagitaltext1
    },
    {
        path: '/bar',
        name: 'bar',
        component: Bar
    },
    {
        path: '/pie',
        name: 'pie',
        component: Pie
    },
    {
        path: '/line',
        name: 'line',
        component: Line
    },

    {
        path: '/com',
        name: 'com',
        component: Com
    },
    {
        path: '/radar',
        name: 'radar',
        component: Radar
    },
    {
        path: '/words',
        name: 'words',
        component: Words
    },
    {
        path: '/canvas1',
        name: 'canvas1',
        component: Canvas1
    },
    {
        path: '/list1',
        name: 'list1',
        component: List1

    },
    {
        path: '/popup1',
        name: 'popup1',
        component: Popup1

    },
    {
        path: '/table1',
        name: 'table1',
        component: Table1
    },
    {
        path: '/iconSvg',
        name: 'iconSvg',
        component: IconSvg
    }

]

export default routes
