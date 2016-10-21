/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import _ from 'lodash';
import moment from 'moment';


_.mixin({
    sortByKeys: function (obj, comparator) {
        var keys = _.sortBy(_.keys(obj), function (key) {
            return comparator ? comparator(obj[key], key) : key;
        });

        return _.zipObject(keys, _.map(keys, function (key) {
            return obj[key];
        }));
    }
});

function medianForecastForDay(key, arr) {
    return _.last(_.first(_.chunk(arr, Math.ceil(arr.length / 2))));
}

function groupForecastsByDay(forecasts) {
    return _.sortByKeys(
        _.groupBy(
            forecasts, (forecast) => moment(forecast.dt_txt).startOf('day').unix()
        )
    );
}

function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

export function kelvinToFahrenheit(kelvin) {
    return Math.round((kelvinToCelsius(kelvin) * 9 / 5) + 32);
}

export function fiveDayForecast(forecasts) {
    return _.slice(
        _.map(
            groupForecastsByDay(forecasts), (value, key) => medianForecastForDay(key, value)
        ),
        0, 5
    );
}
