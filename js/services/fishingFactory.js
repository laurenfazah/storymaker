angular.module('BSG').factory('fishingFactory', ['$q',function($q) {
    
    var user = [];

    var name, fav_color, imaginary_pet_name;

    var setData = function(n, fc, ip) {
        var temp = [];
        temp.push(n);
        temp.push(fc);
        temp.push(ip);

        angular.copy(temp, user);
        
        var deferred = $q.defer();
        deferred.resolve([n,fc,ip]);
        return deferred.promise;
    }

    return {
        user: user,
        name: name,
        fav_color: fav_color,
        imaginary_pet_name: imaginary_pet_name,
        setData: setData
    }
}]) 