// what needs to/can stay the same until page refreshes
    // content arrays
    // wins can count up eternally, only need to set to 0 when page refreshes


// content arrays
// words 
    var bones = ["Nasal", "Lacrimal", "Maxiallary", "Zygomatic", "Temporal", "Palatine", "Parietal", "Malleus", "Incus", "Stapes", "Frontal", "Ethmoid", "Vomer", "Sphenoid", "Mandible", "Occipital", "Ribs", "Hyoid", "Sternum", "Cervical Vertebrae", "Thoracic Vertebrae", "Lumbar Vertebrae", "Sacrum", "Coccyx", "Scapula", "Clavicle", "Humerus", "Radius", "Ulna", "Scaphoid", "Lunate", "Triquetrum", "Pisiform", "Hamate", "Capitate", "Trapezoid", "Trapezium", "Metacarpal", "Phalanges", "Ilium ", "Ischium", "PubisFemur", "Patella", "Tibia", "Fibula", "Talus", "Calcaneus", "Navicular", "Cuneiforms", "Cuboid"]
// winning gifs 
    var winGif = ['https://giphy.com/embed/OUp72ZhJAtsJO', 'https://giphy.com/embed/hk3W7hxkLDkA0', 'https://giphy.com/embed/14na7KVDve6rHq', 'https://giphy.com/embed/jNSooJdHt3Sta', 'https://giphy.com/embed/3oriNU7UXUPX91SvNC', 'https://giphy.com/embed/3oEjI53nBYOOEQgDcY', 'https://giphy.com/embed/r6aZOSxM0hOuY', 'https://giphy.com/embed/8FUNh9xgfc8HC']
// losing gifs 
    var loseGif = ['https://giphy.com/embed/qUHxAava8vmUg', 'https://giphy.com/embed/XcL6a7YHm4sWA', 'https://giphy.com/embed/NrZd0l96TbRcI', 'https://giphy.com/embed/35qf6Nu98jJDi', 'https://giphy.com/embed/qKmwOvs6XuRYA', 'https://giphy.com/embed/441veZw9vyx56', 'https://giphy.com/embed/jpbAaUG7cjkZy', 'https://giphy.com/embed/xTkcELnWz4YdJvszfy']

// start with wins = 0
    var wins = 0;
    document.getElementById("score").innerHTML = wins;

// after game start, what needs to happen least often?
    // before play
        // word selection
        // set up initial blank word
        // set up empty wrong guesses
        // initialize guesses remaining
        // reset win/lose gif and message
    // after play
        // update wins
        // display win/lose gif and message
// what's next least?
    // win/lose/keep playing loop

    // inside that loop
        // take in input
        // compare input
        // save input in blanks or in wrong guesses



// let's try this again

// first, whole function starts on key up
document.onkeyup = function () {
    // next, all the before play tasks
        //word selection
        var nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase();
        console.log(nowWord)
        // set up initial blank word
        var blanks = ""
        for (var i = 0; i < nowWord.length; i++) {
            if (nowWord.charAt(i) !== " ") {
                blanks = blanks.concat("_");
            }
            else {
                blanks = blanks.concat(" ")
            }
        }
        document.getElementById("current").innerHTML = blanks;
        // set up empty wrong guesses
        var wrong = [];
        document.getElementById("guessed").innerHTML = wrong;
        // initialize guesses remaining
        document.getElementById("remaining").innerHTML = "You have " + (10 - wrong.length) + " guesses remaining.";
        // reset win/lose gif and message
        document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="https://giphy.com/embed/xP6RR7jlxpmMw"></iframe>' 
        document.getElementById("statM").innerHTML = "Hmmmmm..."

        // third, win/lose/keep playing loop
            document.onkeyup = function (event) {
                var input = event.key.toUpperCase();
                console.log(input);
                // if 'wrong' guess length === 10
                if (wrong.length === 10) {
                    // lose actions:
                    // show a losing gif
                    var winLose = loseGif[Math.floor(Math.random() * loseGif.length)]();
                    document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="' + winLose + '"></iframe>' 
                    //display losing message
                    document.getElementById("statM").innerHTML = "That was not the bone you were looking for.";
                    // play losing sound
                }
                // else if all blanks != _
                else if (blanks.includes("_") === false) {
                    // win actions:
                    // wins = wins + 1
                    wins++;
                    document.getElementById("score").innerHTML = wins;
                    // show a winning gif
                    var winLose = winGif[Math.floor(Math.random() * winGif.length)];
                    document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="' + winLose + '"></iframe>' 
                    //display winning message
                    document.getElementById("statM").innerHTML = "Hey! You won!";
                    // play winning sound
                }
                //else
                else {
                    // if input == a-z && input != 'wrong' for each
                    if (nowWord.includes(input)) {
                        for (var j =0; j < nowWord.length; j++)
                            // if input is in 'nowWord'
                            if (input === nowWord.charAt(j)) {
                            // replace blanks [i] with input
                            blanksArr = blanks.split("")
                            blanksArr[j] = nowWord.charAt(j)
                            blanks = blanksArr.join("")
                            }
                            console.log(blanks)
                            // write to page
                            document.getElementById("current").innerHTML = blanks;
                    }
                    // else 
                    else {
                        //push input to 'wrong' guess
                        wrong.push(input)
                        //reprint wrong guesses
                            // e.g from w3 schools 
                                //document.getElementById("demo").innerHTML = fruits.join(", ");
                        document.getElementById("guessed").innerHTML = wrong.join(", ");
                        document.getElementById("remaining").innerHTML = "You have " + (10 - wrong.length) + " guesses remaining.";
                    }
                }
            }

}


// play code

    // select word
        // random number generator for word index
        // save chosen word toUpperCase to variable 'nowWord'
                // display blank spaces
    //game play loop
        // if 'wrong' guess length === 10
        // lose actions
            // show a losing gif
            ///////////////////
            //display losing message
            // play losing sound
        // else 
            // if all blanks != _
            // for (var i = 0; i < blanks.length; i++) {
                    // win actions
                        // wins = wins + 1
                        // show a winning gif
                        ///////////////////
                        //display winning message
                        // play winning sound
                //else
                    // take input onKeyUp toUpperCase
                        // if input == a-z && input != 'wrong' for each
                                    // if input is in 'nowWord'
                                    // replace blanks [i] with input
                                    // write to page
                            // else 
                                //push input to 'wrong' guess
                                //reprint wrong guesses
                                    // e.g from w3 schools 
                                        //document.getElementById("demo").innerHTML = fruits.join(", ");

    // Notes on code options and research
    // var sth str.search(" ") returns index of space in str. 
    // alphabet list ABCDEFGHIJKLMNOPQRSTUVWXYZ
// start over




        // take guess input
        // is guess correct? for each 
            // if guess correct, display letter(s) in correct location
            // if guess not correct, append to guessed list

        // if all letters filled in, win 
            // in other words, if != _
        // else if wrong guess length = 10, lose
        // else, keep playing
    // if win 
        // wins = wins + 1
        // show a winning gif
        // play winning sound
    // else lose
        // show a losing gif
        // play losing sound





// let wins = 0
// let wrong = [] 
    // does this overwrite previous input? yes!
// if 'wrong' guess length < 10
    // if blanks for each == _
        // take input
            // if input (upper case) == a-z && input != 'wrong' for each
                // i = 0
                // if input == 'nowWord'[i]
                    // replace blanks [i] with input
                    // write to page
                // else 
                    //push input to 'wrong' guess


    // else win

// else 
    //lose



