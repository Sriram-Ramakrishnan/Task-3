// Function should return a number in the range 0 - 7, both inclusive 
randint = function (i,j){
    var num = i+Math.floor(Math.random()*(j+1-i));
    return num;
}

// Generate number of tiles from input
button = document.querySelector("#tileinp");
input = document.querySelector("#ntile");
button.addEventListener('click', ()=>{
    var i,j;
    let n =input.value;
    var tile=document.querySelector("#main-content");
    tile.innerHTML = "";
    for (i=0;i<n;i++){
        tile.innerHTML+= "<div class='row'>";
        for (j=0;j<n;j++){
            var num = i*n + (j+1);
            tile.innerHTML+="<div class='tile' id='t"+num+"'> </div>";
        }
        tile.innerHTML+= "</div>";
    }
  })

