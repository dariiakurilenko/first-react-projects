const WithRuBalance = Component => {
    return props => {
        const {balance} = props
        const ruBalance = balance * 90
        return <Component  {...props} ruBalance={ruBalance} />
    }
}

export default WithRuBalance