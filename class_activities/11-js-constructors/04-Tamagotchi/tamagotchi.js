function DigitalPal(_hungry = false, _sleepy = false, _bored = true, _age = 0) {
    this.hungry = _hungry;
    this.sleepy = _sleepy;
    this.bored = _bored;
    this.age = _age;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " old!")
    }
};

let dog = new DigitalPal();
dog.outside = false;

dog.bark = function () {
    console.log("Woof! Woof!");
};

dog.goOutside = function () {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};

dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
}

dog.play()
dog.feed();
dog.goOutside();
dog.goInside();
dog.sleep();
dog.bark();

let cat = new DigitalPal();

cat.houseCondition = "100";

cat.meow = function () {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
}

cat.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};


// * Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

// * BONUS: Make it so your Tamagotchis run off of user-input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.