import Observer from "../displays/observer";

export default interface Subject {
  registerObservers(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}
