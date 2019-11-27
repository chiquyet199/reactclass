import React from 'react';
import './RatingStar.css'

class RatingStar extends React.Component{
    state = {
        value: this.props.initValue || 1,
        numsOfStar: this.props.numsOfStar || 5
    }

    handleStarClick = numberOfStar => () => {
        this.setState({value: numberOfStar})
    }

    render(){
        const {value, numsOfStar} = this.state;
        const array = Array.from({length: numsOfStar}, (item, index) => index + 1)
        return (
            <div className="rating-star">
                {
                    array.map(item => <div onClick={this.handleStarClick(item)} className={value >= item ? 'star rated' : 'star'}></div>)
                }
            </div>
        )
    }
}

export default RatingStar

{/* <RatingStar initValue={3} numsOfStar={7} /> */}