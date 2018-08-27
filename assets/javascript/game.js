// what needs to/can stay the same until page refreshes
    // content arrays
    // wins can count up eternally, only need to set to 0 when page refreshes


// content arrays
// words 
    var bones = ["Nasal", "Lacrimal", "Maxiallary", "Zygomatic", "Temporal", "Palatine", "Parietal", "Malleus", "Incus", "Stapes", "Frontal", "Ethmoid", "Vomer", "Sphenoid", "Mandible", "Occipital", "Ribs", "Hyoid", "Sternum", "Cervical Vertebrae", "Thoracic Vertebrae", "Lumbar Vertebrae", "Sacrum", "Coccyx", "Scapula", "Clavicle", "Humerus", "Radius", "Ulna", "Scaphoid", "Lunate", "Triquetrum", "Pisiform", "Hamate", "Capitate", "Trapezoid", "Trapezium", "Metacarpal", "Phalanges", "Ilium ", "Ischium", "Pubis", "Femur", "Patella", "Tibia", "Fibula", "Talus", "Calcaneus", "Navicular", "Cuneiforms", "Cuboid"]
// winning gifs 
    var winGif = ['https://giphy.com/embed/OUp72ZhJAtsJO', 'https://giphy.com/embed/hk3W7hxkLDkA0', 'https://giphy.com/embed/14na7KVDve6rHq', 'https://giphy.com/embed/jNSooJdHt3Sta', 'https://giphy.com/embed/3oriNU7UXUPX91SvNC', 'https://giphy.com/embed/3oEjI53nBYOOEQgDcY', 'https://giphy.com/embed/r6aZOSxM0hOuY', 'https://giphy.com/embed/8FUNh9xgfc8HC']
// losing gifs 
    var loseGif = ['https://giphy.com/embed/qUHxAava8vmUg', 'https://giphy.com/embed/XcL6a7YHm4sWA', 'https://giphy.com/embed/NrZd0l96TbRcI', 'https://giphy.com/embed/35qf6Nu98jJDi', 'https://giphy.com/embed/qKmwOvs6XuRYA', 'https://giphy.com/embed/441veZw9vyx56', 'https://giphy.com/embed/jpbAaUG7cjkZy', 'https://giphy.com/embed/xTkcELnWz4YdJvszfy']
    

// start with wins = 0
    var wins = 0;
    document.getElementById("score").innerHTML = wins;

// basic set up code on page load
    // set wins to 0

    // set all global variables after page load
        // current word
        var nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase();
        // to prevent repeating word twice in a row.
        var lastWord = nowWord
        // blanks 
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
        // wrong
        var wrong = [];
        // wrong guesses allowed
        var guesses = 10
        // to reset or not
        var plop = true;
        
    // functions to be called
        // reset function
                // status gif
        function reset() {
            // to stop immediate reset
            plop = true;
            // current word
                nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase();
                nowWord === lastWord ? nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase() : null
            // blanks
                blanks = ""
                    for (var i = 0; i < nowWord.length; i++) {
                        if (nowWord.charAt(i) !== " ") {
                            blanks = blanks.concat("_");
                        }
                        else {
                            blanks = blanks.concat(" ")
                        }
                    }
                document.getElementById("current").innerHTML = blanks;
            // wrong
                wrong.length = 0;
                document.getElementById("guessed").innerHTML = wrong;
                document.getElementById("remaining").innerHTML = 10 - wrong.length;
            // status gif
                document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="https://giphy.com/embed/xP6RR7jlxpmMw"></iframe>' 
            // status message
                document.getElementById("statM").innerHTML = "Hmmmmm...";
        }
        // lose function
            function lose() {
                // to reset
                plop = false;
                // set status gif to lose
                var winLose = loseGif[Math.floor(Math.random() * loseGif.length)];
                document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="' + winLose + '"></iframe>' 
                // set status message to lose
                document.getElementById("statM").innerHTML = "That was not the bone you were looking for.<br>Press any key to try again.";
                // play lose sound
                document.getElementById("lose-sound").play();
                // don't repeat
                lastWord = nowWord
            }
        // win function
            function win() {
                // to reset
                plop = false;
                // count up wins
                wins++;
                document.getElementById("score").innerHTML = wins;
                // set status gif to win
                var winLose = winGif[Math.floor(Math.random() * winGif.length)];
                document.getElementById("statGif").innerHTML = '<iframe class="embed-responsive-item giphy-embed" src="' + winLose + '"></iframe>' 
                // set status message to win
                document.getElementById("statM").innerHTML = "Hey! You won!<br>Press any key to try again.";
                // play win sound
                document.getElementById("win-sound").play();
                lastWord = nowWord
            }
        // play function
            function playGame(event) {
                // get input
                var input = event.key.toUpperCase();
                // if nowWord includes input
                if (nowWord.includes(input)) {
                    for (var j =0; j < nowWord.length; j++)
                        // if input is in 'nowWord'
                        if (input === nowWord.charAt(j)) {
                        // replace blanks [i] with input
                        blanksArr = blanks.split("")
                        blanksArr[j] = nowWord.charAt(j)
                        blanks = blanksArr.join("")
                        }
                        // write to page
                        document.getElementById("current").innerHTML = blanks;
                }
                // else wrong guess
                else {
                    //push input to 'wrong' guess
                    var wrongS = wrong.toString()
                    input.match(/[A-Z]/gi) && input.length === 1 && !(wrongS.match(input)) ? wrong.push(input):null
                    //reprint wrong guesses
                        // e.g from w3 schools 
                            //document.getElementById("demo").innerHTML = fruits.join(", ");
                    document.getElementById("guessed").innerHTML = wrong.join(", ");
                    document.getElementById("remaining").innerHTML = 10 - wrong.length;
                }
                (wrong.length === guesses ? lose() : (!(blanks.includes("_")) ? win() : null));
            }
// call all the functions
document.onkeyup = function() { plop ? playGame(event) : reset() };


