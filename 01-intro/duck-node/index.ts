import { Duck } from "./duck/duck";
import { MallardDuck } from "./duck/mallard";

class MiniDuckSimulator {
  static simulate(): void {
    const mallard: Duck = new MallardDuck();
    mallard.display();
    mallard.performFly();
    mallard.performQuack();
    mallard.swim();
  }
}

MiniDuckSimulator.simulate();
