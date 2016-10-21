import React, { Component } from 'react';

import Loading from './Loading';
import ForecastList from './ForecastList';

import './WhetherApp.scss';

// import getFiveDayForecastData from './api';

import * as api from './api';


class WhetherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null };
    }

    componentDidMount() {
        api.getFiveDayForecast().then((data) => {
            this.setState({data: data});
        });
    }

    render() {
        return (
            <div className="whether-app">
                {this.state.data ? <ForecastList {...this.state.data} /> : <Loading />}
            </div>
        );
    }
}

export default WhetherApp;
