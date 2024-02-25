class Persons {
    name: string;
    age: number;
    hobbies: string[];
    constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

}

introduce(): string {
    return `Hi, I'm ${this.name'} and I'm $
    this.age  years old. I love ${this.hobbies.join(",")}`;
    }
    ｝

}

class Students extends Persons {
    grade:
    number;
    constructor (name: string, age: number, hobbies: string[l, grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
    }

    introduce(): string {
        return
        • ${super.introduce()} .I am in grade ${this.grade};
    }
}