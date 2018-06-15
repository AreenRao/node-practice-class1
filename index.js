var react = require('./reactangle');

function calculateParameterAndArea(x, y) {
    console.log("area is: ", react.area(x, y));
    console.log("parameter is: ", react.parameter(x, y));
}

calculateParameterAndArea(1, 2);
calculateParameterAndArea(2, 1);