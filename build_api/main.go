package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/lottos/next-numbers", lottoHandler)
	http.HandleFunc("/olympic/next-countries", olympicHandler)

	port := ":3000"
	fmt.Println("server is listening on", port)
	http.ListenAndServe(port, nil)
}

func lottoHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	jsonData, _ := json.Marshal(nextItemsMap(Lotto{}))
	// box := Box{ItemHolder: Lotto{}}
	// jsonData, _ := json.Marshal(
	// 	map[string][]string{
	// 		"items": box.FindTopDuplicates(10),
	// 	},
	// )

	w.Header().Add("Content-Type", "application/json")
	w.Write([]byte(jsonData))
}

func olympicHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	jsonData, _ := json.Marshal(nextItemsMap(Olympic{}))
	// box := Box{ItemHolder: Olympic{}}
	// jsonData, _ := json.Marshal(
	// 	map[string][]string{
	// 		"items": box.FindTopDuplicates(10),
	// 	},
	// )

	w.Header().Add("Content-Type", "application/json")
	w.Write([]byte(jsonData))
}

func nextItemsMap[H ItemHolder](holder H) map[string][]string {
	box := Box{ItemHolder: holder}
	return map[string][]string{
		"items": box.FindTopDuplicates(10),
	}
}
