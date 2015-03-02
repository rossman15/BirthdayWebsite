var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "MyController"})
    // Pages
    .when("/rsvp", {templateUrl: "partials/rsvp.html", controller: "MyController"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "MyController"});

    $locationProvider.html5Mode(true);
}]);

app.controller('MyController', function ($scope, $http) {
	$scope.list = ["Karen Aldoroty", "Neil Aldoroty", "Penny Ames", "Jen Anello", "Paul Asmar", "Janet Asmar", "John Asmussen", "Philippe Neraud", "Carolinc Augustine", "Lori Augustine", "Suzie Battle", "Robin Bauman", "Joseph Bauman", "Jeremy Belisario", "David House", "Carol Bleau", "Joe Bleau", "Leanna Branson", "Ben Brown", "Robert Bullas", "Julie Bullas", "Ashlee Cabeal", "Doug Cabeal", "Chula Camp", "Dawn Carie", "Sherman Chu", "Michelle Chu", "Al Cicotte", "Kevin Palombo", "Linda Cleveland", "Renay Deeby", "Steve Faraone", "Elaine Deeby", "Gloria Deeby", "Gary Tandberg", "Donna Deeby", "Sarah Deeby", "Alphonse Deeby III", "Alphonse Deeby Jr.", "Glenn Dugas", "Jeffrey Polack", "Billy Dulin", "Gerald Chou", "Mario Falconetti", "Chris Canu", "Phil Feldman", "Lisa Feldman", "Jack Feldman", "Hope Feldman", "Hanna Feldman", "Sheri Folta", "Cass Varner", "Michael Mazzafer", "Ed Beale", "Madouns Family", "Rita George", "Ken Pieschke", "Dan George", "Jill George", "Doug George", "Rosie George", "David George Jr.", "Barbara George", "Chrys Gerlach", "John Ginty", "Sandra Ginty", "Andy Glass", "Amy Glass", "Marc Gonzalez", "Phil Morgan", "Robbie Grant", "Julie Grant", "Renee Grendow", "Rob Grendow", "Daryl Griffith", "Albert Hagg", "Sarah Hagg", "Scott Hagg", "Sandra Hagg", "Nici Hagg-Poulton", "John Dovin", "Wendy Heilmann", "Clive Owen", "Arianna Ilabaca", "Gerry Incorvaia-Peterson", "Michael Incorvaia-Peterson", "John Jamieson", "Laurie Jamieson", "Karen Jensen", "Julius", "Jason Kalajainen", "Josh Shames", "Martina Keinath", "Robert Keinath", "Barbara Kennedy", "Lisa Kinsman", "Larry Kinsman", "Antoinette F. Knorr", "Scott Kricho", "Scott Saladino", "Chelsea LeBaron", "Rick LeBaron", "Lehman", "Leggett", "Lenhoff", "Lindelien", "Lloyd", "Loustau", "Lynch", "Mallow", "Maier", "Maron", "McCarty", "McCarty", "McCarty", "McCarty", "McCarty", "McKay", "McKay", "McKay", "McKay", "Meifi", "Menard", "Micheletos", "Michler", "Michler", "Michler", "Miller", "Oliverio", "Outhouse", "Papineau", "Pavone", "Peterson", "Peterson", "Peterson", "Peterson", "Petrillo", "Phillips", "Phillips", "Pierce", "Pierce", "Plott", "Podlesney", "Pottruck", "Phillips", "Priebe", "Priebe", "Priebe", "Renteria", "Renteria", "Renteria", "Drouillard", "Rhyne", "Rodriguez", "Rowen", "Russo", "Russo", "Russo", "Saigh", "Sartor", "Scheller", "Schinnerer", "Schlaf", "Seal", "Seal", "Semple", "Sherman", "Singer", "Slack", "Stemerman", "Stone", "Strauss", "Syrowski", "Syrowski", "Syrowski", "Syrowski", "Tactac", "Tarpinian", "Tartaglia", "Templeton", "Tracy", "Twoney", "Valles", "Vince Jr.", "Vince", "Vince", "Vince", "Vince", "Vince", "Vince", "Vince Sr.", "Volkman", "Wagner", "Watson", "Sheraton", "Worden"];
	$scope.pairs = {"Karen Aldoroty": "Neil Aldoroty", "Neil Aldoroty": "Karen Aldoroty", "Paul Asmar": "Janet Asmar", "Janet Asmar": "Paul Asmar", "John Asmussen": "Philippe Neraud", "Philippe Neraud": "John Asmussen", "Carolinc Augustine": "Lori Augustine", "Lori Augustine": "Carolinc Augustine", "Robin Bauman": "Joseph Bauman", "Julie Bullas": "Robert Bullas", "Robert Bullas": "Julie Bullas", "Doug Cabeal": "Ashlee Cabeal", "Michelle Chu": "Sherman Chu", "Sherman Chu": "Michelle Chu", "Al Cicotte": "Kevin Palombo", "Steve Faraone": "Renay Deeby" , "Renay Deeby": "Steve Faraone", "Gary Tandberg": "Gloria Deeby", "Gloria Deeby": "Gary Tandberg", "Gerald Chou": "Billy Dulin", "Lisa Feldman": "Phil Feldman", "Phil Feldman": "Lisa Feldman", "Chris Canu": "Mario Falconetti", "Mario Falconetti": "Chris Canu", "Ed Beale": "Michael Mazzafer", "Michael Mazzafer": "Ed Beale", "Ken Pieschke": "Rita George", "Rita George": "Ken Pieschke", "Jill George": "Dan George", "Dan George": "Jill George", "Barbara George": "David George Jr.", "Sandra Ginty": "John Ginty", "John Ginty": "Sandra Ginty", "Phil Morgan": "Marc Gonzalez", "Julie Grant": "Robbie Grant", "Rob Grendow": "Renee Grendow", "Renee Grendow": "Rob Grendow", "Daryl Griffith": "Guest", "Sandra Hagg": "Scott Hagg", "Scott Hagg": "Sandra Hagg", "John Dovin": "Nici Hagg-Poulton", "Clive Owen": "Wendy Heilmann", "Michael Incorvaia-Peterson": "Gerry Incorvaia-Peterson", "Laurie Jamieson": "John Jamieson", "John Jamieson": "Laurie Jamieson", "Josh Shames": "Jason Kalajainen", "Robert Keinath": "Martina Keinath", "Larry Kinsman": "Lisa Kinsman", "Lisa Kinsman": "Larry Kinsman", "Scott Saladino": "Scott Kricho", "Rick LeBaron": "Chelsea LeBaron", "Chelsea LeBaron": "Rick LeBaron", "Scott Kricho": "Scott Saladino", "Martina Keinath": "Robert Keinath", "Jason Kalajainen": "Josh Shames", "Gerry Incorvaia-Peterson": "Michael Incorvaia-Peterson", "Wendy Heilmann": "Clive Owen", "Nici Hagg-Poulton": "John Dovin", "Sarah Hagg": "Albert Hagg", "Albert Hagg": "Sarah Hagg", "Robbie Grant": "Julie Grant", "Marc Gonzalez": "Phil Morgan", "David George Jr.": "Barbara George", "Cass Varner": "Sheri Folta", "Sheri Folta": "Cass Varner", "Billy Dulin": "Gerald Chou", "Jeffrey Polack": "Glenn Dugas", "Glenn Dugas": "Jeffrey Polack", "Elaine Deeby": "Peter", "Kevin Palombo": "Al Cicotte", "Ashlee Cabeal": "Doug Cabeal", "Joseph Bauman": "Robin Bauman", "Jeremy Belisario": "David House", "David House": "Jeremy Belisario", "Carol Bleau": "Joe Bleau", "Joe Bleau": "Carol Bleau"}

	$scope.matches = [];

	$scope.showName = true;
	$scope.thankYou = false;
	$scope.nameError = false;
	$scope.showFriday = false;
	$scope.showRSVP = false;
	$scope.showGuest = false;
	
	$scope.selectName = function (name) {
		$scope.user = name;
		$scope.matches = [];
	};


	$scope.submitRSVP= function () {
		var extraName = "none";
		if($scope.user in $scope.pairs) {
			extraName = $scope.pairs[$scope.user];
		}
		
		$http.get("ajax/addRSVP.php?name=" + $scope.user + "&friday=" + $scope.friday + "&saturday=" + $scope.saturday + "&sunday=" + $scope.sunday
			       + "&extraUser=" + $scope.yes + "&extraUserName=" + extraName + "&accomodations=" + $scope.accomodations)
		.success(function(data){
 			console.log("success: " + data);
 			$scope.thankYou = true;
 			$scope.showRSVP = false;
 		})
 		.error(function(data) {
 			console.log("error");
 		});
	};

	$scope.submitName = function () {
		if($scope.list.indexOf($scope.user) > -1) {
			$scope.showRSVP = true;
			$scope.showName = false;
			if($scope.user in $scope.pairs) {
				$scope.showGuest = true;
			}
			$scope.nameError = false;
		} else {
			$scope.nameError = true;
		}
	};

 	$scope.findUsers = function () {
 		$scope.matches = [];

  		var myKey = $scope.user.toLowerCase();
  		if(myKey == "")
  			return;

        // seperate it into an array of distinct words by spaces and
        myKey = myKey.split(" ");
		
        // compare it to the lowercase version of each name
        var curName;
        
        for (var j = 0; j < $scope.list.length; j++) {
        	var search1_user1 = false;
        	var search1_user2 = false;
        	var search2_user1 = false;
        	var search2_user2 = false;
        	for (var i = 0; i < myKey.length; i++) {
		        curName = $scope.list[j].split(" ");
		        for (var m = 0; m < curName.length; m++) {
		            curName[m] = curName[m].toLowerCase();
		            match = true;
		            for(var x = 0; x < myKey[i].length; ++x) {
			        	if (myKey[i][x] !== curName[m][x])
			        		match = false;
				    }
				    if(match) {
						if(i === 0) {
			    			if(m === 0)
			    				search1_user1 = true;
			    			else
			    				search1_user2 = true;
			    		}else {
			    			if(m === 0)
			    				search2_user1 = true;
			    			else
			    				search2_user2 = true;
			    		}
	        		} 
		        }
        	}	
        	if(myKey.length == 2) {
        		if(search1_user1) {
        			if(search2_user2) {
        				$scope.matches.push($scope.list[j]);
        			}
				}
				if(search1_user2) {
        			if(search2_user1) {
        				$scope.matches.push($scope.list[j]);
        			}
				}
        	}
        	if(myKey.length == 1) {
        		if(search1_user1)
        			$scope.matches.push($scope.list[j]);
				if(search1_user2)
        			$scope.matches.push($scope.list[j]);
        	}

        }
    };
});