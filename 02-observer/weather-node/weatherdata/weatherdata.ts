import Observer from "../displays/observer";
import Subject from "./subject";

export default class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  public registerObservers(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObservers(): void {
    for (const o of this.observers) {
      o.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanges(): void {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanges();
  }
}
