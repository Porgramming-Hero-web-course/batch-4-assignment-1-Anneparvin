<!-- 1/..The significance of union and intersection types in Typescript. -->

Answer: 
    #Union Type
A union type in TypeScript allows a variable to have one of several types. It is represented using the | operator.
Example: type Animal = "Dog" | "Cat" | "Bird";
In this example, a variable of type Animal can have the value "Dog", "Cat", or "Bird".

    #Intersection Type
An intersection type combines multiple types into a single type, representing the combination of all types. It is represented using the & operator.
Example: type Person = { name: string } & { age: number };
In this example, a variable of type Person must have both a name property of type string and an age property of type number.

More Example:
    #Union Type
type FrontendDeveloper = 'SeniorDev'|'juniorDev'

const newDeveloper : FrontendDeveloper = 'juniorDev'

Summary: The FrontendDeveloper type is a union of two possible values, and newDeveloper is correctly assigned one of those values.



    #Intersection Type
type FrontendDeveloper = {
    skills: string[],
    designation1: 'FrontendDeveloper'
}
type BackendDeveloper = {
    skills: string[],
    designation2: 'BackendDeveloper'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
    
const fullStackDeveloper : FullStackDeveloper = {
    skills: ['HTML', "Js", "Express"],
    designation1:'FrontendDeveloper',
    designation2:'BackendDeveloper'
}

Summary : An intersection type combines properties from multiple types. Here, FullStackDeveloper has properties from both FrontendDeveloper and BackendDeveloper. The variable fullStackDeveloper must include all properties from both types: skills, designation1, and designation2. This is valid because it meets all requirements.

