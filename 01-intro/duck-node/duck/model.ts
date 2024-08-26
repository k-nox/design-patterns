import { FlyNoWay } from "../fly/no-way";
import { MuteQuack } from "../quack/mute";
import { Duck } from "./duck";

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  display(): void {
    console.log("I'm a model duck");
  }
}
