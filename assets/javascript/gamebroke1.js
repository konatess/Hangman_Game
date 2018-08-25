
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)









// need arrays for
// words 
    var bones = ["Nasal", "Lacrimal", "Maxiallary", "Zygomatic", "Temporal", "Palatine", "Parietal", "Malleus", "Incus", "Stapes", "Frontal", "Ethmoid", "Vomer", "Sphenoid", "Mandible", "Occipital", "Ribs", "Hyoid", "Sternum", "Cervical Vertebrae", "Thoracic Vertebrae", "Lumbar Vertebrae", "Sacrum", "Coccyx", "Scapula", "Clavicle", "Humerus", "Radius", "Ulna", "Scaphoid", "Lunate", "Triquetrum", "Pisiform", "Hamate", "Capitate", "Trapezoid", "Trapezium", "Metacarpal", "Phalanges", "Ilium ", "Ischium", "PubisFemur", "Patella", "Tibia", "Fibula", "Talus", "Calcaneus", "Navicular", "Cuneiforms", "Cuboid"]
// winning gifs 
    var winGif = ['https://giphy.com/embed/OUp72ZhJAtsJO', 'https://giphy.com/embed/hk3W7hxkLDkA0', 'https://giphy.com/embed/14na7KVDve6rHq', 'https://giphy.com/embed/jNSooJdHt3Sta', 'https://giphy.com/embed/3oriNU7UXUPX91SvNC', 'https://giphy.com/embed/3oEjI53nBYOOEQgDcY', 'https://giphy.com/embed/r6aZOSxM0hOuY', 'https://giphy.com/embed/8FUNh9xgfc8HC']
// losing gifs 
    var loseGif = ['https://giphy.com/embed/qUHxAava8vmUg', 'https://giphy.com/embed/XcL6a7YHm4sWA', 'https://giphy.com/embed/NrZd0l96TbRcI', 'https://giphy.com/embed/35qf6Nu98jJDi', 'https://giphy.com/embed/qKmwOvs6XuRYA', 'https://giphy.com/embed/441veZw9vyx56', 'https://giphy.com/embed/jpbAaUG7cjkZy', 'https://giphy.com/embed/xTkcELnWz4YdJvszfy']




// play code

    // start with wins = 0
    var wins = 0;
    document.getElementById("score").innerHTML = wins;

    // select word

        // random number generator for word index
        // save chosen word toUpperCase to variable 'nowWord'
        var nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase();
        var blanks = ""
        function wordChoice(e) {
            e = bones[Math.floor(Math.random() * bones.length)].toUpperCase();
                // display blank spaces
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


        }


        var wrong = [];
        document.getElementById("guessed").innerHTML = wrong;
        document.getElementById("remaining").innerHTML = "You have " + (10 - wrong.length) + " guesses remaining.";
    
    //game play loop
function game() {
    document.onkeyup = wordChoice(nowWord)
    while (wrong.length < 11 && blanks.includes("_") === false) {
        // if 'wrong' guess length === 10
        if (wrong.length === 10) {
        // lose actions
            // show a losing gif
            var status = loseGif[Math.floor(Math.random() * loseGif.length)]();
            ///////////////////
            //display losing message
            document.getElementById("statM").innerHTML = "That was not the bone you were looking for.";
            // play losing sound
        }
        // else 
        else {
            // if all blanks != _
            // for (var i = 0; i < blanks.length; i++) {
                if (blanks.includes("_") === false) {
                    // win actions
                        // wins = wins + 1
                        wins++;
                        document.getElementById("score").innerHTML = wins;
                        // show a winning gif
                        var status = winGif[Math.floor(Math.random() * winGif.length)];
                        ///////////////////
                        //display winning message
                        document.getElementById("statM").innerHTML = "Hey! You won!";
                        // play winning sound
                }
                //else
                else {
                    // take input onKeyUp toUpperCase
                    var input = document.onkeyup.key.toUpperCase()
                        // if input == a-z && input != 'wrong' for each
                            if (input.match(/A-Z/) ) {
                                for (var j =0; j < nowWord.length; j++)
                                    // if input is in 'nowWord'
                                    if (input === nowWord.charAt(j)) {
                                    // replace blanks [i] with input
                                    blanks.charAt(j) = nowWord.charAt(j)
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
                                document.getElementById("remaining").innerHTML = "You have" + (10 - wrong.length) + "guesses remaining.";
                            }
                }
                
            // }
        }
    }
    
}
document.onkeyup = game(event)

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






    