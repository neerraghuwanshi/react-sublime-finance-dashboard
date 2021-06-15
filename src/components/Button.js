import styles from '../css/Button.module.css'


function Button(props) {

    const { title, onPress, containerClassName, titleClassName } = props

    return (
        <div 
            className={`
                ${styles.container} ${
                    containerClassName ? 
                        containerClassName :
                        ''
                }
            `}
            onClick={
                onPress ? 
                    onPress : 
                    () => console.log('clicked')
            }>
            <h1 className={titleClassName}>
                {title}
            </h1>
        </div>
    )
}


export default Button