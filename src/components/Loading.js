import React, { Component } from 'react';

import '../stylesheets/components/Loading.scss';


class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <p className="loading-text">
                    LOADING
                </p>
            </div>
        );
    }
}

export default Loading;
