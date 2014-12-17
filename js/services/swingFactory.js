angular.module('BSG').factory('swingFactory', ['$q',function($q) {
    
    var user = [];

    var name, fav_color, friend_name;

    var setData = function(n, fc, fn) {
        var temp = [];
        temp.push(n);
        temp.push(fc);
        temp.push(fn);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,fc,fn]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        fav_color: fav_color,
        friend_name: friend_name,
        setData: setData
    }
}]) 