"use strict";
{
    function calculateShapeArea(shape) {
        return shape.shape === "circle"
            ? parseFloat((Math.PI * shape.radius ** 2).toFixed(2))
            : shape.width * shape.height;
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
}
