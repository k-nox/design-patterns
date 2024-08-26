import { FlyWithWings } from "../fly/with-wings";
import { Quack } from "../quack/quack";
import { Duck } from "./duck";

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'm a Mallard Duck");
  }
}
