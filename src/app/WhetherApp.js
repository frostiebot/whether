import React, { Component } from 'react';

import { Loading, ForecastList } from '../components';

import * as api from '../api';

import '../stylesheets/app/WhetherApp.scss';


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
