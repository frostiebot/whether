import React, { Component } from 'react';

import './Loading.css';


class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <p className="loading-spinner">
                    LOADING
                </p>
            </div>
        );
    }
}

export default Loading;
