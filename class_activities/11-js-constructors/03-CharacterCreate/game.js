function Character(_name, _profession, _gender, _age, _strength, _hp) {
    this.name = _name;
    this.profession = _profession;
    this.gender = _gender;
    this.age = _age;
    this.strength = _strength;
    this.hp = _hp;
    this.printStats = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Profession: ${this.profession}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Age: ${this.age}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`HP: ${this.hp}`);
        console.log("---------------------------");
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log(`${this.name} is alive!`);
            console.log("---------------------------");
        } else {
            console.log(`${this.name} is dead!`);
            console.log("---------------------------");
        }
    };
    this.attack = function (character) {
        character.hp -= this.strength;
        console.log(`HP: ${this.name} attacked ${character.name} for ${this.strength} HP!`);
        console.log("---------------------------");
    };
    this.levelUp = function () {
        this.age++;
        this.strength += 5;
        this.hp += 25;
        console.log(`${this.name} leveled up!`);
        console.log("---------------------------");
    };
};

let firstDude = new Character("Bob", "Plumber", "Male", 22, 25, 75);
let secondDude = new Character("Jimmy", "Mechanic", "Male", 22, 20, 100);

firstDude.printStats();
secondDude.printStats();

firstDude.attack(secondDude);

firstDude.printStats();
secondDude.printStats();

firstDude.isAlive();
secondDude.isAlive();

secondDude.levelUp();
secondDude.printStats();