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

// Generate number of tiles from input
var index = 0;
var button = document.querySelector("#tileinp");
var tiles = document.querySelector("#main-content");

button.addEventListener('click', ()=>{
    input = document.querySelector("#ntile");
    var i,j; let n =input.value;
    
    tiles.innerHTML = "";
    for (i=0;i<n;i++){
        tiles.innerHTML+= "<div class='row'>";
        for (j=0;j<n;j++){
            var num = i*n + (j+1);
            tiles.innerHTML+="<div class='tile' id='t"+num+"'> </div>";
        }
        tiles.innerHTML+= "</div>";
    }
  })

tiles.addEventListener('mouseover', ()=>{
    // Generate Random number
    function playAudio(index){
        var audio = new Audio("audio/audio" + [index] + ".wav");
        audio.play();
    }
   
    alltiles = tiles.querySelectorAll('.tile');
    alltiles.forEach(tile => {
        tile.addEventListener('mouseover', function handleClick(event) {
        var rn = randint(index,7);
        if (rn>=7){
            index=0;
        }
        else{
            index=rn+1;
        }

        randno = document.querySelector("#randno");
        randno.textContent = "Current Index: "+rn;
          tile.setAttribute('style', 'background-color: yellow;')
          
          
        });
        tile.addEventListener('mouseover', playAudio(index) );
      });
    
});
