import styles from '../css/DetailContainer.module.css'


function DetailContainer(props) {

    const { heading, title } = props

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                {heading}
            </h1>
            <p className={styles.title}>
                {title}
            </p>
        </div>
    )
}


export default DetailContainer