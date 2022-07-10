# Task1
## CONNECT ESP32 TO ARDUINO &amp; Speech to Text in JavaScript

### For ESP32:

Steps:

1- Plug the ESP32 to your PC or laptob by using micro cable.

2- Go to Tools > Board > Boards Manager > from the search bar write "esp32" > click on install.

3- Go to Tools > Board > select the name of your ESP32 board.

4- Go to Tools > Port and select a COM port available.

5- write the following code in arduion editor :

```
/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
  the correct LED pin independent of which board is used.
  If you want to know what pin the on-board LED is connected to on your Arduino
  model, check the Technical Specs of your board at:
  https://www.arduino.cc/en/Main/Products

  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink
*/

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```
6- Press the upload button.

#### Speech to text in JavaScript:

![Screenshot (272)](https://user-images.githubusercontent.com/108190937/178151679-998e1e97-0e6d-4863-bcf7-a0e46e10fed1.png)

Code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speech to text in JavaScript</title>
 
    <style>
        *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        }
        body{
        background:linear-gradient(to right , rgb(4, 28, 185), rgb(244, 244, 244) );
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
                }
        .container {
        text-align: center;
        }
        h1 {
        font-size: 30px;
        color: rgb(6, 4, 4);
        }
        textarea {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        font-size: 20px;
        margin-bottom: 10px;
        }
        button,select{
        padding: 12px 20px ;
        background: rgb(212, 11, 11);
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
        color: rgb(11, 88, 47);
        }

        button:hover,select:hover {
        background: rgb(197, 161, 230);
        color: white;
        }
    </style>
     
    </head>
    <body>
        <div class="container">
            <h1>Speech to text in JavaScript</h1> 
            <textarea style="text-align: right;"; id="output" name="output" rows="30" cols="50" placeholder=" "></textarea>
            <select name="language_Rec" id="language_Rec">
                <option value="ar">Arabic</option>
                <option value="en">English</option>
            </select>    
            <button id="start" name="start">Start Recording</button>
            <button  id="stop" name="stop">Stop Recording</button>
        </div>
    <script>
    var output = document.getElementById("output");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var language_Rec = document.getElementById("language_Rec");
    var speechRecognition = speechRecognition || webkitSpeechRecognition;
    var recognizer = new speechRecognition();

    recognizer.lang = 'ar';

    language_Rec.onchange = function() {
        recognizer.lang = language_Rec.value;
    }

    start.onclick = function() {
        recognizer.start();
    }
    stop.onclick = function() {
        recognizer.stop();
    }
    recognizer.onspeechend = function() {
        stop.click();
    }
    recognizer.onresult = function(event) {
        var Textbox = event.results[0][0].transcript;
        output.value = Textbox;
    }
    </script>
</body>
</html>

```
