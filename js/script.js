// Function should return a number in the range i - j, both inclusive 
randint = function (i,j){
    var num = i+Math.floor(Math.random()*(j+1-i));
    return num;
}

tuner = function(i){
    var num = randint(i,7);
    if (num>=7){
        i=0;
    }
    else{
        i=num+1;
    }
    return num;
}

function playAudio(index){
    var audio = new Audio("audio/audio" + [index] + ".wav");
    audio.play();
}

// Generate number of tiles from input
var index = 0;
var tiles = document.querySelector("#main-content");
var button = document.querySelector("#tileinp");
button.addEventListener('click', ()=>{
    input = document.querySelector("#ntile");
    var i,j; let n =input.value;
        tiles.innerHTML = "";
        let content = ""
        for (i=0;i<n;i++){
            content+= "<div class='row'>";
            for (j=0;j<n;j++){
                row = document.querySelector(".row")
                var num = i*n + (j+1);
                content+="<div class='tile' id='t"+num+"'> </div>";
            }
            content+= "</div>";
        }
        tiles.innerHTML+=content;
        
        // Listens if we hover over the the entire matrix mainframe
        const alltiles = document.querySelectorAll('.tile');
        alltiles.forEach(tile => {
            // Generates the random index and highlights the color required.
            tile.addEventListener('mouseover', function indexhighlight(event) {
                var rn = randint(index,7);
                if (rn>=7){
                    index=0;
                }
                else{
                    index=rn+1;
                }
            //Generate a Random hexadecimal number 3 times:
            var color = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
            tile.setAttribute('style', 'background-color:'+color+';')
            tile.addEventListener('mouseover', playAudio(index));
            });
            
            });
})



