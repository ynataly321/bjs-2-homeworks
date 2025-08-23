
function parseCount(someNumber) {
    let result = Number.parseFloat(someNumber);
    if (Number.isNaN(result)) {
        throw new Error ("Невалидное значение");        
    } 
    return result;
}    
    
function validateCount(someNumber) {
    try {
        return parseCount(someNumber);
    }catch(error) {
        return(error);        
    }
}
    
class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");           
        }
    }          
    
    get perimeter() {
        return (this.a + this.b + this.c);              
    }

    get area() {
        let semiP = this.perimeter/2 ;
        return parseFloat(Math.sqrt(semiP * (semiP - this.a) * 
                                    (semiP - this.b) * (semiP - this.c)).toFixed(3));
    }
}

   
function getTriangle(a, b, c) {
    try {
        return triangle = new Triangle(a, b, c);
    } catch(error) {
        return error = {
            get perimeter() {
                return ("Ошибка! Треугольник не существует");              
            },

            get area() {
                return ("Ошибка! Треугольник не существует");    
            }       
        }   
    }
}
