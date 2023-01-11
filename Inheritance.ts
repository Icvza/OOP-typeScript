abstract class Animal {
    public spineStatus: boolean;

    constructor(spine: boolean) {
        this.spineStatus = spine;
    }
}

class Vertebrates extends Animal{
    constructor(spine: boolean) {
        super(spine);
    }
    public hasSpine(){
        true
    }
}

class Invertebrates extends Animal {
    constructor(spine: boolean) {
        super(spine);
    }
}

class WarmBlodeed extends Vertebrates {
    constructor() {
        super(true);
    }
}

class Humans extends WarmBlodeed {
    public name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}

let isaac  = new Humans('isaac')

console.log(isaac) // Humans { spineStatus: true, name: 'isaac' }