import { cachedFetch, fiveDayForecast } from '../util';

// OWM API Only supports insecure requests? Christ they're dumb.
const OWM_API_BASEURI = 'http://api.openweathermap.org/data/2.5/forecast';

// London, United Kingdom. Cheated by just finding the id in the
// massive city.list.json from OWM
const OWM_CITY_ID = 2643743;

// Do not like having my API key in here, but it's good for now.
const OWM_API_KEY = 'a1887fc3709f4c14884b6e016a16aea8';

// Oh snap. JS has string templates now?
const OWM_FORECAST_URL = `${OWM_API_BASEURI}`
    + `?id=${OWM_CITY_ID}`
    + `&APPID=${OWM_API_KEY}`;


export const getFiveDayForecast = () => {
    // If we ever make more than one possible interface to the OWM
    // api, this will be moved out to a separate module.
    return cachedFetch(OWM_FORECAST_URL)
        .then(r => r.json())
        .then(j => (
            {
                city: j.city.name,
                forecasts: fiveDayForecast(j.list)
            }
        )
    );
};
