angular.module('BSG').factory('swingFactory', function() {
    var name = '';
    var fav_color = '';
    var friend_name = '';

    function setData(n, ln, c) {
        name = n;
        fav_color = ln;
        friend_name = c;
    }

    return {
        name: name,
        fav_color: fav_color,
        friend_name: friend_name,
        setData: setData
    }
})