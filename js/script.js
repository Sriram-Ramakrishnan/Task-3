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
    return audio;
}

function stopAudio(audio){
    audio.pause();
}

function colorGen() {
    /*Return a color from the given set of array*/
    var a =['#A6D1E6','#A3A6A3',
            '#89B5AF','#DED9C4',
            '#F6D7A7','#99A799',
            '#C37B89','#8CA1A5',
            '#D7E9F7','#E2C2B9',
            '#FF7878','#9AD0EC',
            '#1572A1','#9D5353',
            '#D3DEDC','#FFDCB8'];
            
    return a[randint(0,15)];     
}

function setWidth(n) {
    var width = 100;
    if (n>13){
        width = (1000/n);
    }
    height = width*0.8;
    return "width: "+width+"px; height:"+height+"px;"
}

var index = 0;
var tiles = document.querySelector("#main-content");
var button = document.querySelector("#tileinp");
var refresher = document.querySelector("#refresh");

//Event listener for Go for it!
button.addEventListener('click', ()=>{
    // Generate number of tiles from input
    input = document.querySelector("#ntile");
    var i,j; let n =input.value;
    tiles.innerHTML = "";
    let content = ""
    for (i=0;i<n;i++){
        content+= "<div class='row'>";
        for (j=0;j<n;j++){
            row = document.querySelector(".row")
            var num = i*n + (j+1);
            content+="<div class='tile' id='t"+num+"'";
            content+=" style='"+setWidth(n)+"'";
            content+="> </div>";
        }
        content+= "</div>";
    }
    tiles.innerHTML+=content;

    // Listens if we hover over the the entire matrix mainframe
    const alltiles = document.querySelectorAll('.tile');
    alltiles.forEach(tile => {
        // Generates the random index and highlights the color required.
        tile.addEventListener('mouseover', function indexhighlight(event)
        {
            var rn = randint(index,7);
            if (rn>=7){
                index=0;
            }
            else{
                index=rn+1;
            }

       
        var color = colorGen();
        tile.setAttribute('style', setWidth(n)+'background-color:'+color+';')
        tile.addEventListener('mouseover', playAudio(index));

        }
        );
        });
    refresher.addEventListener('click',()=>{
        for(var i =0; i<alltiles.length; i++){
            alltiles[i].setAttribute('style', 'opacity: 0;');
            alltiles[i].setAttribute('style', 'border: 2px solid white;');
            alltiles[i].setAttribute('style',setWidth(n));
        }
    });
})
