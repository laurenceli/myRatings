angular.module('myRatings')
.controller('ProductController', ['$http', '$scope', 'DBservice', '$location', '$modal', '$routeParams',
function($http, $scope, DBservice, $location, $modal, $routeParams){
	

	//actually load full details of product
	$scope.searchProduct = function(searchTerm, categoryChosen){
		DBservice.getRatings(searchTerm).then(function(){
			$scope.results = DBservice.ratings;		

			var total = 0;
			//avg score
			for(var i = 0; i < $scope.results.length; i++){
				total += Number($scope.results[i].rating);
			}
			$scope.averageRating = Math.round(total/$scope.results.length);

			console.log("ratings in searchProduct: " + $scope.results);	

			var ratingStats = [];
			for (var i = 1; i <= 5; i++){
				ratingStats[i] = 0;
			}
			for (var i = 0; i < $scope.results.length; i++){
				var res = $scope.results[i];
				ratingStats[res.rating] = ratingStats[res.rating] + 1;				
			}

			if (!(myNewChart === null || myNewChart===undefined)){
				myNewChart.destroy();
			};

			var data = [
			    {
			        value: ratingStats[1],
			        color:"#F7464A",
			        highlight: "#FF5A5E",
			        label: "1 Star"
			    },
			    {
			        value: ratingStats[2],
			        color: "#46BFBD",
			        highlight: "#5AD3D1",
			        label: "2 Stars"
			    },
			    {
			        value: ratingStats[3],
			        color: "#FDB45C",
			        highlight: "#FFC870",
			        label: "3 Stars"
			    },
			    {
			        value: ratingStats[4],
			        color: "#949FB1",
			        highlight: "#A8B3C5",
			        label: "4 Stars"
			    },
			    {
			        value: ratingStats[5],
			        color: "#4D5360",
			        highlight: "#616774",
			        label: "5 Stars"
			    }

			];	

			myNewChart = new Chart(ctx).PolarArea(data, {
			    segmentStrokeColor: "#000000"
			});


		})

		$scope.showResult = true;
	}

	$scope.changeCategory = function(newCategory){
		if (newCategory === 'Movies'){
			$scope.products = movies;
		} else if (newCategory === 'Books'){
			$scope.products = books;
		} else if (newCategory === 'Restaurants'){
			$scope.products = restaurants;
		} else if (newCategory === 'Games'){
			$scope.products = games;
		}
	}





	//Initalization
	//categories and items
	var movies = ["Million Dollar Arm", "22 Jump Street", "If I Stay", "Hurricane Season", "The hangover 3", "Rush", "American Hustle", "When the game stands tall", "Gran Torino", "Invictus", "We're The Millers", "Captain Philips", "The Ides of March", "Ponyo", "Frozen", "Tangeled", "Brave", "The Illusionist", "Monster's University", "Linsanity", "The Hangover", "The Secret Life of Walter Mitty", "Silver Linings Playbook", "The Wolf of Wall Street", "The Departed", "The Lego Movie", "Princess Mononoke", "The Adjustment Bureau", "The Wind Rises", "Spirited Away", "Castle in the Sky", "12 Years a Slave", "Her", "Captain America 2", "42", "Insidious", "Neighbours", "500 Days of Summer", "Edge of Tomorrow", "The Blind Side", "The Way Way Back", "The Intouchables", "The Hangover Part II", "The World's End", "The Fault in our Stars", "Omar", "An Education", "The Notebook", "How to train your dragon 2", "Snowpiercer", "Moneyball", "High School Musical 3", "Dawn of the Planet of the Apes", "Catch me if you can", "Boyhood", "Good Will Hunting", "Chef", "The Grand Budapest Hotel"];
	var books = ["The Hunger Games (The Hunger Games, #1)","Harry Potter and the Order of the Phoenix (Harry Potter, #5)","Twilight (Twilight, #1)","To Kill a Mockingbird","Pride and Prejudice","Gone with the Wind","The Chronicles of Narnia (Chronicles of Narnia, #1-7)","The Giving Tree","Animal Farm","The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)","Wuthering Heights","Memoirs of a Geisha","The Da Vinci Code (Robert Langdon, #2)","The Book Thief","Alice's Adventures in Wonderland & Through the Looking-Glass","Romeo and Juliet","The Time Traveler's Wife","Les Misérables","Lord of the Flies","J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings","Ender's Game (The Ender Quintet, #1)","Crime and Punishment","The Picture of Dorian Gray"];
	var games = ["Flash Point: Fire Rescue","Coup Reformation","SnowDonia","Puerto Rico","Set!","Boursicocotte","Pit","Modern Art","Hanabi","Saboteur","Nuts!","Hive","Love Letter","Coup","Resistance","7 Wonders","Bonanza","Ra","King of Tokyo","Ticket to Ride","Settlers of Catan","Carcassonne","Dominion","Sparticus","Mutants Meeples","Santiago","Blokus","Monopoly","PvZ Risk","Clue","Pandemic","Chess","Mr. Jack","Lost Cities","Alhambra","Cash n Guns","Battle Line","Modern Art Auction","Ghost Blitz","Goblins","Adastra","Munchkin","Jenga","Agricola","Bang the Dice Game"];
	var restaurants = ["Capitano Burgers and Gelatos","Bahmi Boyz","Burrito Boyz","Pizza Nova","Okinomi House","Slab burger","Kyoto Sushi","Kuni Sushi","Ethiopian House","New Generation Sushi","Arisu kbbq","Burrito Banditos","Noodle Bowl","Mother's Dumplings","Queen Mother Cafe","Ding Dong Bakery","Sushi Garden","168 Tea Shop","Chatime Bubble Tea","Freshii","Smokes Poutine","Caffe di Portici","Ginger","Popeyes","Fernandos Hideaway","Bapbo","Taste of China","Bistro 243","Falafel House","Wandas","Coach House","Castle","The Rex","Roll Play Cafe","Duckee","Latinada","Not Just Noodles","Top Sushi","Reposado","Como En Casa","Aroma Espresso Bar","Mr. Sub","Byzantium","Museum Tavern","Nandos","M'Zaar ","Gardiner Museum","Momofoku Noodle House","Sushi Club","The Blake House","Ali Baba","Mom's Korean Food","Kinton Ramen 2","M2M Tea House","Sansotei Ramen","Swiss Chalet","Pizzaiolo","Hodo Kwaja","Buk Chang Dong Soon Tofu","Bru Cafe","Sakura Sushi","New Yorker Deli","Aji Sai Sushi","Crepe it Up","Seven Lives Tacos Y Marisol","Summer’s Sweet Memories","Guu","Manpuku","Tasty Chinese Food","LC Tea House","Milestones","Wow Sushi","Over Easy"];
	$scope.categories = ['Movies', 'Books', 'Restaurants', 'Games'];
  	$scope.showAutoComplete = true;
  	var ctx = document.getElementById("myChart").getContext("2d");
  	var myNewChart;
  	$scope.products = movies;

  	if ($routeParams['name'] == null){
		$scope.categoryChosen = 'Movies';
		$scope.showResult = false;
  	} else{
		$scope.categoryChosen = $routeParams['category'];
		$scope.changeCategory($scope.categoryChosen);
		$scope.showResult = true;
		$scope.searchText = $routeParams['name'];
		$scope.searchProduct($routeParams['name'], $scope.categoryChosen);
  	}

  	$scope.ratings = [{
        current: 5,
        max: 5
    }];

	$scope.goToProduct = function(name, category){
		$location.path('addRating/' + name + '/' + category);
	}
}]);