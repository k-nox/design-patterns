package quack

import "fmt"

type Quack func()

func Typical() {
	fmt.Println("Quack!")
}

func Squeak() {
	fmt.Println("Squeak!")
}

func Mute() {
	fmt.Println("<< Silence >>")
}