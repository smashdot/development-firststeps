package main

type Olympic struct{}

func (o Olympic) Items() []string {
	return readFile("olympic_countries.txt")
}
