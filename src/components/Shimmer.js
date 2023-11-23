const Shimmer = () => {
    console.log('Shimmer')
    return (
        <div className="shimmer-body">
            <div className="shimmer-res-container">{
                (() => {
                    const shimmer = []
                    for (let count = 0; count < 12; ++count) {
                        shimmer.push(<div className="shimmer-restaurant-card" key={count}></div>)
                    }
                    return shimmer
                })()
            }
            </div>
        </div>
    )
};

export default Shimmer;