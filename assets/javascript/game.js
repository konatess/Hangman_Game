// need arrays for
// words 
    var bones = ["Nasal", "Lacrimal", "Maxiallary", "Zygomatic", "Temporal", "Palatine", "Parietal", "Malleus", "Incus", "Stapes", "Frontal", "Ethmoid", "Vomer", "Sphenoid", "Mandible", "Occipital", "Ribs", "Hyoid", "Sternum", "Cervical Vertebrae", "Thoracic Vertebrae", "Lumbar Vertebrae", "Sacrum", "Coccyx", "Scapula", "Clavicle", "Humerus", "Radius", "Ulna", "Scaphoid", "Lunate", "Triquetrum", "Pisiform", "Hamate", "Capitate", "Trapezoid", "Trapezium", "Metacarpal", "Phalanges", "Ilium ", "Ischium", "PubisFemur", "Patella", "Tibia", "Fibula", "Talus", "Calcaneus", "Navicular", "Cuneiforms", "Cuboid"]
// winning gifs 
    var winGif = ['https://giphy.com/embed/OUp72ZhJAtsJO', 'https://giphy.com/embed/hk3W7hxkLDkA0', 'https://giphy.com/embed/14na7KVDve6rHq', 'https://giphy.com/embed/jNSooJdHt3Sta', 'https://giphy.com/embed/3oriNU7UXUPX91SvNC', 'https://giphy.com/embed/3oEjI53nBYOOEQgDcY', 'https://giphy.com/embed/r6aZOSxM0hOuY', 'https://giphy.com/embed/8FUNh9xgfc8HC']
// losing gifs 
    var loseGif = ['https://giphy.com/embed/qUHxAava8vmUg', 'https://giphy.com/embed/XcL6a7YHm4sWA', 'https://giphy.com/embed/NrZd0l96TbRcI', 'https://giphy.com/embed/35qf6Nu98jJDi', 'https://giphy.com/embed/qKmwOvs6XuRYA', 'https://giphy.com/embed/441veZw9vyx56', 'https://giphy.com/embed/jpbAaUG7cjkZy', 'https://giphy.com/embed/xTkcELnWz4YdJvszfy']

// alphabet list ABCDEFGHIJKLMNOPQRSTUVWXYZ

// play code
    // start with wins = 0
    var wins = 0;
    document.getElementById("score").innerHTML = wins;
    // select word
        // random number generator for word index
        // save chosen word toUpperCase to variable 'nowWord'
        var nowWord = bones[Math.floor(Math.random() * bones.length)].toUpperCase();

    // display blank spaces
        var i = 0
        var blanks = ""
        while (i < nowWord.length) {
            if (nowWord.charAt(i) !== " ") {
                blanks = blanks.concat("_");
            }
            else {
                blanks = blanks.concat(" ")
            }
            i ++;
        }
        console.log(nowWord);
        console.log(blanks);
        document.getElementById("current").innerHTML = blanks;






        var wrong = [];
        document.getElementById("guessed").innerHTML = wrong;

    // if 'wrong' guess length === 10
    if (wrong.length === 10) {
        // lose actions
            // show a losing gif
            var lose = loseGif[Math.floor(Math.random() * loseGif.length)]();
            // play losing sound
    }
    // else 
        // if all blanks != _
            // win actions
            
        //else
            // take input onKeyUp toUpperCase
                // if input == a-z && input != 'wrong' for each
                    // i = 0
                    // if input == 'nowWord'[i]
                        // replace blanks [i] with input
                        // write to page
                    // else 
                        //push input to 'wrong' guess
                        //reprint wrong guesses
                            // e.g from w3 schools 
                                //document.getElementById("demo").innerHTML = fruits.join(", ");

    // Notes on code options and research
    // var sth str.search(" ") returns index of space in str. 
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



