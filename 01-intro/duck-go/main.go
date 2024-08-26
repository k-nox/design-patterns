package main

import (
	"fmt"

	"github.com/k-nox/design-patterns/01-intro/duck-go/duck"
	"github.com/k-nox/design-patterns/01-intro/duck-go/fly"
)

func main() {
	mallard := duck.NewMallard()
	mallard.Display()
	mallard.PerformQuack()
	mallard.PerformFly()
	mallard.Swim()

	fmt.Println("---")

	model := duck.NewModel()
	model.Display()
	model.PerformQuack()
	model.PerformFly()
	model.Swim()

	model.SetFlyBehaviour(fly.RocketPowered)
	model.PerformFly()
}