import { FlyBehaviour } from "../fly/behaviour";
import { QuackBehaviour } from "../quack/behaviour";

export abstract class Duck {
  flyBehaviour: FlyBehaviour;
  quackBehaviour: QuackBehaviour;

  constructor(fb: FlyBehaviour, qb: QuackBehaviour) {
    this.flyBehaviour = fb;
    this.quackBehaviour = qb;
  }

  abstract display(): void;

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }
}
