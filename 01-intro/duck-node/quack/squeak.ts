import { QuackBehaviour } from "./behaviour";

export class Squeak implements QuackBehaviour {
  quack(): void {
    console.log("Squeak");
  }
}
