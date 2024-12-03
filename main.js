
/* --- Task 1 --- */ 

const myCat = {
    color: "black", //using Amercian sp as it matches example, and in CSS color property utilises Amercian sp
    name: "Tony",
    lovesCuddles: true,
};

const myHouse = {
    stories: 2,
    parking: null,
    bedrooms: 2,
    garden: true,
    energyRating: "D"
};

const myCar = {
    color: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    milesPerGallon: 20
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: 2008,
    leadActor: "Christian Bale"
};

/* --- Task 2 --- */ 

let person = {
    name: "Ben",
    likesChocolate: false, //changed the value to false to check the if statement starting at line 41 works, and as part of the exercise request
};

console.log(person.likesChocolate);

if (person.likesChocolate === true) {
    console.log(`${person.name} loves Chocolate`);
}
else {
    console.log(`${person.name} hates Chocolate`);
}

/* --- Task 3 --- */

let desiredPleasantry = "farewell"; //changed from 'greeting' as requested in the exercise

let bensPhrases = {
    greeting: "Well hello there!",
    farewell: "See you in another life, brother",
    smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"]);

console.log(bensPhrases[desiredPleasantry]); 

/* --- Task 4 --- */

let me = {
    firstName: "firstName",
    lastName: "lastName",
    isBootcamper: false,
};

me.isBootcamper = true;
// console.log(me); //to test the object changes

/* --- Task 5 --- */

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

 let commsText = communication.payload.message.text;

 if (communication.payload.message.priority === "URGENT") {
        console.log(commsText); 
        // No else statement needed, if the condition is not true nothing will happen
 }

 /* --- Task 6 --- */

// FFXI Bestiary Example

let mandragora = {
    type: "Plantoids",
    subfamilies: ["Korrigan", "Lycopodium", "Pachypodium", "Adenium", "Seed"],
    behaviour: {
        commonBehaviour: ["Links", "Detect by Sound"],
        uncommonBehaviour: ["Aggressive"],
    },
    weakAgainst: ["Fire", "Wind", "Lightning", "Darkness", "Ice", "Piercing Weapons"],
    strongAgainst: ["Light"],
    jobs: {
        commonJobs: ["Monk"],
        uncommonJobs: ["Black Mage", "Red Mage", "White Mage"],
    },
    traits: ["Resist Charm", "Guard", "Counter"],
    charmable: true,
    pankration: true,
    aspir: false,
    drain: true,
}

// Example property access
console.log(mandragora.behaviour.uncommonBehaviour)
console.log(mandragora.aspir)

function showAllWeaknesses(monsterFamily){
    for (i = 0; i < monsterFamily.weakAgainst.length; i ++){
        console.log(monsterFamily.weakAgainst[i]);
    }
}

// Function Test
showAllWeaknesses(mandragora);