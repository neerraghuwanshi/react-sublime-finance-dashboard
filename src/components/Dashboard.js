import Details from './Details'
import Important from './Important'
import MyPools from './MyPools'
import styles from '../css/Dashboard.module.css'


function Dashboard() {

    const details1 = [
        {
            heading: '$16,034',
            title: 'Total Borrowed Amount',
        },
        {
            heading: '$160,032',
            title: 'Total Supplied Amount',
        },
        {
            heading: '32%',
            title: 'Total Borrow Rate',
        },
        {
            heading: '15%',
            title: 'Total Lending Rate',
        },
    ]

    const details2 = [
        {
            heading: '$0',
            title: 'Deposited',
        },
        {
            heading: '$0',
            title: 'Interest Earned',
        },
        {
            heading: '6%',
            title: 'Interest Rate',
        },
    ]

    const details3 = [
        {
            heading: '$0',
            title: 'Credit Granted',
        },
        {
            heading: '$0',
            title: 'Active Credit',
        },
        {
            heading: '0',
            title: 'Interest Accured',
        },
        {
            heading: '6%',
            title: 'Interest Rate',
        },
    ]

    const important = [
        {
            url: 'avatar1.png',
            heading: 'Vote for Extension',
            username: '@Lorem_ipsum',
            deadline: 'Vote ends in 2 days',
        },
        {
            url: 'avatar2.jpeg',
            heading: 'Vote for Extension',
            username: '@Lorem_ipsum',
            deadline: 'Vote ends in 2 days',
        },
        {
            url: 'defaultAvatar.jpeg',
            heading: 'Vote for Extension',
            username: '@Lorem_ipsum',
            deadline: 'Vote ends in 2 days',
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <Details
                    heading='Overview'
                    data={details1}/>
                <Details
                    viewMore
                    heading='Deposit and Save Overview'
                    data={details2}/>
                <Details
                    viewMore
                    heading='Credit Lines'
                    data={details3}/>
                <MyPools />
            </div>
            <div className={styles.importantContainer}>
                <Important 
                    data={important}/>
            </div>
        </div>
    )
}


export default Dashboard