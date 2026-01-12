let nouns = ["Woman", "Girl", "House", "Woods","Knife", "Book", "Shack", "Death", "Murder", "Murderer", "Case", "Patient", "Crime", "Man", "Night", "Dark", "Couple", "Wolf", "Tree", "Devil", "Water", "Gun", "Bullet", "Apartment", "Forest", "Blood", "Tenant", "One", "Lie", "Place", "Guest", "Season", "Cabin", "Mystery", "Game","Room", "Her", "Bones", "Eye", "Lodge"];

let adjectives = ["Missing", "Found", "Lost", "Dark", "Deep", "Secret", "Gone", "Dead", "Silent", "Good", "Young", "Perfect", "Deep", "Quiet", "Dark", "Lying", "Broken", "Found", "Unwelcome", "Taken", "Cold", "Alone", "Hidden", "Small", "Cursed", "Strange"];

let verbs = ["Survive", "Die", "Vanishing", "Vanished", "Vanish", "Remember", "Find", "Kill"];

let image = ['coast.jpg', 'fog.jpg', 'hallway.jpg', 'rain.jpg', 'road.jpg', 'snow.jpg'];

let textColors = ['white', 'rgb(245, 58, 58)', 'greenyellow', 'magenta'];

let randomTitle = Math.floor(Math.random()*8);

let bookCover = document.getElementById("book-cover");

let titleText = document.getElementById("title-text");

bookCover.style.backgroundImage = "url(" + "'" + image[Math.floor(Math.random()*image.length)] + "'" + ")";

bookCover.style.color = textColors[Math.floor(Math.random()*textColors.length)];
bookCover.style.backgroundImage = "url(" + image[Math.floor(Math.random()*image.length)]+ "(;";

function randomize(){
    randomTitle = Math.floor(Math.random()*8);
    console.log("click");

//random title    
if (randomTitle == 0){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 1){
    titleText.innerHTML = "The " + adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 2){
    titleText.innerHTML = verbs[Math.floor(Math.random()*verbs.length)] + " the " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 3){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 4){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " of the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 5){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " across the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 6){
    titleText.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)] + " and " + adjectives[Math.floor(Math.random()*adjectives.length)];
}

if (randomTitle == 7){
    titleText.innerHTML = "A " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}

console.log(titleText);

let randomImage = image[Math.floor(Math.random()*image.length)];

bookCover.style.backgroundImage = "url(" + "'" + randomImage + "'" + ")";

bookCover.style.color = textColors[Math.floor(Math.random()*textColors.length)];

};


//different structures

// if (randomTitle == 0){
//     bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
// }
// if (randomTitle == 1){
//     bookCover.innerHTML = "The " + adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)];
// }
// if (randomTitle == 2){
//     bookCover.innerHTML = verbs[Math.floor(Math.random()*verbs.length)] + " the " + nouns[Math.floor(Math.random()*nouns.length)];
// }

// if (randomTitle == 3){
//     bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)];
// }

// if (randomTitle == 4){
//     bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " of the " + nouns[Math.floor(Math.random()*nouns.length)];
// }

// if (randomTitle == 5){
//     bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " across the " + nouns[Math.floor(Math.random()*nouns.length)];
// }

// if (randomTitle == 6){
//     bookCover.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)] + " and " + adjectives[Math.floor(Math.random()*adjectives.length)];
// }

// if (randomTitle == 7){
//     bookCover.innerHTML = "A " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
// }

if (randomTitle == 0){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 1){
    titleText.innerHTML = "The " + adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 2){
    titleText.innerHTML = verbs[Math.floor(Math.random()*verbs.length)] + " the " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 3){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 4){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " of the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 5){
    titleText.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " across the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 6){
    titleText.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)] + " and " + adjectives[Math.floor(Math.random()*adjectives.length)];
}

if (randomTitle == 7){
    titleText.innerHTML = "A " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}