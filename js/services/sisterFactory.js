angular.module('BSG').factory('sisterFactory', ['$q',function($q) {
    
    var user = [];

    var name, fav_toy, brother_or_sister;

    var setData = function(n, ft, bs) {
        var temp = [];
        temp.push(n);
        temp.push(ft);
        temp.push(bs);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,ft,bs]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        fav_toy: fav_toy,
        brother_or_sister: brother_or_sister,
        setData: setData
    }
}]) 