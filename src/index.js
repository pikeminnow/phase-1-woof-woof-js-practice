//
//sample data
// {
//     "id": 1,
//     "name": "Mr. Bonkers",
//     "isGoodDog": true,
//     "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//   },

// On the page, there is a div with the id of "dog-bar". When the page loads, use fetch to get all of the pup data from your server. When you have this information, you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

addEventListener('DOMContentLoaded', main);
function main (){
//page element deck
const dogBar = document.getElementById('dog-bar');
const dogInfoDiv = document.getElementById('dog-info');

const data1 = fetch('http://localhost:3000/pups')
.then(pupsJson)
.then(displayPupsInDogBar);

function displayPupsInDogBar (pupObject) {
    pupObject.forEach( (pup => {
        let pupSpan = document.createElement('span');
        pupSpan.innerText = pup.name;
        pupSpan.metaID = pup.id;
        pupSpan.addEventListener('click', displayPupInfo);
        dogBar.append(pupSpan);

    }))
}

// When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:

// an img tag with the pup's image url
// an h2 with the pup's name
// a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false.

function displayPupInfo (pupClickEvent) {
console.log(pupClickEvent);
    const data2 = fetch(`http://localhost:3000/pups/${pupClickEvent.target.metaID}`)
    .then(pupsJson)
    .then((pupObject) => {
    console.log(pupObject);
    let pupImage = document.createElement('img');
    let pupName = document.createElement('h2');
    let pupButton = document.createElement('button');

    pupImage.src = pupObject.image;
    pupName = pupObject.name;
    if (pupObject.isGoodDog){pupButton.innerText = "Good Dog!"}
    else {pupButton.innerText = "Bad Dog!"}
    dogInfoDiv.append(pupImage,pupName,pupButton);
});
}

// When a user clicks the Good Dog/Bad Dog button, two things should happen:

// The button's text should change from Good to Bad or Bad to Good
// The corresponding pup object in the database should be updated to reflect the new isGoodDog value    


// hoist zone
function pupsJson (response){
    console.log(response);
    return response.json();
}


}

