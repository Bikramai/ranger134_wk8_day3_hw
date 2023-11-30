class Circle{
    constructor(public radius: number){}
}


class Square{
    constructor(public length: number){}
}


class Star {
    constructor(public length: number){}
}

export {Circle, Square, Star}
// in order for files to access any classes/functions/varaibles from other files
// those objects need to be exported