// hide all prompts
$("#prompt1").hide();
$("#prompt2").hide();

// timers
var timer1 = 0;
var timer2 = 0;

// on document load, start first timer
// after four seconds, the first prompt appears
$( document ).ready(function() {
setInterval(function () {
    timer1++;
    if (timer1==10){
    console.log("four")
    $("#prompt1").fadeIn(2000, function(){
        console.log("I showed up");   
    });
    }
    }, 1000);
});

// after the user responds to the first prompt, the prompt dissapears and the second timer begins
// after eight seconds, the second prompt appears
$("#prompt1").click(function (e) {
$("#prompt1").hide();
setInterval(function () {
    timer2++;
    if (timer2==8){
    console.log("eight")
    $("#prompt2").fadeIn(2000, function(){
        console.log("I showed up too");   
    })
    }
}, 1000);
});





// work in progress -------------------------------
window.onload = function()
{
	//adding the event listerner for Mozilla
	if(window.addEventListener)
		document.addEventListener('DOMMouseScroll', moveObject, false);

	//for IE/OPERA etc
	document.onmousewheel = moveObject;
}
function moveObject(event)
{
	var delta = 0;
	if (!event) event = window.event;
	// normalize the delta
	if (event.wheelDelta) {
		// IE and Opera
		delta = event.wheelDelta / 60;
	} else if (event.detail) {
		// W3C
		delta = -event.detail / 2;
	}

	var currPos=document.getElementById('scroll').offsetTop;

	//calculating the next position of the object
	currPos=parseInt(currPos)-(delta*10);

	// //moving the position of the object
	// document.getElementById('scroll').style.top = currPos+"px";
    // document.getElementById('scroll').innerHTML = event.wheelDelta + ":" + event.detail;
    
    var element = document.getElementById("twitter-timeline").innerHTML

    Object.defineProperty(element.prototype, "scrollBy", {
        value: function(x, y) {
            el.scrollTop += currPos;
            el.scrollLeft += x;
        },
        enumerable: false
    });
    element.scrollTo(currPos, currPos);

}