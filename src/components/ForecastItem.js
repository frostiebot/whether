import React, { Component } from 'react';

import moment from 'moment';

import { kelvinToFahrenheit } from '../util';

import 'weather-icons-tmp/css/weather-icons.css';
import '../stylesheets/components/ForecastItem.scss';


class ForecastItem extends Component {
    render() {
        let temperature = kelvinToFahrenheit(this.props.forecast.main.temp);
        let forecastDate = moment(this.props.forecast.dt_txt);
        let weatherSymbolId = 'wi wi-owm-' + this.props.forecast.weather[0].id;

        return (
            <div className="forecast-item">
                <h2 className="forecast-date">{forecastDate.format('MMM Do')}</h2>
                <p className="forecast-temp">
                    {temperature}<i className="wi wi-fahrenheit"></i>
                </p>
                <p className="forecast-description">
                    <i className={weatherSymbolId}></i>
                    {this.props.forecast.weather[0].description}
                </p>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    forecast: React.PropTypes.object
};

export default ForecastItem;
