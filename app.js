function createInstructor(firstName, lastName) {
    return {
    firstName,
    lastName,
  }
    
}

let favoriteNumber = 42;

const instructor = {
    firstName: "Mary",
    [favoriteNumber]: "That is my favorite!"
}

const myInstructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

const d = createAnimal("dog","bark","Wooof!")

const s = createAnimal("sheep","bleet","BAAAAaaaa")

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }




