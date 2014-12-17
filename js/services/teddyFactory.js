angular.module('BSG').factory('swingFactory', function() {
    var name = '';
    var fav_animal = '';
    var toy_name = '';

    function setData(n, ln, c) {
        name = n;
        fav_animal = ln;
        toy_name = c;
    }

    return {
        name: name,
        fav_animal: fav_animal,
        toy_name: toy_name,
        setData: setData
    }
})