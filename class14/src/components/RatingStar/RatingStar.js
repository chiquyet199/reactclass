import React from 'react';
import './RatingStar.css'

class RatingStar extends React.Component{
    state = {
        value: this.props.initValue || 1
    }

    handleStarClick = numberOfStar => () => {
        this.setState({value: numberOfStar})
    }

    render(){
        const {value} = this.state;
        return (
            <div className="rating-star">
                <div onClick={this.handleStarClick(1)} className={value >= 1 ? 'star rated' : 'star'}></div>
                <div onClick={this.handleStarClick(2)} className={value >= 2 ? 'star rated' : 'star'}></div>
                <div onClick={this.handleStarClick(3)} className={value >= 3 ? 'star rated' : 'star'}></div>
                <div onClick={this.handleStarClick(4)} className={value >= 4 ? 'star rated' : 'star'}></div>
                <div onClick={this.handleStarClick(5)} className={value >= 5 ? 'star rated' : 'star'}></div>
            </div>
        )
    }
}

export default RatingStar

{/* <RatingStar initValue={3}/> */}