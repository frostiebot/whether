import _ from 'lodash';

const SCALES = {
    c: kelvinToCelsius,
    f: kelvinToFahrenheit
};

export function convertKelvinToScale(kelvin, scale) {
    return _.get(SCALES, scale, kelvinToFahrenheit)(kelvin);
}

export function kelvinToCelsius(kelvin) {
    // Easy Peasy.
    return Math.round(kelvin - 273.15);
}

export function kelvinToFahrenheit(kelvin) {
    // Uhh. Sure.
    return Math.round((kelvinToCelsius(kelvin) * 9 / 5) + 32);
}
