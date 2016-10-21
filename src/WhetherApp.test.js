import React from 'react';
import ReactDOM from 'react-dom';
import WhetherApp from './WhetherApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WhetherApp />, div);
});
