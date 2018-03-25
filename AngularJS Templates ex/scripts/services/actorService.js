app.factory("actorService", function ($log, $http, $q) {

    var actors = [];
    var wereLoaded = false;

    function Actor(fname, lname, imgUrl, imdbLink, birthday) {
        this.fname = fname;
        this.lname = lname;
        this.imgUrl = imgUrl;
        this.imdbLink = imdbLink;
        this.isSelected = false;
        this.birthday = new Date(birthday);
    }

    function load() {
        var async = $q.defer();
        if (wereLoaded) {
            async.resolve();
        } else {
            $http.get('data/actors.json').then(function (response) {
                $log.debug(response);
                actors.splice(0, actors.length);
                //on success
                for (var i = 0; i < response.data.length; i++) {
                    addActor(response.data[i].fname, response.data[i].lname, response.data[i].birthday, response.data[i].imgUrl, response.data[i].imdbLink);
                }
                async.resolve();

            }, function (response) {
                $log("Error " + response);
                async.reject();
            });
        }


        return async.promise;
    };

    function addActor(firstName, lastName, birthday, imgLink, imdbLink) {
        var async = $q.defer();
        try {
            var a = new Actor(firstName, lastName, imgLink, imdbLink, birthday);
            actors.push(a);
            async.resolve();
        } catch (err) { 
            async.reject(err);
        }
        return async.promise;
    };

    return {
        load: load,
        actors: actors,
        addActor:addActor
    }

});