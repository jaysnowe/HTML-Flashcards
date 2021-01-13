
function FlipCard(){
    //locate a the question that is currently visible
    //locate the answer card to replace the question when the button is pressed
    //figure out how to replace answer card with question card and vice versa
    //add function call onClick of the showReverse button


    console.log("in FlipCard()");
    const question = document.getElementById('question1');
    const answer = document.getElementById('answer1');
    console.log(question);

    // const cloneAnswer = answer.cloneNode(true);
    // const cloneQuest = question.cloneNode(true);

    if (question.style.display !== "none") 
    {
        console.log("if statement of FlipCard()");
        question.style.display= "none";
        answer.style.display = "block";
    }
    else if (answer.style.display !== "none"){
        console.log("else if stmt of FlipCard()");
        answer.style.display="none";
        question.style.display= "block";
    }
}
window.onload = function CountCards(){
    //get the number of answer divs that currently exist
    const container_length = document.querySelectorAll("div.answer").length;
    //locate where this number should go
    const counted_cards = document.getElementById("countCards");
    //put the #of answerdivs in the footer inner text (rather than innerHTML)
    counted_cards.innerText = container_length;

    //TODO: figure out how to only count the answer divs that have innertext
}