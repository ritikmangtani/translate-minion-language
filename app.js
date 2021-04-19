var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector('#txt-area')
var outputDiv = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    alert("Something went wrong! Try again later.")
}

function clickhandler(){
    var inputTxt = txtInput.value // taking input
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickhandler)