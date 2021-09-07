import Ratings from './Ratings';
import React from 'react';

export const randomNumber = () => {
    return Math.random().toFixed(15).slice(2);
};

export class MainStars extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.state = {
            rating: 0
        };
    }

    changeRating(rating) {
        this.setState({
            rating: rating
        })
    }

    render() {

        return (
            <div className="page-wrap">
                <div>
                    <Ratings
                        rating={this.props.vote}
                        widgetDimensions="40px"
                        widgetSpacings="15px"
                    >
                        <Ratings.Widget widgetRatedColor="green" />
                        <Ratings.Widget widgetSpacing="30px" widgetDimension="15px" />
                        <Ratings.Widget widgetRatedColor="black" />
                        <Ratings.Widget widgetRatedColor="rebeccapurple" />
                        <Ratings.Widget />
                    </Ratings>
                </div>
            </div>
        )
    }

}