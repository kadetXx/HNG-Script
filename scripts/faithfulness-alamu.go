/*Run with: go run faithfulness-alamu.go*/
package main

import "fmt"

const (
	outformat = "Hello World, this is %s with HNGi7 ID %s using %s for stage 2 task\n"
	name      = "Faithfulness Alamu"
	id        = "thealamu"
	language  = "golang"
)

func main() {
	fmt.Printf(outformat, name, id, language)
}
