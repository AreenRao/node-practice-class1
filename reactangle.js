// in this commit we are using a whole function with callback as 'export'
// to use in other modules. before this commit we were using 
// function with parameters only.
module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
                // here we used 'clousers' which javascript supports
                // it means inner function can use the parameters of 
                // outer function even after the completion of 
                // outer function.
                perimeter: () => (2*(x+y)), 
                area:() => (x*y)
            }), 
            2000);
}
/*
    we are using these 'callbacks' with 'setTimeout' because it takes time to 
    recieve data from database so we don't want to write data before recieving the inputs.
*/