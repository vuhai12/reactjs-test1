import styles from './Poper.module.scss'

const Poper = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Poper