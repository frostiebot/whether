Five Day Forecast (For London)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
and then subsequently was "ejected" due to needing more flexibility.

Demo (if DNS actually works today): http://whether.harml.us

## Install

Just like most other node-based projects, run:

## `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

Deploys the app to to github pages<br>
Note that doing so causes github to "forget" the custom domain mapping
I have set up to allow non-ssl connections to work for OWM's crappy API.

So, basically, please don't deploy. I don't think you can anyway.

COME AT ME, BRO!

## Notes

Even though it helped quite a bit, using create-react-app kinda shot
me in both feet. It's great that tools like that exist, but adding
additional "basic" features (such as Sass support) was made more
complex due to the way the bootstrapped app hid away the "scary"
configuration.

Another weird decision that threw me off was the total lack of directory
structure for the skeleton app... Surely nobody would actually just
write their app + all supporting code straight under src? Weird.

Having to manually polyfill `window.localStorage` and `window.sessionStorage`
for Jest seemed crazy - surely all go-getting developers would be likely
to use such "basic" features of the browser in their apps and adding
mocks out-of-the-box for them would have made sense? Again. Weird.
