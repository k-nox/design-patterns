package weatherdata

import (
	"slices"

	"github.com/k-nox/design-patterns/02-observer/weather-go/observer"
)

type WeatherData struct {
	observers []observer.Observer
	temp float32
	humidity float32
	pressure float32
}

func New() *WeatherData {
	return &WeatherData{
		observers: []observer.Observer{},
	}
}

func (w *WeatherData) RegisterObserver(o observer.Observer) {
	w.observers = append(w.observers, o)
}

func (w *WeatherData) RemoveObserver(o observer.Observer) {
	i := slices.Index(w.observers, o)
	if i >= 0 {
		w.observers = slices.Delete(w.observers, i, i+1)
	}
}

func (w *WeatherData) NotifyObservers() {
	for _, o := range w.observers {
		o.Update(w.temp, w.humidity, w.pressure)
	}
}

func (w *WeatherData) measurementsChanged() {
	w.NotifyObservers()
}

func (w *WeatherData) SetMeasurements(temp float32, humidity float32, pressure float32) {
	w.temp = temp
	w.humidity = humidity
	w.pressure = pressure
	w.measurementsChanged()
}


