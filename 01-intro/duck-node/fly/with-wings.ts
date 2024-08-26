import { FlyBehaviour } from "./behaviour";

export class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying!!");
  }
}
