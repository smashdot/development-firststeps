package main

import "testing"

type Case struct {
	input  []string
	result []string
}

func TestTopDuplicates(t *testing.T) {
	cases := []Case{
		{
			input:  []string{"123", "123", "456", "456", "789", "456"},
			result: []string{"456"},
		},
		{
			input:  []string{"123", "123", "456", "456"},
			result: []string{"123", "456"},
		},
	}

	for _, v := range cases {
		result := topDuplicates(v.input)
		if !slicesEqual(result, v.result) {
			t.Fatalf("expected to be %v but got %v", v.result, result)
		}
	}
}

func slicesEqual(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}
