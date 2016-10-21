import * as kelvinator from '../kelvinator';

describe('When converting Kelvin to Fahrenheit or Celsius', () => {
    const aLittleTooHot = 303.15;

    it('should convert to celsius correctly', () => {
        expect(kelvinator.kelvinToCelsius(aLittleTooHot)).toBeCloseTo(30, 0);
    });

    it('should to fahrenheit correctly', () => {
        expect(kelvinator.kelvinToFahrenheit(aLittleTooHot)).toBeCloseTo(86, 0);
    });

});
