import CurrentConditionsDisplay from "./displays/current";
import ForecastDisplay from "./displays/forecast";
import StatisticsDisplay from "./displays/stats";
import WeatherData from "./weatherdata/weatherdata";

class WeatherStation {
  static run(): void {
    const weatherData = new WeatherData();
    const currentConditions = new CurrentConditionsDisplay(weatherData);
    const stats = new StatisticsDisplay(weatherData);
    const forecasat = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}

WeatherStation.run();
