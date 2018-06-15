var rect = require('./reactangle');

function calculateParameterAndArea(l, b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message); // because we passed error as 'new Error' object. 
	    }
        else {
            // we don't need to pass the parameters here because
            // we have passed it in above 'rect()' function as 'l' & 'b'.
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    // this statement will get printed before the result of callbacks because we have used
    // 'setTimeot' on callbacks in 'reactangle' module. 
    console.log("This statement after the call to rect()");
}

calculateParameterAndArea(1, 2);
calculateParameterAndArea(2, 1);
calculateParameterAndArea(-2, 1);