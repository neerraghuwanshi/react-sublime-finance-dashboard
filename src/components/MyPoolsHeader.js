import styles from '../css/MyPoolsHeader.module.css'


function MyPoolsHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.linksContainer}>
                <div 
                    className={`
                        ${styles.link} ${styles.activeLink}`
                    }>
                    All Pools
                </div>
                <div className={styles.link}>
                    Borrow
                </div>
                <div className={styles.link}>
                    Lend
                </div>
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.rowContainer}>
                    <img
                        className={styles.image}
                        src='images/icons/search.png'
                        alt='search'/>
                    <span className={styles.search}>
                        Search
                    </span>
                </div>
                <select
                    name="filters"
                    className={styles.filter}>
                    <option 
                        value="filter_by">
                        Filter by
                    </option>
                </select>
            </div>
        </div>
    )
}


export default MyPoolsHeader