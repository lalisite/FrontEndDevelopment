//@ts-check
$(function () {
    function Car(brand, model, km, year) {
        this.brand = brand;
        this.model = model;
        this.km = km;
        this.year = year;
        this.kmPerYear = function () {
            return (this.km / (new Date().getFullYear() - this.year));
        };
    };

    var myCars = [];

    $("#add-car-btn").click(function () {
        
        var brand = $("#brand").val();        
        var model = $("#model").val();
        var km = parseInt($("#km").val());
        var year = parseInt($("#year").val());

        var newCar = new Car(brand, model, km, year);
        //myCars.push(newCar);        

        var tableRow = "<tr><td>" + newCar.brand + "</td><td>" + newCar.model + "</td><td>" + newCar.km + "</td><td>" + newCar.year + "</td><td>" + newCar.kmPerYear() + "</td></tr>";        

        $(".car-list").append(tableRow);

        var brand = $("#brand").val("");        
        var model = $("#model").val("");
        var km = $("#km").val("");
        var year = $("#year").val("");
    });
});    
