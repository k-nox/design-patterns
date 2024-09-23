import Subject from "../weatherdata/subject";
import DisplayElement from "./display";
import Observer from "./observer";

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement
{
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData.registerObservers(this);
  }

  public update(temp: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.temperature = temp;
    this.display();
  }

  public display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity.`
    );
  }
}
