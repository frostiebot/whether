import React, { Component } from 'react';

import ForecastItem from './ForecastItem';
import TemperatureScaleToggle from './TemperatureScaleToggle';

import '../stylesheets/components/ForecastList.scss';


class ForecastList extends Component {
    constructor(props) {
        super(props);

        this.handleTemperatureScaleChange = this.handleTemperatureScaleChange.bind(this);

        this.state = {scale: 'f'};
    }

    handleTemperatureScaleChange(scale) {
        scale = /c|f/.test(scale) ? scale : 'f';
        this.setState({scale});
    }

    render() {
        return (
            <div className="forecast-list-container">
                <div className="forecast-city">
                    <h1>Five Day Forecast for {this.props.city}</h1>
                    <TemperatureScaleToggle
                        scale={this.state.scale}
                        onChange={this.handleTemperatureScaleChange} />
                </div>
                <div className="forecast-list">
                    {this.props.forecasts.map(forecast => (
                        <ForecastItem
                            key={forecast.dt}
                            scale={this.state.scale}
                            forecast={forecast} />
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
