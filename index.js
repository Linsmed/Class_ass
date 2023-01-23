class rectangle {
  constructor(length, height, breadth) {
    this.length = length;
    this.height = height;
    this.breadth = breadth;
  }
  areaRectangle(length, breadth) {
    let area = length * breadth;
    return area;
  }
  perimeterRectangle(length, breadth) {
    perimeter = 2 * (length + breadth);
    return perimeter;
  }
}
let rectangle = new rectangle(10, 20, 15);
console.log(rectangle.perimeterRectangle());
