import Subject from "../weatherdata/subject";
import DisplayElement from "./display";
import Observer from "./observer";

export default class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number;
  private lastPressure: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.currentPressure = 29.92;
    this.lastPressure = 0;
    this.weatherData.registerObservers(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  public display(): void {
    let msg = "Forecast: ";
    if (this.currentPressure > this.lastPressure) {
      msg += "Improving weather on the way!";
    } else if (this.currentPressure == this.lastPressure) {
      msg += "More of the same";
    } else {
      msg += "Watch out for cooler, rainy weather";
    }

    console.log(msg);
  }
}
