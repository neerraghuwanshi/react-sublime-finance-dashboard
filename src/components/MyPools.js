import styles from '../css/MyPools.module.css'
import MyPoolsHeader from './MyPoolsHeader'
import Pool from './Pool'


function MyPools() {

    let pools = [
        {
            username: 'stani.eth',
            name: '@StaniKulechov',
            imageUrl: 'images/avatars/defaultAvatar.jpeg',
            type: 'Open Pool',
            status: 'Grace Period',
            borrowRate: '11%',
            nextPayment: '200 DOT',
            borrowedAmount: '1000 DOT',
            repaymentProgress: '45%',
            action: 'Repay',
        },
        {
            username: 'stani.eth',
            name: '@StaniKulechov',
            imageUrl: 'images/avatars/defaultAvatar.jpeg',
            type: 'Open Borrow',
            status: 'Collecting',
            borrowRate: '11%',
            borrowedAmount: '1000 DOT',
            repaymentProgress: '100%',
            endsIn: '2d 12h 34m',
            action: 'Add Collateral',
        },
        {
            username: 'stani.eth',
            name: '@StaniKulechov',
            imageUrl: 'images/avatars/defaultAvatar.jpeg',
            type: 'Open Borrow',
            status: 'Closed',
            borrowRate: '11%',
            borrowedAmount: '1000 DOT',
            repaymentProgress: '100%',
            endedOn: '30th Jan 2021',
            action: 'View More',
        },
        {
            username: 'stani.eth',
            name: '@StaniKulechov',
            imageUrl: 'images/avatars/defaultAvatar.jpeg',
            type: 'Open Borrow',
            status: 'Closed',
            borrowRate: '11%',
            borrowedAmount: '1000 DOT',
            repaymentProgress: '100%',
            endedOn: '30th Jan 2021',
            action: 'View More',
        },
        {
            username: 'stani.eth',
            name: '@StaniKulechov',
            imageUrl: 'images/avatars/defaultAvatar.jpeg',
            type: 'Open Borrow',
            status: 'Closed',
            borrowRate: '11%',
            borrowedAmount: '1000 DOT',
            repaymentProgress: '100%',
            endedOn: '30th Jan 2021',
            action: 'View More',
        },
    ]


    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                My Pools
            </h1>
            <MyPoolsHeader />
            <div className={styles.poolsContainer}>
                <div className={styles.innerPoolsContainer}>
                    {pools.map((item, index) => (
                        <Pool
                            key={index}
                            {...item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default MyPools