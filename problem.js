//could use better name
//e is called to stop it from doing the normal interaction with a checkbox
function doNotRun(e)
{
    alert("sToP dO nOt ClIcK tHiS");
    e.preventDefault();
}

//this is for textArea appearance
//easier to make something show up and disappear if it is always there
//use classlist and a class to set the color equal to background
//breaks if background is different color
function enableTextArea(e)
{
    e.preventDefault();
    // console.log("boop");
    if(active === false)
    {
        hiddenMessage.classList.remove("hidden");
        tArea.removeAttribute("disabled");
        // console.log("beep");
        active = true
    }
    else
    {
        hiddenMessage.classList.add("hidden");
        tArea.setAttribute("disabled","");
        // console.log("bop");
        active = false
    }
}

//countdown for liftoff
//console.log(randomNoise) for different testings

function beginCountDown()
{
     var countdownstop = setInterval(function countDown()
    {
         if(countdownstart === 0)
        {
            countNumber.innerText = "Liftoff!";
            countdownstart--;
            // countdownstop.timeout -= 25;     //not necessary just testing
        }
        else if(countdownstart > 0)
        {
            countNumber.innerText = countdownstart;
            countdownstart--;
        }
        else
        {
            clearInterval(countdownstop);
            countdownstart = 10;
            // countdownstop.timeout = 200;     //not necessary just testing
        }
    },200);
    // console.log("vreee");        //vroooom
}

function startrunning()
{
    console.log("woosh");
    var stoprunning = setInterval(function run()
    {
        if(runtime === 10)
        {       //added a runtime so it adds some more animation and seems less abrupt
            runtime = 1;
            clearInterval(stoprunning);
            imageToRun =1;
        }
        if(imageToRun <10)
        {
            // console.log(imageToRun);     //added for testing
            guyWhoRuns.src = ("guy" + imageToRun + ".png");
            imageToRun++
        }
        else
            {
                imageToRun = 1;
                runtime++
            }


    },70)   //timeout of 40 to make it faster
}
runtime=0;
let imageToRun=1;
let countdownstart = 10;
active = false;
var beatBox = document.getElementById("noTouch");
var enableTyping = document.getElementById("fixIt");
var tArea = document.getElementById("areaText");
var hiddenMessage = document.getElementById("hiddenMessage");
var countdownButton = document.getElementById("countdown");
var countNumber = document.getElementById("countNumber");
var animationButton = document.getElementById("animationButton");
var guyWhoRuns = document.querySelector("#ImagetoChange");
//give them all something to work with




//add event listeners for the necessary buttons
enableTyping.addEventListener("click",enableTextArea);
beatBox.addEventListener("click", doNotRun);
countdownButton.addEventListener("click",beginCountDown);
animationButton.addEventListener("click",startrunning);