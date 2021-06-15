import DetailContainer from './DetailContainer'
import Button from './Button'
import styles from '../css/Details.module.css'
import { toPascalCase } from '../helpers/textFormat'


function Details(props) {

    const { heading, data, viewMore } = props

    const newHeading = toPascalCase(heading)
    console.log(newHeading+ 'Container')

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                {heading}
            </h1>
            <div  
                className={`
                    ${styles.detailsContainer} ${styles[newHeading + 'Container']}
                `}>
                {data.map((item, index) => (
                    <DetailContainer
                        key={index}
                        heading={item.heading}
                        title={item.title}
                        />
                ))}
            </div>
            {viewMore &&
            <Button
                containerClassName={styles.buttonContainer}
                titleClassName={styles.buttonTitle}
                title='View More'/>}
        </div>
    )
}


export default Details