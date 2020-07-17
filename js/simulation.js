//initialize variables for canvas and jsdataframe for dealing with data about objects
var canvas = document.getElementById("simulation");
var ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}; 

//define variables for state
var state = {
    drag: false,
    dragStart: {x: 0, y: 0},
    dragEnd: {x: 0, y: 0},
    mouse: {x: 0, y: 0},
    coords: {x: 0, y: 0},
    ra: {raw: 0, hour: 0, arcmin: 0, arcsec: 0},
    d: {raw: 0, deg: 0, arcmin: 0, arcsec: 0},
    showObj: false,
    objNum: 0,
    //this variable is to tell if the mouse was clicked not on one of the objects to turn showObj off
    anyObjChange: false
}

//initialize the image
var img = new Image();
img.src = '../images/betterstarmap.png';
img.onload = function(){
    ctx.drawImage(img, state.coords.x, state.coords.y);
};
var objectImages = {};
function addImage(object) {
    //create each image and load it into the array
    var newImage = new Image(100, 100);
    newImage.src = object.imgLink;
    objectImages[object.objName] = newImage;
};
objects.forEach(addImage);

function clear() {
    // Store the current transformation matrix
    ctx.save();
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Restore the transform
    ctx.restore();
}

//function that auto wraps text for the descriptions
function wrapText(text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    //loops through the words testing each one if it is too long
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

function drawObject(objectID) {
    object = objects[objectID];
    
    //draw the object

    //draw rectangle behind image
    ctx.beginPath();
    //set style:
    ctx.lineWidth = "0";
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    //draw rectangle
    ctx.rect(0, canvas.height - 500, 500, 500);
    ctx.fill();

    ctx.drawImage(objectImages[object.objName], 30, canvas.height - 300, 0.3*objectImages[object.objName].naturalWidth, 0.3*objectImages[object.objName].naturalHeight);

    //laggy code for images - loads a new one each time it is requested - even when it eventually ends up in the browser's cache the image still takes a few seconds to show up the first time
    //var image = new Image();
    //image.src = objectImages[objects[state.objNum].objName].src;
    //ctx.drawImage(image, 30, canvas.height - 330, 0.25*image.naturalWidth, 0.25*image.naturalHeight);
    
    //bad code for descriptions:
    //var textbox = document.createElement("P");
    //var description = document.createTextNode(objects[state.objNum].description);
    //textbox.appendChild(description);
    //document.body.appendChild(textbox);

    //draw title and description text:
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(100,100,200)";
    wrapText(object.objName, 30, canvas.height - 450, 440, 20);

    ctx.font = "15px Arial";
    wrapText(object.description, 30, canvas.height - 420, 440, 20);
}    
function drawDots(object) {
    ctx.beginPath();
    ctx.linewidth = "0";

    //check if it has been visited before
    if(object.visited) {
	ctx.fillStyle = "rgb(200,0,100)";
    } else {
	ctx.fillStyle = "rgb(200,200,200)";
    }

    if(object.type == 'planet') {
	ctx.arc(object.x + state.coords.x, object.y + state.coords.y, 10, 0, 2 * Math.PI);
    } else if(object.type == 'star') {
	ctx.arc(object.x + state.coords.x, object.y + state.coords.y, 10, 0, 2 * Math.PI);
    }

    ctx.fill();
    ctx.font = "15px Arial";
    ctx.fillText(object.objName, object.x + state.coords.x + 20, object.y + state.coords.y + 10);
};

function draw() {
    clear();
    ctx.drawImage(img, state.coords.x, state.coords.y);

    //draw circles and names
    objects.forEach(drawDots);

    //draw rectangle behind words:
    ctx.beginPath();
    //set style:
    ctx.lineWidth = "0";
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    //draw rectangle
    ctx.rect(0, 0, 500, 100);
    ctx.fill();

    //draw words
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(100,100,200)";
    ctx.fillText("Right Ascension: " + state.ra.hour + "hours " + state.ra.arcmin + "arcmins " + state.ra.arcsec + "arcsecs", 10, 30);
    ctx.fillText("Declination: " + state.d.deg + "degs " + state.d.arcmin + "arcmins " + state.d.arcsec + "arcsecs", 10, 65);

    //draw an object if it says too
    if(state.showObj) {
	drawObject(state.objNum);
    }
};

//when mouse is pressed, store coordinates and set move variable to true so it moves
canvas.addEventListener('mousedown', function(event) {
    state.mouse = {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop
    }
    state.dragStart = state.mouse;
    state.drag = true;

})

//when mouse is released, stop moving around the image
canvas.addEventListener('mouseup', function(event) {
    state.drag = false;
})

canvas.addEventListener('mousemove', function(event) {
    state.mouse = {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop
    };
    //calculate raw ra and d values:
    state.ra.raw = (2591 - (state.mouse.x - state.coords.x))/107.96;
    state.d.raw = -(state.mouse.y- state.coords.y)/7.117 + 90;
    //change into degs, mins, and secs
    state.ra.hour = Math.floor(state.ra.raw);
    state.d.deg = Math.floor(state.d.raw);
    state.ra.arcmin = Math.floor((state.ra.raw % 1)*60);
    state.d.arcmin = Math.floor((state.d.raw % 1)*60);
    state.ra.arcsec = Math.floor((state.ra.raw % 0.01666)*60*60);
    state.d.arcsec = Math.floor((state.d.raw % 0.01666)*60*60);

    if (state.drag) {
        state.dragEnd = state.mouse;
        state.coords = {
            x: Math.min(Math.max(state.coords.x + (state.dragEnd.x - state.dragStart.x), canvas.width - img.width), 0),
            y: Math.min(Math.max(state.coords.y + (state.dragEnd.y - state.dragStart.y),  canvas.height - img.height), 0)
        };

        state.dragStart = state.dragEnd;
    }
    draw();
})

function collisions(item, index) {
    //if it the mouse is above the object
    if(item.x + 20 + state.coords.x > state.mouse.x && item.x - 20 +state.coords.x< state.mouse.x && item.y + 20 + state.coords.y> state.mouse.y && item.y - 20 + state.coords.y < state.mouse.y) {
	state.anyObjChange = true;
	item.visited = true;
	if(state.objNum == index) {
	    //if the variable is already set, toggle whether to show it or not
	    state.showObj = !state.showObj;
	} else {
	    state.showObj = true;
	    state.objNum = index;
	}
    }
}

canvas.addEventListener('click', function(event) {
    objects.forEach(collisions);

    //check if any change occured, if not turn off the display object function
    if(!state.anyObjChange) {
	state.showObj = false;
    } else { //reset the variable for the next run
	state.anyObjChange = false;
    }
    
    //make sure to draw the panel again in case it needs to cover up the old one or draw a new one
    draw();
});
	
window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();
draw();
