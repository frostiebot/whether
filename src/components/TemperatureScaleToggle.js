import React, { Component } from 'react';

import '../stylesheets/components/TemperatureScaleToggle.scss';


class TemperatureScaleToggle extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        let scale = this.props.scale;

        return (
            <fieldset className="forecast-scale-toggle">
                <label htmlFor="temp-scale-f">
                    <input
                        type="radio"
                        name="temp-scale"
                        id="temp-scale-f"
                        value="f"
                        onChange={this.handleChange}
                        checked={scale === 'f' ? 'checked' : ''} />
                    <i className="wi wi-fahrenheit"></i>
                </label>
                <label htmlFor="temp-scale-c">
                    <input
                        type="radio"
                        name="temp-scale"
                        id="temp-scale-c"
                        value="c"
                        onChange={this.handleChange}
                        checked={scale === 'c' ? 'checked' : ''} />
                    <i className="wi wi-celsius"></i>
                </label>
            </fieldset>
        );
    }
}


TemperatureScaleToggle.propTypes = {
    scale: React.PropTypes.string,
    onChange: React.PropTypes.func
};


export default TemperatureScaleToggle;