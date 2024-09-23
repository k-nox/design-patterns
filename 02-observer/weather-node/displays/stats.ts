import Subject from "../weatherdata/subject";
import DisplayElement from "./display";
import Observer from "./observer";

export default class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number;
  private minTemp: number;
  private tempSum: number;
  private numReadings: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObservers(this);
    this.maxTemp = 0;
    this.minTemp = 200;
    this.tempSum = 0;
    this.numReadings = 0;
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  public display(): void {
    console.log(
      `Avg/Max/Min temperatures = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`
    );
  }
}
