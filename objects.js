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
//converts the JSON file into a JS object
var objList = 
[
{"objName": "Mercury", "description": "eeeeeeee", "imgLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/900px-Mercury_in_color_-_Prockter07-edit1.jpg\n", "x": "1832.2", "y": "492.1"},
 
 {"objName": "Venus", "description": "aaaaaaaa", "imgLink": "https://hubblesite.org/uploads/image/display_image/282/web_print.jpg","x": "2128.3","y": "509.3"}  
];

//iteration for each of the objects within the list object declared above
for (var i = 0; i<objList.length; i++) {
   console.log(objList[i].objName);
    //var Object = newObject(objList[obj].x, objList[obj].y, objList[obj].imgLink,objList[obj].description);
 
    //    if(Object.prototype.checkCollision == true) {
    //        this.show = true;
    //        Object.prototype.draw()
    //    }
    
}
