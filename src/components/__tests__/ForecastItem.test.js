import React from 'react';
import { shallow } from 'enzyme';
import ForecastItem from '../ForecastItem';

it('renders and converts dates and kelvins properly', () => {
    let forecast = { dt_txt: "2016-10-19 03:00:00", main: { temp: 303.15 }, weather: [ { id: 804 } ] };
    const wrapper = shallow(<ForecastItem forecast={forecast} />);

    expect(wrapper.find('.forecast-date').first().text()).toBe('Oct 19th');
    expect(wrapper.find('.forecast-temp').first().text()).toContain(86);
});
