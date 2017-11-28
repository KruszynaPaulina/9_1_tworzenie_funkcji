function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {

    return a*h/2;

	} else {

  		return 'Nieprawidłowa wartość';

	}
}

console.log(getTriangleArea(10, 6));
console.log(getTriangleArea(-2, 6));

var triangle1Area1 = getTriangleArea(10, 15);
console.log(triangle1Area1);

var triangle1Area2 = getTriangleArea(22, 4);
console.log(triangle1Area2);

var triangle1Area3 = getTriangleArea(7, 5);
console.log(triangle1Area3);