angular.module('BSG').factory('beachFactory', function() {
    var name = '';
    var fav_food = '';
    var ice_cream_flavor = '';

    function setData(n, ln, c) {
        name = n;
        fav_food = ln;
        ice_cream_flavor = c;
    }

    return {
        name: name,
        fav_food: fav_food,
        ice_cream_flavor: ice_cream_flavor,
        setData: setData
    }
})