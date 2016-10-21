/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React, { Component } from 'react';

import ForecastItem from './ForecastItem';


class ForecastList extends Component {
    render() {
        return (
            <div className="forecast-list-container">
                <div className="forecast-city">
                    <h1>Five Day Forecast for {this.props.city}</h1>
                </div>
                <div className="forecast-list">
                    {this.props.forecasts.map(forecast => (
                        <ForecastItem key={forecast.dt} forecast={forecast} />
                    ))}
                </div>
            </div>
        );
    }
}

ForecastList.propTypes = {
    city: React.PropTypes.string,
    forecasts: React.PropTypes.array
};

export default ForecastList;
