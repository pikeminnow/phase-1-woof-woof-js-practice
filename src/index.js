//when the page loads


document.addEventListener("DOMContentLoaded", (event) => {
    console.log('dom has loaded');
    const dogBar = document.getElementById('dog-bar');
    const dogInfo = document.getElementById('dog-info');
    //use fetch
    fetch("http://localhost:3000/pups")
        .then((response) => response.json())
        .then((data) => doSomething(data));


    function doSomething(pupArray) {
        //for every pup in this array
        //parse data
        //get pup name
        //append <span> pup name <span> to dog bar
        pupArray.forEach(pup => {
            console.log(pup);
            let dogSpan = document.createElement('span');
            dogSpan.innerText = pup.name;
            dogBar.append(dogSpan);
            dogSpan.addEventListener('click', (event) => {
                console.log(pup);
                dogInfo.innerHTML = "";
               let dogH2 = document.createElement('h2');
               let dogImg = document.createElement('img');
               let dogButton = document.createElement('button');
               dogInfo.append(dogH2,dogImg,dogButton);

               dogImg.src = pup.image;
               dogH2.innerText = pup.name;
               if (pup.isGoodDog){dogButton.innerText = "Good Dog!"}
               else {dogButton.innerText = "Bad Dog!"}

               dogButton.addEventListener('click', (event) => {
                //if first char is 'G', change to bad dog
                if (event.target.innerText[0] === 'G'){event.target.innerText = 'Bad Dog!'}
                else {event.target.innerText = 'Good Dog!'}
               }
               )
               
            })
            // let dogSpan = `<span>${element.name}</span>`;
            // dogBar.innerHTML += dogSpan;
        });
    }

});





//to get all the pup data
//when all of the data is present, add a span with each pup's name to the dog par