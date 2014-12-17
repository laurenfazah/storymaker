angular.module('BSG').factory('beachFactory', ['$q',function($q) {
    
    var user = [];

    var name, fav_food, ice_cream_flavor;

    var setData = function(n, ff, ic) {
        var temp = [];
        temp.push(n);
        temp.push(ff);
        temp.push(ic);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,ff,ic]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        fav_food: fav_food,
        ice_cream_flavor: ice_cream_flavor,
        setData: setData
    }
}]) 