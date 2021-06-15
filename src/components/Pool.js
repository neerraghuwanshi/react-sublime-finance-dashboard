import styles from '../css/Pool.module.css'
import Button from './Button'
import { toPascalCase } from '../helpers/textFormat'


function Pool(props) {

    const {
        imageUrl, 
        username, 
        name, 
        type,
        status, 
        borrowRate, 
        borrowedAmount, 
        repaymentProgress,
        collectionProgress,
        nextPayment, 
        endsIn, 
        endedOn,
        action,
    } = props

    const newStatus = toPascalCase(status)

    return (
        <div className={styles.container}>
            <div className={styles.upperContainer}>
                <div className={styles.rowContainer}>
                    <img
                        className={styles.image}
                        src={imageUrl}
                        alt='avatar'/>
                    <div>
                        <h2 className={styles.username}>{username}</h2>
                        <p className={styles.name}>{name}</p>
                        <div className={styles.buttonRowContainer}>
                            <Button
                                title={type}
                                containerClassName={styles.rowButton}
                                titleClassName={styles.rowButtonTitle}/>
                            <Button 
                                title={status}
                                containerClassName={`
                                    ${styles.rowButton} ${styles[newStatus + 'Button']}
                                `}
                                titleClassName={`
                                    ${styles.rowButtonTitle} ${styles[newStatus + 'Title']}
                                `}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    Borrow Rate
                </p>
                <h1 className={styles.value}>
                    {borrowRate}
                </h1>
            </div>
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    Borrowed Amount
                </p>
                <h1 className={styles.value}>
                    {borrowedAmount}
                </h1>
            </div>
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    {collectionProgress ? 
                        'Collection Progress' :
                        'Repayment Progress'
                    }
                </p>
                <div className={styles.rowCentredContainer}>
                    <h1 className={styles.value}>
                        {repaymentProgress || collectionProgress}
                    </h1>
                    <div className={styles.progressContainer}>
                        <div 
                            className={styles.progress}
                            style={{
                                width: repaymentProgress || collectionProgress,
                            }}>
                        </div>
                    </div>
                </div>
            </div>
            {nextPayment && 
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    Next Payment
                </p>
                <h1 className={styles.value}>
                    {nextPayment}
                </h1>
            </div>}
            {endedOn && 
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    Ended On
                </p>
                <h4 className={styles.value}>
                    {endedOn}
                </h4>
            </div>}
            {endsIn &&
            <div className={styles.keyValueContainer}>
                <p className={styles.key}>
                    Ends In
                </p>
                <h4 className={styles.value}>
                    {endsIn}
                </h4>
            </div>}
            <Button
                title={action}
                containerClassName={styles.bigButton}
                titleClassName={styles.bigButtonTitle}/>
        </div>
    )
}


export default Pool