package display

import (
	"fmt"

	"github.com/k-nox/design-patterns/02-observer/weather-go/observer"
)

type Forecast struct {
	currentPressure float32
	lastPressure float32
	weatherData observer.Subject
}

func (f *Forecast) Update(temp float32, humidity float32, pressure float32) {
	f.lastPressure = f.currentPressure
	f.currentPressure = pressure
	f.Display()
}

func (f *Forecast) Display() {
	fmt.Print("Forecast: ")
	if f.currentPressure > f.lastPressure {
		fmt.Println("Improving weather on the way!")
	} else if f.currentPressure == f.lastPressure {
		fmt.Println("More of the same")
	} else {
		fmt.Println("Watch out for cooler, rainy weather")
	}
}

func NewForecast(wd observer.Subject) *Forecast {
	f := &Forecast{
		currentPressure: 29.92,
		weatherData: wd,
	}

	wd.RegisterObserver(f)
	return f
}