import { QuackBehaviour } from "./behaviour";

export class MuteQuack implements QuackBehaviour {
  quack(): void {
    console.log("<< Silence >>");
  }
}
