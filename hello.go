package main

import "fmt"

func sum(a int, b int) int {
	return a + b
}

func main() {
	{
		fmt.Println("Hello Golang")
		rs := sum(1, 2)
		fmt.Println(rs)
	}
}
