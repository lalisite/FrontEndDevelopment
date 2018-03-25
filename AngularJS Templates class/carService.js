app.factory("carService", function ($log, $http, $q) {

    var cars = [];
    var wasEverLoaded = false;

    function Car(brand, model, year, km, testDate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        //this.mile = convert.distance(this.km,"KM","MILE");//Math.round(convert.km2Mile(km));
        this.testDate = new Date(testDate);
        //this.selected = false;
        this.kmPerYear = function () {
            return Math.round(this.km / (new Date().getFullYear() - this.year));
        };
    }

    // loads cars to the cars array async
    function load() {
        var async = $q.defer();

        if(wasEverLoaded){
            async.respolve();
        }else{
            $http.get("cars.json").then(function (response) {
                //on success
    
                //cleans the array
                cars.splice(0, cars.length);
                $log.debug("CARSAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    cars.push(new Car(response.data[i].brand, response.data[i].model, response.data[i].year, response.data[i].km, response.data[i].testDate));
                }
                wasEverLoaded = true;
                async.resolve();
    
            }, function (response) {
                //on error
                $log.error("CARAPP: " + +JSON.stringify(response));
                async.reject();
            });
        }

        return async.promise;
    };

    function addCar(brand, model, year, km, testDate) {
        var async = $q.defer();

        var c = new Car(brand, model, year, km, testDate);
        cars.push(c);
        async.resolve();

        return async.promise;
    };

    return {
        load: load,
        cars: cars,
        addCar : addCar
    };
});