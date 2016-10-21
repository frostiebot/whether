import React from 'react';
import { shallow } from 'enzyme';
import ForecastList from '../ForecastList';

it('renders city name properly', () => {
    let data = { city: 'Berlin', forecasts: [] };
    const wrapper = shallow(<ForecastList {...data} />);

    expect(wrapper.find('.forecast-city').first().text()).toContain('Berlin');
});
