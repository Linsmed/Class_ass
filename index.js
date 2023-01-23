class rectangle {
  constructor(height, width, length) {
    this.height = height;
    this.width = width;
    this.height = height;
    this.calcArea = function () {
      return this.height * this.width;
    };
    this.calcPerimeter = function () {
      return (this.height + this.width) * 2;
    };
  }
}
let rectang = new rectangle(10, 15);
let area = rectang.calcArea();
let perimeter = rectang.calcPerimeter();
console.log(area, perimeter);
