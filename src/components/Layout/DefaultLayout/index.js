import Header from "./Header";
import Sidebar from "./Sidebar";
import style from './DefaultLayout.module.scss'


const DefaultLayout = ({ children }) => {
    return (
        <div className={style.wrapper}>
            <Sidebar />
            <div className={style.container}>
                <Header />
                <div className={style.content}>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout