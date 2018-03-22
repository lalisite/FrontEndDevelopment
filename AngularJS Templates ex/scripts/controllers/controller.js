app.controller("mainController", function ($scope,$http) {

    function Actor(fname, lname, imgUrl, imdbLink, birthday) {
        this.fname = fname;
        this.lname = lname;
        this.imgUrl = imgUrl;
        this.imdbLink = imdbLink;
        this.isSelected = false;
        this.birthday = new Date(birthday);
    }
    $scope.actorPropertiesList = [       
        {
            'label': 'First Name',
            'value': 'fname'
        },
        {
            'label': 'Last Name',
            'value': 'lname'
        },
        {
            'label': 'Birthday',
            'value': 'birthday'
        }
    ];

    $scope.sortTypes = [       
        {
            'label': 'Ascending',
            'value': false
        },
        {
            'label': 'Descending',
            'value': true
        }
    ];

    $scope.filterTypes = ["AND", "OR"];
    $scope.actors = [];
    // var a1 = new Actor('Robert', 'De Niro', 'https://ia.media-imdb.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000134/?ref_=nv_sr_3', '08-19-1943');

    // var a2 = new Actor('Robert', 'Redford', 'https://ia.media-imdb.com/images/M/MV5BMTk1Nzc5MzQyMV5BMl5BanBnXkFtZTcwNjQ5OTA0Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000602/?ref_=nv_sr_1', '08-18-1936');

    // var a3 = new Actor('Dwayne', 'Johnson', 'https://ia.media-imdb.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0425005/?ref_=nv_sr_1', '05-02-1972');

    // var a4 = new Actor('Charlton', 'Heston', 'https://ia.media-imdb.com/images/M/MV5BMTcxMDg1MjYzMV5BMl5BanBnXkFtZTYwMDMxOTE2._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000032/?ref_=tt_ov_st_sm', '10-04-1923')

    //alert(JSON.stringify(a1));
    // $scope.actors.push(a1);
    // $scope.actors.push(a2);
    // $scope.actors.push(a3);
    // $scope.actors.push(a4);

    $scope.name = "";
    $scope.month = 0;

    $http.get('data/actors.json').then(function(response){
        //on success
        for(var i=0;i<response.data.length;i++){
            $scope.addActor(response.data[i].fname,response.data[i].lname,response.data[i].birthday,response.data[i].imgUrl,response.data[i].imdbLink);
        }
    },function(response){
        alert("Error " + response);
    });


    $scope.filterActor = function (actor) {
        // var isFnameMatch =actor.fname.match(/$scope.name/i);
        // var isLnameMatch = actor.fname.match(/$scope.name/i);

        
        var isFnameMatch = actor.fname.toLowerCase().includes($scope.name.toLowerCase());
        var isLnameMatch = actor.fname.toLowerCase().includes($scope.name.toLowerCase());
        var isMonthMatch = (actor.birthday.getMonth() + 1 == $scope.month) || ($scope.month == 0 || $scope.month == undefined);
        return (isFnameMatch || isLnameMatch) && isMonthMatch;

    };

    $scope.convertSelected = function(){
        $scope.selectedOrderTypeVal = ($scope.selectedOrderType == 'true');
    };

    $scope.addActor = function(firstName,lastName,birthday,imgLink,imdbLink){
        var a = new Actor(firstName,lastName,imgLink,imdbLink,birthday);
        $scope.actors.push(a);
    };

    $scope.toggleSelected = function(actor){
        var isSelected = actor.isSelected;        
        resetSelected($scope.actors);
        actor.isSelected=!isSelected;
    };

    function resetSelected(actors){
        for(var i=0;i<actors.length;i++){
            actors[i].isSelected = false;
        }
    };
});