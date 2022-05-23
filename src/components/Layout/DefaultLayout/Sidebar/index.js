import style from './Sidebar.module.scss'
import Logo from './small logo.png'
import { publicRoutes } from '../../../../routes'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className={style.wrapper}>
            <div>
                <div className={style.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className={style.menuItem}>
                    {publicRoutes.map((route, index) => {
                        return (
                            <li key={index}>
                                <Link to={route.path}>{route.icon}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </aside>
    )
}

export default Sidebar