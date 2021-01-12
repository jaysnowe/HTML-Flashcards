function FlipCard(){
    //console.log("It lives!");
    const question = document.getElementById('question1');
    const original = document.getElementById(answer1);
    const clone = original.cloneNode(true);

    while (question.firstChild) question.firstChild.remove();

    question.replaceWith(clone);
}
window.onload = function CountCards(){
    //pinpoint the answer divs that exist
    //elementList = parentNode.querySelectorAll(selectors);
    //count the answer divs 

    const container_length = document.querySelectorAll("div.answer").length;
    console.log(container_length);
    const counted_cards = document.getElementById("countCards");
    console.log(counted_cards)
    //put the #of answerdivs in the footer inner html
    counted_cards.innerText = container_length;
    //figure out how to only count the answer divs that have inner html
}