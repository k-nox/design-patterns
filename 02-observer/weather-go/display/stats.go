package display

import (
	"fmt"

	"github.com/k-nox/design-patterns/02-observer/weather-go/observer"
)

type Statistics struct {
	maxTemp float32
	minTemp float32
	tempSum float32
	numReadings int
	weatherData observer.Subject
}

func (s *Statistics) Update(temp float32, humidity float32, pressure float32) {
	s.tempSum += temp;
	s.numReadings++;
	if temp > s.maxTemp {
		s.maxTemp = temp;
	}

	if temp < s.minTemp {
		s.minTemp = temp;
	}

	s.Display()
}

func (s *Statistics) Display() {
	fmt.Printf("Avg/Max/Min temperatures: %.2f/%.2f/%.2f\n", s.tempSum / float32(s.numReadings), s.maxTemp, s.minTemp)
}

func NewStats(wd observer.Subject) *Statistics {
	s := &Statistics{
		minTemp: 200,
		weatherData: wd,
	}

	wd.RegisterObserver(s)
	return s
}