import styles from '../css/Header.module.css'


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>
                    Sublime
                </h1>
            </div>
            <div className={styles.linkContainer}>
                <div 
                    className={`
                        ${styles.link} ${styles.activeLink}`
                    }>
                    Dashboard
                </div>
                <div className={styles.link}>
                    Borrow
                </div>
                <div className={styles.link}>
                    Lend
                </div>
                <div className={styles.link}>
                    Your Profile
                </div>
            </div>
        </div>
    )
}


export default Header