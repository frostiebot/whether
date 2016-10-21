/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { fiveDayForecast } from './util';

// London, United Kingdom. Cheated by just finding the id in the
// massive city.list.json from OWM
const OWM_CITY_ID = 2643743;

// OWM Five Day Forecast base URI + My API Key
// Do not like having my API key in here, but it's good for now.
const OWM_API_BASEURI = 'http://api.openweathermap.org/data/2.5/forecast';
const OWM_API_KEY = 'a1887fc3709f4c14884b6e016a16aea8';

// Ughhhh. Hate self. Why Cheesoid exist.
const OWM_FORECAST_URL = OWM_API_BASEURI + '?id=' + OWM_CITY_ID + '&APPID=' + OWM_API_KEY;

// const fakedata = {'city':{'id':2643743,'name':'London','coord':{'lon':-0.12574,'lat':51.50853},'country':'GB','population':0,'sys':{'population':0}},'cod':'200','message':0.1677,'cnt':40,'list':[{'dt':147691;


const cachedFetch = (url, options) => {
    let cacheKey = url;
    let cached = localStorage.getItem(cacheKey);

    if (cached !== null) {
        let response = new Response(new Blob([cached]));
        return Promise.resolve(response);
    }

    return fetch(url, options).then(response => {
        if (response.status === 200) {
            let ct = response.headers.get('Content-Type');

            if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
                response.clone().text().then(content => {
                    localStorage.setItem(cacheKey, content);
                });
            }
        }

        return response;
    });
};


export default function() {
    return cachedFetch(OWM_FORECAST_URL)
        .then(r => r.json())
        .then(j => (
            {
                city: j.city.name,
                forecasts: fiveDayForecast(j.list)
            }
        )
    );
}

// export default function() {
//     let forecast;

//     if (localStorage.fiveDayForecast === undefined) {
//         forecast = fetch(OWM_FORECAST_URL).then(function(res) {
//             return res.json();
//         }).then(function(data) {
//             forecast = new FiveDayForecast(data);
//             // localStorage.fiveDayForecast = JSON.stringify(data);
//             localStorage.fiveDayForecast = JSON.stringify(forecast);
//             console.warn('API:', forecast);
//             return forecast;
//         });
//     } else {
//         forecast = new FiveDayForecast(
//             JSON.parse(localStorage.fiveDayForecast)
//         );

//     }

//     return forecast;

