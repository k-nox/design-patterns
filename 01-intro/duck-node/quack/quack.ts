import { QuackBehaviour } from "./behaviour";

export class Quack implements QuackBehaviour {
  quack(): void {
    console.log("Quack");
  }
}
