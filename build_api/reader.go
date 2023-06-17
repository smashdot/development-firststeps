package main

import (
	"bufio"
	"os"
)

func readFile(path string) []string {
	file, _ := os.Open(path)
	defer file.Close()

	scanner := bufio.NewScanner(file)
	result := []string{}
	for scanner.Scan() {
		text := scanner.Text()
		if text == "" {
			continue
		}
		result = append(result, text)
	}
	return result
}
