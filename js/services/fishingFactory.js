angular.module('BSG').factory('fishingFactory', function() {
    var name = '';
    var fav_color = '';
    var imaginary_pet_name = '';

    function setData(n, ln, c) {
        name = n;
        fav_color = ln;
        imaginary_pet_name = c;
    }

    return {
        name: name,
        fav_color: fav_color,
        imaginary_pet_name: imaginary_pet_name,
        setData: setData
    }
})