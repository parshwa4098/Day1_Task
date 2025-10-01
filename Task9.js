
// Make a function which takes an object with key:"shape" and the measurement of the shapes (radius, height,length, ...etc),
// and the key : "value" which we have to find - (area, parameter)
// shapes can be - (square, rectangle, triangle, circle)
// the function should check the shape and return the area of the shape with the provided values, show an error if the given object doesnt have proper measurements - example if the shape is circle, and radius isnt given, show an error
// EXAMPLE :
// getValue({
// shape:"circle",
// value:"area",
// radius:10
// })
// Output should be area of circle with radius 10
function getValue(obj) {
  if (obj.shape === 'circle' && obj.value === 'area') {
    if (!obj.radius)
         return 'Error: Radius required';
        
    return Math.PI * obj.radius * obj.radius;
  }
  
  

  return 'Error: Invalid shape or value';
}

console.log(getValue({ shape: 'circle', value: 'area', radius:10}));
