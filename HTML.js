function FlipCard(){
    //console.log("It lives!");
    const question = document.getElementById('question1');
    const original = document.getElementById(answer1);
    const clone = original.cloneNode(true);

    while (question.firstChild) question.firstChild.remove();

    question.replaceWith(clone);
}