import { medianForecastForDay, groupForecastsByDay, fiveDayForecast } from '../forecastcollect';

import moment from 'moment';

describe('When trying to get forecasts out of crazy objects', () => {

    it('gets the forecast from the middle of an array', () => {
        expect(medianForecastForDay(null, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])).toEqual('d');
        expect(medianForecastForDay(null, ['a'])).toEqual('a');
        expect(medianForecastForDay(null, ['a', 'b', 'c'])).toEqual('b');
    });


    it('groups forecasts by start of day', () => {
        let threeDayForecast = [
            {dt_txt: "2016-10-19 03:00:00"}, {dt_txt: "2016-10-19 06:00:00"},
            {dt_txt: "2016-10-19 09:00:00"}, {dt_txt: "2016-10-19 12:00:00"},
            {dt_txt: "2016-10-20 03:00:00"}, {dt_txt: "2016-10-20 06:00:00"},
            {dt_txt: "2016-10-20 09:00:00"}, {dt_txt: "2016-10-20 12:00:00"},
            {dt_txt: "2016-10-21 03:00:00"}
        ];

        let result = groupForecastsByDay(threeDayForecast);

        expect(Object.keys(result).length).toEqual(3);
    });

    it('returns a maximum of five days of forecasts', () => {
        let eightDayForecast = [
            {dt_txt: "2016-10-19 03:00:00"}, {dt_txt: "2016-10-20 03:00:00"},
            {dt_txt: "2016-10-21 03:00:00"}, {dt_txt: "2016-10-22 03:00:00"},
            {dt_txt: "2016-10-23 03:00:00"}, {dt_txt: "2016-10-24 03:00:00"},
            {dt_txt: "2016-10-25 03:00:00"}, {dt_txt: "2016-10-26 03:00:00"},
        ];

        expect(fiveDayForecast(eightDayForecast).length).toEqual(5);
    });
});
