var lang='ar'

var speechRecognition = window.webkitspeechRecognition

var recognition = new speechRecognition()

var textbox = $("textbox")

var instructions = $("#insructions")

var content = ''


recognition.contiunous = true

recognition.onstart = function (){
    instructions.text("voice Recognition is on")
}

recognition.onspeechhend = function (){
    instructions.text("No Activity")
}

recognition.onerror = function (){
    instructions.text("Try Again")
}

recognition.onresult = function (event){
    var current = event.resultIndex

    var transcript = event.results[current][0].transcript

    content += transcript

    textbox.val(content)
}

$("#start-btn").click(function (event){
    if(content.length){
        content += ''
    }

    recognition.start()


})

textbox.on('input', function (){
    content = $(this).val()
})