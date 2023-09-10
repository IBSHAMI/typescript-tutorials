// what is Type annotation?
// Type annotation is a code we add to tell Typescript what type of value a variable will refer to.
// Type inference is Typescript's way of predicting what type of value a variable will refer to.

// The main difference between type annotation and type inference is that
// type annotation is a type we (the developers) declare and
// type inference is Typescript's way of predicting the type of a value for us.

// ----------------- Type annotations examples --->
// 1. annotation / variables.ts

// Type inference:
// If the value delcration and initialization are on the same line, Typescript will figure out the type of 'color' for us.
// Therefore, we don't need to add type annotation.

// let color = 'red'; --> type inference: color is a string

// If declaration and initialization are on different lines, we need to add type annotation.
// let color; --> type inference: color is any


