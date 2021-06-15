import styles from '../css/Important.module.css'
import ImportantItem from './ImportantItem'


function Important(props) {

    const { data } = props

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Important <span className={styles.dataLength}>({data.length})</span>
            </h1>
            <div className={styles.importantItemsContainer}>
                {data.map((item, index) => (
                    <ImportantItem
                        key={index}
                        {...item}/>
                ))}
            </div>
        </div>
    )
}


export default Important