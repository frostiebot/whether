import _ from 'lodash';
import moment from 'moment';

// NO TIME TO EXPLAIN!
// Unsure if registering a mixin with lodash will carry over into
// other modules. In this case, it doesn't matter as we only use this
// mixin in here anyway.
// Hmm. Should it even be a mixin, then?
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

export function medianForecastForDay(key, arr) {
    // Attempt to safely pick the middle item from an array.
    // "Attempt". "Safely". Confidence.
    return _.last(_.first(_.chunk(arr, Math.ceil(arr.length / 2))));
}

export function groupForecastsByDay(forecasts) {
    // Returns an object from an OWM forecasts list grouped by the
    // date of the forecast normalized to the start of the day.
    return _.sortByKeys(
        _.groupBy(
            forecasts, (forecast) => moment(forecast.dt_txt).startOf('day').unix()
        )
    );
}

export function fiveDayForecast(forecasts) {
    // Clamp forecast data from OWM to FIVE days - NOT six for some
    // weird reason that only OWM knows.
    return _.slice(
        _.map(
            groupForecastsByDay(forecasts), (value, key) => medianForecastForDay(key, value)
        ),
        0, 5
    );
}
