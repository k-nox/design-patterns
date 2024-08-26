package fly

import "fmt"

type Fly func()

func WithWings() {
	fmt.Println("I'm flying!")
}

func NoWay() {
	fmt.Println("I can't fly")
}

func RocketPowered() {
	fmt.Println("I'm flying with a rocket!")
}
