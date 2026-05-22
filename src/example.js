// This file intentionally contains linting violations to demonstrate the workflow.

var unusedVariable = "this variable is never used"
const message = "hello world"

function greet(name) {
    console.log("Greeting: " + name)
    return "Hi " + name
}

greet("world")
