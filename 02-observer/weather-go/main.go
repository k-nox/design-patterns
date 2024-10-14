package main

import (
	"github.com/k-nox/design-patterns/02-observer/weather-go/display"
	"github.com/k-nox/design-patterns/02-observer/weather-go/weatherdata"
)

func main() {
	wd := weatherdata.New()
	_ = display.NewCurrentConditions(wd)
	_ = display.NewForecast(wd)	
	_ = display.NewStats(wd)

	wd.SetMeasurements(80, 65, 30.4)
	wd.SetMeasurements(82, 70, 29.2)
	wd.SetMeasurements(78, 90, 29.2)
}