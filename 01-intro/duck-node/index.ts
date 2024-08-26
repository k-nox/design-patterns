import { Duck } from "./duck/duck";
import { MallardDuck } from "./duck/mallard";
import { ModelDuck } from "./duck/model";
import { FlyRocketPowered } from "./fly/rocket-powered";

class MiniDuckSimulator {
  static simulate(): void {
    const mallard: Duck = new MallardDuck();
    mallard.display();
    mallard.performFly();
    mallard.performQuack();
    mallard.swim();

    const model: Duck = new ModelDuck();
    model.display();
    model.performFly();
    model.performQuack();
    model.swim();
    model.setFlyBehaviour(new FlyRocketPowered());
    model.performFly();
  }
}

MiniDuckSimulator.simulate();
