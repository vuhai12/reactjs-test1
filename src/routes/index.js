import Staff from '../pages/Staff'
import Category from '../pages/Category'
import Evaluate from '../pages/Evaluate'
import Exporting from '../pages/Exporting'
import File from '../pages/File'
import Order from '../pages/Order'
import Product from '../pages/Product'
import Shippingunit from '../pages/Shippingunit'
import Statistical from '../pages/Statistical'
import Turnover from '../pages/Turnover'
import Tutorial from '../pages/Tutorial'
import Wallethihi from '../pages/Wallethihi'
import Warehouse from '../pages/Warehouse'
import Home from '../pages/Home'
import Message from '../pages/Message'

import { ReactComponent as Statisticaln } from '../img/Statistical.svg'
import { ReactComponent as Categoryn } from '../img/Category.svg'
import { ReactComponent as Evaluaten } from '../img/Evaluate.svg'
import { ReactComponent as Exportingn } from '../img/Exporting.svg'
import { ReactComponent as Filen } from '../img/File.svg'
import { ReactComponent as Ordern } from '../img/Order.svg'
import { ReactComponent as Productn } from '../img/Product.svg'
import { ReactComponent as Shippingunitn } from '../img/Shippingunit.svg'
import { ReactComponent as Turnovern } from '../img/Turnover.svg'
import { ReactComponent as Tutorialn } from '../img/Tutorial.svg'
import { ReactComponent as Wallethihin } from '../img/Wallethihi.svg'
import { ReactComponent as Warehousen } from '../img/Warehouse.svg'
import { ReactComponent as Homen } from '../img/Home.svg'
import { ReactComponent as Messagen } from '../img/Message.svg'
import { ReactComponent as Staffn } from '../img/Staff.svg'



const publicRoutes = [
    { path: '/', component: Home, icon: <Homen/>},
    { path: '/staff', component: Staff, icon: <Staffn/>},
    { path: '/category', component: Category, icon: <Categoryn/>},
    { path: '/evaluate', component: Evaluate, icon: <Evaluaten/>},
    { path: '/exporting', component: Exporting, icon: <Exportingn/>},
    { path: '/file', component: File, icon: <Filen/>},
    { path: '/order', component: Order, icon: <Ordern/>},
    { path: '/product', component: Product, icon: <Productn/>},
    { path: '/shippingunit', component: Shippingunit, icon: <Shippingunitn/>},
    { path: '/turnover', component: Turnover, icon: <Turnovern/>},
    { path: '/tutorial', component: Tutorial, icon: <Tutorialn/>},
    { path: '/wallethihi', component: Wallethihi, icon: <Wallethihin/>},
    { path: '/warehouse', component: Warehouse, icon: <Warehousen/>},
    { path: '/statistical', component: Statistical, icon: <Statisticaln/>},
    { path: '/message', component: Message, icon: <Messagen/>},
]

export { publicRoutes }