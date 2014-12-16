angular.module('BSG').factory('airplaneFactory', function() {
    var name = '';
    var last_name = '';
    var color = '';

    function setData(n, ln, c) {
        name = n;
        last_name = ln;
        color = c;
    }

    return {
        name: name,
        last_name: last_name,
        color: color,
        setData: setData
    }
})