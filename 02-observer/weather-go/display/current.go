package display

import (
	"fmt"

	"github.com/k-nox/design-patterns/02-observer/weather-go/observer"
)

type CurrentConditions struct {
	temperature float32
	humidity float32
	weatherData observer.Subject
}

func (c *CurrentConditions) Update(temp float32, humidity float32, pressure float32) {
	c.temperature = temp
	c.humidity = humidity
	c.Display()
}

func (c *CurrentConditions) Display() {
	fmt.Printf("Current conditions: %.2fF degrees and %.2f%% humidity\n", c.temperature, c.humidity)
}

func NewCurrentConditions(wd observer.Subject) *CurrentConditions {
	cc := &CurrentConditions{
		weatherData: wd,
	}

	wd.RegisterObserver(cc)
	return cc
}
