angular.module('BSG').factory('airplaneFactory', ['$q',function($q) {
    
    var user = [];

    var name, last_name, color;

    var setData = function(n, ln, c) {
        var temp = [];
        temp.push(n);
        temp.push(ln);
        temp.push(c);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,ln,c]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        last_name: last_name,
        color: color,
        setData: setData
    }
}]) 