
abstract class Shape {
    public color: string;
    constructor(color: string) {
        this.color = color;
    }

    public abstract getArea(): number;
}

class Circle extends Shape {
    private radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    private side: number;
    constructor(color: string, side: number) {
        super(color);
        this.side = side;
    }

    public getArea(): number {
        return this.side * this.side;
    }
}
