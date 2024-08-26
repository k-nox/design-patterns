import { FlyBehaviour } from "./behaviour";

export class FlyRocketPowered implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying with a rocket!");
  }
}
