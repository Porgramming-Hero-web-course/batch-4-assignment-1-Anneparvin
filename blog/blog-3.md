<!-- 3..Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
 -->

 By using type guards, you can narrow down the type of a variable or expression to a more specific type, which can help you catch errors before they occur. There are several types of type guards in TypeScript, including type predicates, typeof guards, and instanceof guards.

  #Here is an example:

function processPrimitive(value: any) {
  if (typeof value === 'number') {
    // value is now a number
    console.log(value.toFixed(2));
  } else if (typeof value === 'string') {
    // value is now a string
    console.log(value.toUpperCase());
  }
}

    #Types of Type Guards:
1..typeof Type Guard: Used for primitive types like number, string, boolean.


function printLength(value: string | number) {
    if (typeof value === 'string') {
        console.log(value.length); // Safe to access .length on a string
    }
}

2..instanceof Type Guard: Used to check if an object is an instance of a class.

class Dog {
    bark() { console.log('Woof'); }
}

function petSound(pet: Dog | string) {
    if (pet instanceof Dog) {
        pet.bark(); // Safe to call bark() on Dog
    }
}

3..Custom Type Guards: Functions that return a type predicate.

function isString(value: any): value is string {
    return typeof value === 'string';
}

function print(value: string | number) {
    if (isString(value)) {
        console.log(value.toUpperCase()); // Safe for string
    }
}

Conclusion:
Type guards help TypeScript distinguish between types during runtime, ensuring safer and more predictable code.






