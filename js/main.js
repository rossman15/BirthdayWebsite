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
	$scope.list = ["Karen Aldoroty", "Neil Aldoroty", "Penny Ames", "Jen Anello", "Paul Asmar", "Janet Asmar", "John Asmussen", "Philippe Neraud", "Carolinc Augustine", "Lori Augustine", "Suzie Battle", "Robin Bauman", "Joseph Bauman", "Jeremy Belisario", "David House", "Carol Bleau", "Joe Bleau", "Leanna Branson", "Ben Brown", "Robert Bullas", "Julie Bullas", "Cathy Busby", "Ashlee Cabeal", "Doug Cabeal", "Chula Camp", "Dawn Carie", "Sherman Chu", "Michelle Chu", "Al Cicotte", "Kevin Palombo", "Linda Cleveland", "Renay Deeby", "Steve Faraone", "Elaine Deeby", "Gloria Deeby", "Gary Tandberg", "Judy Deeby", "Donna Deeby", "Sarah Deeby", "Alphonse Deeby III", "Alphonse Deeby Jr.", "Glenn Dugas", "Jeffrey Polack", "Billy Dulin", "Gerald Chou", "Mario Falconetti", "Chris Canu", "Phil Feldman", "Lisa Feldman", "Jack Feldman", "Hope Feldman", "Hanna Feldman", "Sheri Folta", "Cass Varner", "Michael Mazzafer", "Ed Beale", "Madouns Family", "Rita George", "Ken Pieschke", "Dan George", "Jill George", "Doug George", "Rosie George", "David George Jr.", "Barbara George", "Chrys Gerlach", "Tom Giammona", "Laurie Giammona", "John Ginty", "Sandra Ginty", "Andy Glass", "Amy Glass", "Marc Gonzalez", "Phil Morgan", "Robbie Grant", "Julie Grant", "Renee Grendow", "Rob Grendow", "Daryl Griffith", "Albert Hagg", "Sarah Hagg", "Scott Hagg", "Sandra Hagg", "Nici Hagg-Poulton", "John Dovin", "Wendy Heilmann", "Greg Knesel", "Arianna Ilabaca", "Gerry Incorvaia-Peterson", "Michael Incorvaia-Peterson", "Laurie Jamieson", "Karen Jensen", "George Julius", "Terry Julius", "Jason Kalajainen", "Josh Shames", "Martina Keinath", "Robert Keinath", "Barbara Kennedy", "Lisa Kinsman", "Larry Kinsman", "Antoinette F. Knorr", "Scott Kricho", "Scott Saladino", "Chelsea LeBaron", "Rick LeBaron", "Ellen Lehman", "Jim Fleig", "Duke Leggett", "Sue Leggett", "Jason Lenhoff", "Brenda Lenhoff", "Alison Lindelien", "Linda Lloyd", "Justin Loustau", "Michael Lynch", "Patti Mallow", "Mary Maier", "Sara Coleman", "Steven Maron", "Suzanna Maron", "Denise McCarty", "Darrell McCarty", "Maxwell McCarty", "Dillon McCarty", "Cody McCarty", "Anthony McCarty", "Kayla McKay", "Torri McKay", "Ross McKay", "Tim McKay", "Carmella McKay", "Tina Meifi", "Isaias Merlin", "Rosalia Merlin", "Paul Menard", "Kristina Menard", "Diane Micheletos", "Greg Margoklis", "Stephanie Michler", "Kirsten Michler", "Mary Michler", "Gerhard Michler", "Lisa Miller", "Patty Oliverio", "Todd Outhouse", "Jeff Taylor", "Allison Owens", "Michelle Papineau", "Les Bazis", "Theresa Pavone", "Jon Peterson", "Lani Elston", "Mike Peterson", "Cathy Peterson", "Wayne Peterson", "Ruth Peterson", "A.J. Peterson", "Kendal Paige Kern", "Steven Petrillo", "Lisa Petrillo", "Austin Phillips", "Ryan Phillips", "Andrea Phillips", "Ed Pierce", "Adam Pierce", "Cody Plott", "Becky Plott", "Mark Podlesney", "Shelley Podlesney", "Betsy Pottruck", "Andy Phillips", "Jane Phillips", "Kay Priebe", "Robert Priebe", "Tracy Priebe", "Ron Priebe", "Dana Priebe", "Morgan Renteria", "Jennie Renteria", "Jeff Renteria", "Liz Renteria", "Jesse Drouillard", "Alyssa Renteria", "Gary Rhyne", "Rick Cunningham", "Iliana Rodriguez", "Harvey Rowen", "Sherry Rowen", "Tina Russo", "Anthony Russo (Chicago)", "Ann Marie Russo", "Anthony Russo", "Emily Russo", "Jim Saigh", "Craig Williams", "Michael Sartor", "Michelle Sartor", "JP Scheller", "Diane Scheller", "Rod Schinnerer", "Maggie Schinnerer", "Mary Schlaf", "Megan Seal", "David Seal", "Maysa Seal", "Jay Semple", "Debbie Semple", "Kelly Sherman", "Chris Lehtonen", "Lisa Sheridan", "Todd Singer", "Zulma Singer", "Todd Slack", "Kristen Slack", "Steven Stemerman", "Suzie Stemerman", "John Stone", "George Vasu", "Lance Strauss", "Betty Strauss", "Diane Syrowski", "Danny Syrowski", "Maddie Syrowski", "Elizabeth Syrowski", "Gloria Tactac", "Erica Tarpinian", "Stephen Head", "Gene Tartaglia", "Jordan Templeton", "Dan Schmitz", "Jason Tracy", "Leslie Tracy", "John Twoney", "Fatima Valles", "Tim Silveira", "Richard Vince Jr.", "Barry Peterson", "Thomas Vince", "Dennis Vince", "Cathy Crum", "Joseph Vince", "Jessica Vince", "Anthony Vince", "Cindy Vince", "Michael Vince", "Richard Vince Sr.", "Vanessa Volkman", "Aaron Volkman", "Chris Wagner", "Lilian Wagner", "Matt Watson", "Molly Watson", "Patrick Sheraton", "Julie Weaver", "Mike Worden", "Donna Worden", "Joe Baxter", "Chris Baxter", "Nathan Baxter", "Jos Benguigui", "Julia Benguigui", "Dora Coca", "Kaitlyn Deeby", "Matt Paquette", "Don Diehl", "Karen Diehl", "James DiGiacinto", "Marianne Flaeger", "Ethan Flaeger", "Jose Flores", "Danielle Flores", "Aaron Goldman", "Stephanie Goldman", "Michael Haas", "Marybeth Haas", "Shannon Millard", "Molly Henricks", "Bernie Pavone", "Craig Pottruck", "Danielle Pottruck", "Jo Renteria", "Carmen Ocho", "Nelson Rodriguez", "Tilde Rodriguez", "Bryan Russo", "Natalie Russo", "Abood Samaan", "Dino Sartor", "Joann Sartor", "Dean Sartor", "Secelia Smith", "Maria Therry", "Shalom Kimble", "Jessica Lepe", "Adam Felson", "Leah Felson", "Kaitlyn Deeby", "Matt Paquette"];
	$scope.pairs = {"Karen Aldoroty": "Neil Aldoroty", "Neil Aldoroty": "Karen Aldoroty", "Paul Asmar": "Janet Asmar", "Janet Asmar": "Paul Asmar", "John Asmussen": "Philippe Neraud", "Philippe Neraud": "John Asmussen", "Carolinc Augustine": "Lori Augustine", "Lori Augustine": "Carolinc Augustine", "Leanna Branson": "Zion & Cade", "Robin Bauman": "Joseph Bauman", "Julie Bullas": "Robert Bullas", "Robert Bullas": "Julie Bullas", "Doug Cabeal": "Ashlee Cabeal", "Michelle Chu": "Sherman Chu", "Sherman Chu": "Michelle Chu", "Al Cicotte": "Kevin Palombo", "Steve Faraone": "Renay Deeby" , "Renay Deeby": "Steve Faraone", "Gary Tandberg": "Gloria Deeby", "Gloria Deeby": "Gary Tandberg", "Gerald Chou": "Billy Dulin", "Lisa Feldman": "Phil Feldman", "Phil Feldman": "Lisa Feldman", "Chris Canu": "Mario Falconetti", "Mario Falconetti": "Chris Canu", "Ed Beale": "Michael Mazzafer", "Michael Mazzafer": "Ed Beale", "Ken Pieschke": "Rita George", "Rita George": "Ken Pieschke", "Jill George": "Dan George", "Dan George": "Jill George", "Barbara George": "David George Jr.", "Laurie Giammona": "Tom Giammona", "Tom Giammona": "Laurie Giammona", "Sandra Ginty": "John Ginty", "John Ginty": "Sandra Ginty", "Phil Morgan": "Marc Gonzalez", "Julie Grant": "Robbie Grant", "Rob Grendow": "Renee Grendow", "Renee Grendow": "Rob Grendow", "Daryl Griffith": "Guest", "Sandra Hagg": "Scott Hagg", "Scott Hagg": "Sandra Hagg", "John Dovin": "Nici Hagg-Poulton", "Greg Knesel": "Wendy Heilmann", "Michael Incorvaia-Peterson": "Gerry Incorvaia-Peterson", "George Julius": "Terry Julius", "Terry Julius": "George Julius", "Josh Shames": "Jason Kalajainen", "Robert Keinath": "Martina Keinath", "Larry Kinsman": "Lisa Kinsman", "Lisa Kinsman": "Larry Kinsman", "Scott Saladino": "Scott Kricho", "Duke Leggett": "Sue Leggett", "Sue Leggett": "Duke Leggett", "Jason Lenhoff": "Brenda Lenhoff", "Brenda Lenhoff": "Jason Lenhoff", "Ellen Lehman": "Jim Fleig", "Jim Fleig": "Ellen Lehman", "Mary Maier": "Sara Coleman", "Steven Maron": "Suzanna Maron", "Darrell McCarty": "Denise McCarty", "Denise McCarty": "Darrell McCarty", "Suzanna Maron": "Steven Maron", "Sara Coleman": "Mary Maier", "Tim McKay": "Carmella McKay", "Carmella McKay": "Tim McKay", "Rosalia Merlin": "Isaias Merlin", "Isaias Merlin": "Rosalia Merlin", "Paul Menard": "Kristina Menard", "Kirsten Michler": "Stephanie Michler", "Stephanie Michler": "Kirsten Michler", "Greg Margoklis": "Diane Micheletos", "Diane Micheletos": "Greg Margoklis", "Kristina Menard": "Paul Menard", "Rick LeBaron": "Chelsea LeBaron", "Gerhard Michler": "Mary Michler", "Jeff Taylor": "Todd Outhouse", "Todd Outhouse": "Jeff Taylor", "Michelle Papineau": "Les Bazis", "Jon Peterson": "Lani Elston", "Mike Peterson": "Cathy Peterson", "Ruth Peterson": "Wayne Peterson", "A.J. Peterson": "Kendal Paige Kern", "Lisa Petrillo": "Steven Petrillo", "Austin Phillips": "Ryan Phillips", "Ryan Phillips": "Austin Phillips", "Cody Plott": "Becky Plott", "Mark Podlesney": "Shelley Podlesney", "Shelley Podlesney": "Mark Podlesney", "Andy Phillips": "Jane Phillips", "Robert Priebe": "Tracy Priebe", "Ron Priebe": "Dana Priebe", "Dana Priebe": "Ron Priebe", "Jeff Renteria": "Liz Renteria", "Jesse Drouillard": "Alyssa Renteria", "Gary Rhyne": "Rick Cunningham", "Rick Cunningham": "Gary Rhyne", "Sherry Rowen": "Harvey Rowen", "Harvey Rowen": "Sherry Rowen", "Emily Russo": "Anthony Russo", "Anthony Russo": "Emily Russo", "Michelle Sartor": "Michael Sartor", "Diane Scheller": "JP Scheller", "JP Scheller": "Diane Scheller", "Maggie Schinnerer": "Rod Schinnerer", "Megan Seal": "Jeremy", "Rod Schinnerer": "Maggie Schinnerer", "Maysa Seal": "David Seal", "Debbie Semple": "Jay Semple", "Chris Lehtonen": "Kelly Sherman", "Zulma Singer": "Todd Singer", "Kristen Slack": "Todd Slack", "Suzie Stemerman": "Steven Stemerman", "George Vasu": "John Stone", "Betty Strauss": "Lance Strauss", "Lance Strauss": "Betty Strauss", "John Stone": "George Vasu", "Steven Stemerman": "Suzie Stemerman", "Stephen Head": "Erica Tarpinian", "Dan Schmitz": "Jordan Templeton", "Jordan Templeton": "Dan Schmitz", "Leslie Tracy": "Jason Tracy", "Tim Silveira": "Fatima Valles", "Barry Peterson": "Richard Vince Jr.", "Cathy Crum": "Dennis Vince", "Dennis Vince": "Cathy Crum", "Cindy Vince": "Anthony Vince", "Anthony Vince": "Cindy Vince", "Vanessa Volkman": "Aaron Volkman", "Lilian Wagner": "Chris Wagner", "Molly Watson": "Matt Watson", "Julie Weaver": "Patrick Sheraton", "Donna Worden": "Mike Worden", "Chris Baxter": "Joe Baxter", "Joe Baxter": "Chris Baxter", "Dora Coca": "Family", "Matt Paquette": "Kaitlyn Deeby", "Don Diehl": "Karen Diehl", "Karen Diehl": "Don Diehl", "Kaitlyn Deeby": "Matt Paquette", "Danielle Flores": "Jose Flores", "Stephanie Goldman": "Aaron Goldman", "Marybeth Haas": "Michael Haas", "Molly Henricks": "Shannon Millard", "Shannon Millard": "Molly Henricks", "Danielle Pottruck": "Craig Pottruck", "Carmen Ocho": "Jo Renteria", "Tilde Rodriguez": "Nelson Rodriguez", "Natalie Russo": "Bryan Russo", "Jessica Lepe": "Shalom Kimble", "Leah Felson": "Adam Felson", "Matt Paquette": "Kaitlyn Deeby", "Kaitlyn Deeby": "Matt Paquette", "Adam Felson": "Leah Felson", "Shalom Kimble": "Jessica Lepe", "Joann Sartor": "Dino Sartor", "Dino Sartor": "Joann Sartor", "Bryan Russo": "Natalie Russo", "Nelson Rodriguez": "Tilde Rodriguez", "Jo Renteria": "Carmen Ocho", "Craig Pottruck": "Danielle Pottruck", "Michael Haas": "Marybeth Haas", "Aaron Goldman": "Stephanie Goldman", "Jose Flores": "Danielle Flores", "Jos Benguigui": "Julia Benguigui", "Julia Benguigui": "Jos Benguigui", "Mike Worden": "Donna Worden", "Patrick Sheraton": "Julie Weaver", "Matt Watson": "Molly Watson", "Chris Wagner": "Lilian Wagner", "Aaron Volkman": "Vanessa Volkman", "Jessica Vince": "RJ", "Richard Vince Jr.": "Barry Peterson", "Fatima Valles": "Tim Silveira", "Jason Tracy": "Leslie Tracy", "Erica Tarpinian": "Stephen Head", "Todd Slack": "Kristen Slack", "Todd Singer": "Zulma Singer", "Kelly Sherman": "Chris Lehtonen", "Jay Semple": "Debbie Semple", "David Seal": "Maysa Seal", "Michael Sartor": "Michelle Sartor", "Craig Williams": "Jim Saigh", "Jim Saigh": "Craig Williams", "Anthony Russo (Chicago)": "Ann Marie Russo", "Ann Marie Russo": "Anthony Russo (Chicago)", "Alyssa Renteria": "Jesse Drouillard", "Liz Renteria": "Jeff Renteria", "Tracy Priebe": "Robert Priebe", "Jane Phillips": "Andy Phillips", "Becky Plott": "Cody Plott", "Steven Petrillo": "Lisa Petrillo", "Kendal Paige Kern": "A.J. Peterson", "Wayne Peterson": "Ruth Peterson", "Cathy Peterson": "Mike Peterson", "Lani Elston": "Jon Peterson", "Les Bazis": "Michelle Papineau", "Patty Oliverio": "Guest", "Mary Michler": "Gerhard Michler", "Chelsea LeBaron": "Rick LeBaron", "Scott Kricho": "Scott Saladino", "Martina Keinath": "Robert Keinath", "Jason Kalajainen": "Josh Shames", "Gerry Incorvaia-Peterson": "Michael Incorvaia-Peterson", "Wendy Heilmann": "Greg Knesel", "Nici Hagg-Poulton": "John Dovin", "Sarah Hagg": "Albert Hagg", "Albert Hagg": "Sarah Hagg", "Robbie Grant": "Julie Grant", "Marc Gonzalez": "Phil Morgan", "David George Jr.": "Barbara George", "Cass Varner": "Sheri Folta", "Sheri Folta": "Cass Varner", "Billy Dulin": "Gerald Chou", "Jeffrey Polack": "Glenn Dugas", "Glenn Dugas": "Jeffrey Polack", "Elaine Deeby": "Peter", "Kevin Palombo": "Al Cicotte", "Ashlee Cabeal": "Doug Cabeal", "Joseph Bauman": "Robin Bauman", "Jeremy Belisario": "David House", "David House": "Jeremy Belisario", "Carol Bleau": "Joe Bleau", "Joe Bleau": "Carol Bleau"};
	$scope.fridayList = ["Penny Ames", "Paul Asmar", "Janet Asmar", "John Asmussen", "Philippe Neraud", "Carolinc Augustine", "Lori Augustine", "Jeremy Belisario", "David House", "Carol Bleau", "Joe Bleau", "Leanna Branson", "Ashlee Cabeal", "Doug Cabeal", "Chula Camp", "Dawn Carie", "Sherman Chu", "Michelle Chu", "Linda Cleveland", "Renay Deeby", "Steve Faraone", "Elaine Deeby", "Gloria Deeby", "Gary Tandberg", "Judy Deeby", "Donna Deeby", "Sarah Deeby", "Alphonse Deeby III", "Alphonse Deeby Jr.", "Glenn Dugas", "Jeffrey Polack", "Billy Dulin", "Gerald Chou", "Mario Falconetti", "Chris Canu", "Phil Feldman", "Lisa Feldman", "Sheri Folta", "Cass Varner", "Madouns Family", "Rita George", "Ken Pieschke", "Dan George", "Jill George", "Doug George", "Rosie George", "David George Jr.", "Barbara George", "Chrys Gerlach", "John Ginty", "Sandra Ginty", "Andy Glass", "Amy Glass", "Robbie Grant", "Julie Grant", "Renee Grendow", "Rob Grendow", "Albert Hagg", "Sarah Hagg", "Scott Hagg", "Sandra Hagg", "Nici Hagg-Poulton", "John Dovin", "Gerry Incorvaia-Peterson", "Michael Incorvaia-Peterson", "Laurie Jamieson", "Karen Jensen", "George Julius", "Terry Julius", "Barbara Kennedy", "Lisa Kinsman", "Larry Kinsman", "Antoinette F. Knorr", "Scott Kricho", "Scott Saladino", "Chelsea LeBaron", "Rick LeBaron", "Ellen Lehman", "Jim Fleig", "Duke Leggett", "Sue Leggett", "Jason Lenhoff", "Brenda Lenhoff", "Alison Lindelien", "Justin Loustau", "Michael Lynch", "Patti Mallow", "Denise McCarty", "Darrell McCarty", "Maxwell McCarty", "Dillon McCarty", "Cody McCarty", "Anthony McCarty", "Kayla McKay", "Torri McKay", "Ross McKay", "Tim McKay", "Carmella McKay", "Stephanie Michler", "Kirsten Michler", "Mary Michler", "Gerhard Michler", "Lisa Miller", "Todd Outhouse", "Jeff Taylor", "Theresa Pavone", "Jon Peterson", "Lani Elston", "Mike Peterson", "Cathy Peterson", "Wayne Peterson", "Ruth Peterson", "A.J. Peterson", "Kendal Paige Kern", "Steven Petrillo", "Lisa Petrillo", "Austin Phillips", "Ryan Phillips", "Andrea Phillips", "Ed Pierce", "Adam Pierce", "Cody Plott", "Becky Plott", "Mark Podlesney", "Shelley Podlesney", "Betsy Pottruck", "Andy Phillips", "Jane Phillips", "Kay Priebe", "Robert Priebe", "Tracy Priebe", "Ron Priebe", "Dana Priebe", "Morgan Renteria", "Jennie Renteria", "Jeff Renteria", "Liz Renteria", "Jesse Drouillard", "Alyssa Renteria", "Gary Rhyne", "Rick Cunningham", "Iliana Rodriguez", "Harvey Rowen", "Sherry Rowen", "Tina Russo", "Anthony Russo (Chicago)", "Ann Marie Russo", "Jim Saigh", "Craig Williams", "Michael Sartor", "Michelle Sartor", "Rod Schinnerer", "Maggie Schinnerer", "Mary Schlaf", "Megan Seal", "David Seal", "Maysa Seal", "Jay Semple", "Debbie Semple", "Kelly Sherman", "Chris Lehtonen", "Lisa Sheridan", "Todd Singer", "Zulma Singer", "Todd Slack", "Kristen Slack", "Steven Stemerman", "Suzie Stemerman", "John Stone", "George Vasu", "Lance Strauss", "Betty Strauss", "Diane Syrowski", "Danny Syrowski", "Maddie Syrowski", "Elizabeth Syrowski", "Gloria Tactac", "Gene Tartaglia", "Jordan Templeton", "Dan Schmitz", "John Twoney", "Fatima Valles", "Tim Silveira", "Richard Vince Jr.", "Barry Peterson", "Thomas Vince", "Dennis Vince", "Cathy Crum", "Joseph Vince", "Jessica Vince", "Anthony Vince", "Cindy Vince", "Michael Vince", "Richard Vince Sr.", "Vanessa Volkman", "Aaron Volkman", "Chris Wagner", "Lilian Wagner", "Matt Watson", "Molly Watson", "Patrick Sheraton", "Julie Weaver", "Mike Worden", "Donna Worden", "Joe Baxter", "Chris Baxter", "Nathan Baxter", "Jos Benguigui", "Julia Benguigui", "Dora Coca", "James DiGiacinto", "Aaron Goldman", "Stephanie Goldman", "Bernie Pavone", "Craig Pottruck", "Danielle Pottruck", "Abood Samaan", "Dino Sartor", "Joann Sartor", "Maria Therry"];

    //For drop-down list
	$scope.matches = [];

    //Variables for showing and hiding form elements
    $scope.NameForm = {
        show: true,
        error: false
    };
    $scope.RSVPSubmission = {
        success: false,
        error: false
    };
    $scope.RSVPForm = {
        show: false,
        friday: false
    };
    $scope.Guest = {
        show: false,
        sameRSVP: false,
        diffRSVP: false
    };
	$scope.addGuest = false;
	$scope.diffRSVPForGuest = false;
	


    //Event Handlers
	$scope.selectName = function (name) {
		$scope.user = name;
		$scope.matches = [];
	};

	$scope.RSVPForGuestYes = function () {
		$scope.Guest.sameRSVP = true;
		$scope.showGuestOptionNo = false;
        $scope.addGuest = true;
	};
	$scope.RSVPForGuestNo = function () {
		$scope.Guest.sameRSVP = false;
		$scope.showGuestOptionYes = false;
		$scope.addGuest = false;
		$scope.Guest.diffRSVP = false;
		$scope.diffRSVPForGuest = false;
	};
	$scope.guestSameYes = function () {
		$scope.addGuest = true;
		$scope.guestSameDaysNo = false;
		$scope.Guest.diffRSVP = false;
		$scope.diffRSVPForGuest = false;
	};
	$scope.guestSameNo = function () {
        $scope.addGuest = false;
		$scope.Guest.diffRSVP = true;
		$scope.diffRSVPForGuest = true;
		$scope.guestSameDaysYes = false;
	};
	$scope.submitRSVP= function () {
		var extraName = "none";
		if($scope.user in $scope.pairs) {
			extraName = $scope.pairs[$scope.user];
		}
 		$scope.RSVPForm.show = false;
 		$scope.Guest.sameRSVP = false;
		$scope.Guest.show = false;
		$scope.Guest.diffRSVP = false;
		//Guest has same RSVP or there is no plus 1
		$http.get("ajax/addRSVP.php?name=" + $scope.user + "&friday=" + $scope.friday + "&saturday=" + $scope.saturday + "&sunday=" + $scope.sunday
			       + "&extraUser=" + $scope.addGuest + "&extraUserName=" + extraName + "&accomodations=" + $scope.accomodations + "&email=" + $scope.email)
		.success(function(data){
 			console.log("success: " + data);
 			$scope.RSVPSubmission.success = true;
 		})
 		.error(function(data) {
 			console.log("error");
 			$scope.RSVPSubmission.error = true;
 		});
 		//Guest has different RSVP
 		if($scope.diffRSVPForGuest) {
	 		$http.get("ajax/addRSVP.php?name=" + $scope.user + "&friday=" + $scope.guestFriday + "&saturday=" + $scope.guestSaturday + "&sunday=" + $scope.guestSunday
				       + "&extraUser=" + "guest" + "&extraUserName=" + extraName + "&accomodations=" + $scope.accomodations + "&email=" + $scope.email)
			.success(function(data){
	 			console.log("guest success: " + data);
	 			$scope.RSVPSubmission.success = true;
	 		})
	 		.error(function(data) {
	 			console.log("guest error");
	 			$scope.RSVPSubmission.error = true;
	 		});
	 	}
	};

	$scope.submitName = function () {
		if($scope.list.indexOf($scope.user) > -1) {
			if($scope.fridayList.indexOf($scope.user) > -1) {
				$scope.RSVPForm.friday = true;
			}
			$scope.RSVPForm.show = true;
			$scope.NameForm.show = false;
			if($scope.user in $scope.pairs) {
				$scope.Guest.show = true;
			}
			$scope.NameForm.error = false;
		} else {
			$scope.NameForm.error = true;
		}
	};

 	$scope.findUsers = function () {

 		$scope.NameForm.error = false;
 		
 		$scope.matches = [];
		if($scope.user == "")
  			return;
  		var myKey = $scope.user.toLowerCase();

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
        			if(search2_user2 && ($scope.matches.indexOf($scope.list[j]) < 0)) {
        				$scope.matches.push($scope.list[j]);
        			}
				}
				if(search1_user2) {
        			if(search2_user1 && ($scope.matches.indexOf($scope.list[j]) < 0)) {
        				$scope.matches.push($scope.list[j]);
        			}
				}
        	}
        	if(myKey.length == 1) {
        		if(search1_user1 && ($scope.matches.indexOf($scope.list[j]) < 0))
        			$scope.matches.push($scope.list[j]);
				if(search1_user2 && ($scope.matches.indexOf($scope.list[j]) < 0))
        			$scope.matches.push($scope.list[j]);
        	}

        }
    };
});