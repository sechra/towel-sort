
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (!matrix || matrix.length == 0) 
     return [];
    var array = [];
    var i = 0;
    matrix.forEach (element => {
        if (i % 2 !== 0) element = element.reverse();
        array = array.concat(element);
        i ++;
    })
    return array;
}
