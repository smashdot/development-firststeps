package main

type Lotto struct{}

func (l Lotto) Items() []string {
	items := readFile("lottos.txt")

	result := []string{}
	for _, v := range items {
		// only last 2 digit
		result = append(result, v[len(v)-2:])
	}
	return result
}
