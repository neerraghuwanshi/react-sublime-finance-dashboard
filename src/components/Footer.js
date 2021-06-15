import styles from '../css/Footer.module.css'


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.linksContainer}>
                <div className={styles.link}>
                    Terms & Agreements
                </div>
                <div className={styles.link}>
                    Blog
                </div>
                <div className={styles.link}>
                    Privacy Policy
                </div>
                <div className={styles.link}>
                    FAQ
                </div>
                <div className={styles.link}>
                   &copy; 2021 Sublime
                </div>
            </div>
            <div className={styles.iconsContainer}>
                <img
                    className={styles.icon}
                    src='images/icons/discord.png' 
                    alt='icon'/>
                <img
                    className={styles.icon}
                    src='images/icons/telegram.png' 
                    alt='icon'/>
            </div>
        </div>
    )
}


export default Header