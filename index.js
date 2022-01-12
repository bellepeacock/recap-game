let container = document.getElementById("container");

//the .innerHTML would print the value in the html container: use '<body>and write what's to be printed here</body>'
//container.innerHTML='<h1>Mir</h1>' will print mir as a h1
//container.innerHTML=`<h1>${data[0].question}</h1>` - note the backticks! this would write the first question from the data doc


// for the questions - need to loop through the questions, so to set up the header as "question: #" you do the i+1 ! Question 1 will be index(i) 0 (hence plus 1)!

for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div");

    myDiv.innerHTML = `
    <div>
            <img src="${data[i].image}">
            <p>question: ${i + 1}</p>
            <p>${data[i].question}</p>
            <input class="possibleAnswer" type="text" />
            <button onclick="checkAnswer(event,'${data[i].answer}')">Answer the question</button>
        </div>
    `
    // note inside the button, we used normal quotes not back ticks! The answer is the second paramter of the function, so the button knows what the answer should be!  

    container.appendChild(myDiv) 
 //or appendElement() etc etc 
    
}

// write the function separately, then place it into the button ^ above to work in the loop
function checkAnswer(event, answer) {
    console.log("answer", answer);
    let possibleAnswer = event.target.parentElement.querySelector('.possibleAnswer').value
   if(possibleAnswer.toLowerCase === answer.toLowerCase) {
    event.target.parentElement.querySelector('.result').innerHTML="nice" 
   }else{
    event.target.parentElement.querySelector('.result').innerHTML="wrong"
   }

}
