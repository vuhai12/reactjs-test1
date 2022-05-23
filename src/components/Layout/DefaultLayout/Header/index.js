import style from './Header.module.scss'
import { ReactComponent as BigLogo } from "./Big logo.svg";
import { ReactComponent as Button } from "./menubutton.svg";
import { ReactComponent as Notify } from "./Notidication.svg";
import Account from "./Account.png";

const Header = () => {
    return (
        <header className={style.wrapper}>
            <div className={style.button}>
                <Button />
            </div>
            <div className={style.logo}>
                <BigLogo />
            </div>
            <div className={style.notify}>
                <Notify />
            </div>
            <div className={style.account}>
                <img src={Account} alt='Account'/>
            </div>
        </header>
    )
}

export default Header