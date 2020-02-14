function Programmer(_name, _job, _age, _lang){
    this.name = _name;
    this.job = _job;
    this.age = _age;
    this.lang = _lang;
    this.printDetails = function(){
        console.log(`-*-*-*-*-*-*-*-*-*-*-*-*`);
        console.log(`Name: ${this.name}`);
        console.log(`Job: ${this.job}`);
        console.log(`Age: ${this.age}`);
        console.log(`Lang: ${this.lang}`);
        console.log(`-*-*-*-*-*-*-*-*-*-*-*-*`);
    };
};

let prog = new Programmer("Bob", "Surfer", 22, "Elixir");
prog.printDetails();