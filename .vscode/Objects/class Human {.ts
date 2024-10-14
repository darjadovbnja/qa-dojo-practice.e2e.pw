class Human {
    private weight: number;
    private age: number;
    private sex: string;
    protected eyeColor: string;
    protected hairColor: string;
    constructor (weight, age, sex, eyeColor, hairColor){
        this.weight = weight;
        this.age = age;
        this.sex = sex;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }

    walk() {
        console.log(`I am ${this.age} years old and I can run`);
    }
    run(){
        console.log('I can walk');
    }
    take() {
        console.log('I can take off');
    }
    squat(){
        console.log('I  can make squat');
        
    }




}