let nouns = ["Woman", "Girl", "House", "Woods","Knife", "Book", "Shack", "Death", "Murder", "Murderer", "Case", "Patient", "Crime", "Man", "Night", "Dark", "Couple", "Wolf", "Tree", "Devil", "Water", "Gun", "Bullet", "Apartment", "Forest", "Blood", "Tenant", "One", "Lie", "Place", "Guest", "Season", "Cabin", "Mystery"];

let adjectives = ["Missing", "Found", "Lost", "Dark", "Deep", "Secret", "Gone", "Dead", "Silent", "Good", "Young", "Perfect", "Deep", "Quiet", "Dark", "Lying", "Broken", "Found"];

let verbs = ["Survive", "Die", "Vanishing", "Vanished", "Vanish", "Remember", "Find"];

let randomTitle = Math.floor(Math.random()*8);

let bookCover = document.getElementById("book-cover");

if (randomTitle == 0){
    bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 1){
    bookCover.innerHTML = "The " + adjectives[Math.floor(Math.random()*adjectives.length)] + " " + nouns[Math.floor(Math.random()*nouns.length)];
}
if (randomTitle == 2){
    bookCover.innerHTML = verbs[Math.floor(Math.random()*verbs.length)] + " the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 3){
    bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 4){
    bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " of the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 5){
    bookCover.innerHTML = "The " + nouns[Math.floor(Math.random()*nouns.length)] + " across the " + nouns[Math.floor(Math.random()*nouns.length)];
}

if (randomTitle == 6){
    bookCover.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)] + " and " + adjectives[Math.floor(Math.random()*adjectives.length)];
}

if (randomTitle == 7){
    bookCover.innerHTML = "A " + nouns[Math.floor(Math.random()*nouns.length)] + " in the " + nouns[Math.floor(Math.random()*nouns.length)];
}