import React, { Component } from 'react';

import _ from 'lodash';
import moment from 'moment';

import { convertKelvinToScale } from '../util';

import 'weather-icons-tmp/css/weather-icons.css';
import '../stylesheets/components/ForecastItem.scss';


const SCALE_ICONS = {
    c: 'wi wi-celsius',
    f: 'wi wi-fahrenheit'
};


class ForecastItem extends Component {
    render() {
        // let temperature = kelvinToFahrenheit(this.props.forecast.main.temp);
        let temperature = convertKelvinToScale(this.props.forecast.main.temp, this.props.scale);
        let forecastDate = moment(this.props.forecast.dt_txt);
        let weatherSymbolId = 'wi wi-owm-' + this.props.forecast.weather[0].id;

        let temperatureScaleIconClassNames = _.get(
            SCALE_ICONS, this.props.scale, SCALE_ICONS['f']
        );

        return (
            <div className="forecast-item">
                <h2 className="forecast-date">{forecastDate.format('MMM Do')}</h2>
                <p className="forecast-temp">
                    {temperature}<i className={temperatureScaleIconClassNames}></i>
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
    forecast: React.PropTypes.object,
    scale: React.PropTypes.string
};

export default ForecastItem;
