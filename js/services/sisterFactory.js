angular.module('BSG').factory('sisterFactory', function() {
    var name = '';
    var fav_toy = '';
    var brother_or_sister = '';

    function setData(n, ln, c) {
        name = n;
        fav_toy = ln;
        brother_or_sister = c;
    }

    return {
        name: name,
        fav_toy: fav_toy,
        brother_or_sister: brother_or_sister,
        setData: setData
    }
})