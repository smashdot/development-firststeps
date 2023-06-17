package main

type ItemHolder interface {
	Items() []string
}

type Box struct {
	ItemHolder
}

func (b Box) FindTopDuplicates(limit int) []string {
	td := topDuplicates(b.Items())
	return td
}

// input: ["123", "123", "456",  "456", "789", "456"]
// result: ["456"]

// input: ["123", "123", "456",  "456"]
// result: ["123", "456"]
func topDuplicates(items []string) []string {

	mapping := map[string]int{}
	for _, v := range items {
		mapping[v] = mapping[v] + 1
	}

	maxCount := 0
	for _, v := range mapping {
		if v > maxCount {
			maxCount = v
		}
	}

	result := []string{}
	for k, v := range mapping {
		if v == maxCount {
			result = append(result, k)
		}
	}

	return result
}
