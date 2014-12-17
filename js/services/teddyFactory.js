angular.module('BSG').factory('teddyFactory', ['$q',function($q) {
    
    var user = [];

    var name, fav_animal, toy_name;

    var setData = function(n, fa, tn) {
        var temp = [];
        temp.push(n);
        temp.push(fa);
        temp.push(tn);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,fa,tn]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        fav_animal: fav_animal,
        toy_name: toy_name,
        setData: setData
    }
}]) 