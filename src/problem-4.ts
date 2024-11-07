{
    // problem-4
    // question: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape : "circle";
    radius: number;
}

type Rectangle = {
    shape : "rectangle";
    width : number;
    height : number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape) : number {
    return shape.shape === "circle"
    ? parseFloat((Math.PI * shape.radius ** 2).toFixed(2))
    :shape.width * shape.height;
}

const circleArea = calculateShapeArea({shape: "circle", radius: 5});
console.log(circleArea);

}