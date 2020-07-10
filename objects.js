//code for objects goes here:
//object to store files
//built in functions like check if it should be showed
//draw function, etc...


function Object(x, y, img, description) {
    this.x = x;
    this.y = y;
    this.show = false;
    this.img = new Image();
    this.img.src = img;
    this.description = description;
}
Object.prototype.checkCollision = function() {
    //check if the mouse x and y stored in the state variable are within range
    if(this.x + 20 > state.mouse.x && this.x - 20 < state.mouse.x && this.y + 20 > state.mouse.y && this.y - 20 < state/mouse.y) {
	return true;
    }
    return false;
}
Object.prototype.draw = function() {
    //draw the object
    //doesn't need to be passed anything because js functions have no scope :(
    //the part about subtracitng the coords is so it shows up at the right place relative to the backgound image
    if(this.show === true) { 
	ctx.drawImage(this.img, this.x - state.coords.x, this.y - state.coords.y);
    }
}

var objList = JSON.parse('astroObjects.json');
for (var obj in objList) {
    Object(objList[obj].x, objList[obj].y, objList[obj].imgLink,objList[obj].description);
    //while simulation mouse is not in range:
        do {
            Object.prototype.checkCollision();
        }
        while (Object.prototype.checkCollision == false);
        if(Object.prototype.checkCollision == true) {
            this.show = true;
            Object.prototype.draw()
        }
    
}
