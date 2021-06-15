import styles from '../css/ImportantItem.module.css'
import Button from './Button'


function ImportantItem(props) {

    const { url, heading, username, deadline } = props

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <img 
                    alt='avatar'
                    className={styles.image}
                    src={`images/avatars/${url}`} 
                    />
                <div className={styles.contentContainer}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>
                    <p className={styles.username}>
                        {username}
                    </p>
                    <p className={styles.deadline}>
                        {deadline}
                    </p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button 
                    title='Vote'
                    titleClassName={styles.buttonTitle}
                    />
                <Button 
                    title='Dismiss'
                    containerClassName={styles.secondaryButton}
                    titleClassName={styles.buttonTitle}
                    />
            </div>
        </div>
    )
}


export default ImportantItem