angular.module('myRatings')
.controller('ProductController', ['$http', '$scope', 'DBservice', '$location',
function($http, $scope, DBservice, $location){
	//Initalization
	//categories and items
	var movies = ["Million Dollar Arm", "22 Jump Street", "If I Stay", "Hurricane Season", "The hangover 3", "Rush", "American Hustle", "When the game stands tall", "Gran Torino", "Invictus", "We're The Millers", "Captain Philips", "The Ides of March", "Ponyo", "Frozen", "Tangeled", "Brave", "The Illusionist", "Monster's University", "Linsanity", "The Hangover", "The Secret Life of Walter Mitty", "Silver Linings Playbook", "The Wolf of Wall Street", "The Departed", "The Lego Movie", "Princess Mononoke", "The Adjustment Bureau", "The Wind Rises", "Spirited Away", "Castle in the Sky", "12 Years a Slave", "Her", "Captain America 2", "42", "Insidious", "Neighbours", "500 Days of Summer", "Edge of Tomorrow", "The Blind Side", "The Way Way Back", "The Intouchables", "The Hangover Part II", "The World's End", "The Fault in our Stars", "Omar", "An Education", "The Notebook", "How to train your dragon 2", "Snowpiercer", "Moneyball", "High School Musical 3", "Dawn of the Planet of the Apes", "Catch me if you can", "Boyhood", "Good Will Hunting", "Chef", "The Grand Budapest Hotel"];
	var books = [];
	var games = ["Flash Point: Fire Rescue","Coup Reformation","SnowDonia","Puerto Rico","Set!","Boursicocotte","Pit","Modern Art","Hanabi","Saboteur","Nuts!","Hive","Love Letter","Coup ","Resistance","7 Wonders","Bonanza","Ra","King of Tokyo","Ticket to Ride","Settlers of Catan","Carcassonne","Dominion","Sparticus","Mutants Meeples","Santiago","Blokus","Monopoly","PvZ Risk","Clue","Pandemic","Chess","Mr. Jack","Lost Cities","Alhambra","Cash n Guns","Battle Line","Modern Art Auction","Ghost Blitz","Goblins","Adastra","Munchkin","Jenga","Agricola","Bang the Dice Game"];
	var restaurants = [];
	$scope.products = movies;
	$scope.categories = ['Movies', 'Books', 'Restaurants', 'Games'];
  





	//Autocomplete
	$scope.changeSearch = function(searchTerm){
	}

	//actually load full details of product
	$scope.searchProduct = function(searchTerm, categoryChosen){

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

	$scope.goToProduct = function(name, category){
		$location.path('addRating/' + name + '/' + category);
	}
}]);