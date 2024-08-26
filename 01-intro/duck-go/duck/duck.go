package duck

import (
	"fmt"

	"github.com/k-nox/design-patterns/01-intro/duck-go/fly"
	"github.com/k-nox/design-patterns/01-intro/duck-go/quack"
)

type Duck interface {
	Swim()
	Display()
	PerformFly()
	PerformQuack()
	SetFlyBehaviour(fb fly.Fly)
	SetQuackBehaviour(qb quack.Quack)
}

type baseDuck struct {
	fly fly.Fly
	quack quack.Quack
	displayMessage string
}

func (b *baseDuck) Swim() {
	fmt.Println("All ducks float, even decoys!")
}

func (b *baseDuck) Display() {
	fmt.Println(b.displayMessage)
}

func (b *baseDuck) SetFlyBehaviour(fb fly.Fly) {
	b.fly = fb
} 

func (b *baseDuck) SetQuackBehaviour(qb quack.Quack) {
	b.quack = qb
}

func (b *baseDuck) PerformFly() {
	b.fly()
}

func (b *baseDuck) PerformQuack() {
	b.quack()
}

type Mallard struct {
	baseDuck
}

func NewMallard() Duck {
	return &Mallard{
		baseDuck{
			fly: fly.WithWings,
			quack: quack.Typical,
			displayMessage: "I'm a real Mallard duck",
		},
	}
}

type Model struct {
	baseDuck
}

func NewModel() Duck {
	return &Model{
		baseDuck{
			fly: fly.NoWay,
			quack: quack.Mute,
			displayMessage: "I'm a model duck",
		},
	}
}
