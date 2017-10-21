var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("solving rectangle");
    if (l <= 0 || b <= 0) {
        console.log("parametro menor que 0");
    }
    else {
        console.log("area:" + rect.area(l,b));
        console.log("perim:" + rect.perimeter(l,b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);