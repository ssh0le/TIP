const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
  };
  
  console.log(shape.diameter(), shape.perimeter());

  console.log(typeof new Number(0));