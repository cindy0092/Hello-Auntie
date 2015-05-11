// (function() {
//   var app = angular.module('helloAuntie', ['store-directives']);

  //data acquisition from http 
  /*
  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('src/store-products.json').success(function(data){
      store.products = data;
    });
  }]
  );*/

	//instead this is declared internally
	// app.controller('StoreController', function(){
	// var store = this;
	// store.products = [	{
	// 						"name": "Dress",
	// 						"description": "100% cotton, free size, handmade item",
	// 						"price": 30.99,
	// 						"images":"image/dress.jpg",
	// 						"reviews": []
	// 					},{
	// 						"name": "Rainbow Short",
	// 						"description": "Size: M/S, jeans quality",
	// 						"price": 20,
	// 						"images": "image/short.jpg",
	// 						"reviews": []
	// 					},{
	// 						"name": "Shirt",
	// 						"description": "Size: M/S, jeans quality",
	// 						"price": 15.50,
	// 						"images": "image/shirt.jpg",
	// 						"reviews": []
	// 					}
	// 					];
	// });
 //  app.controller('ReviewController', function() {
 //    this.review = {};

 //    this.addReview = function(product) {
 //      product.reviews.push(this.review);

 //      this.review = {};
 //    };
//   });
//   app.controller('productTabs', function(){
//   	store.tab = 1;

//     store.isSet = function(checkTab) {
//     	return this.tab === checkTab;
//     };
//     store.setTab = function(activeTab) {
//     	this.tab = activeTab;
//     };
//   });
// })();
(function (){

	var updateTotals = function(){
       	totals = 0;
       	for (var i=0;i<fashion.length;i++){
        	totals += fashion[i].quantity * fashion[i].price;
       	}
       	alert("Your total is "+totals);
       	return totals;
    }

	var app = angular.module('helloAuntie', []);
	app.controller('StoreController', function(){
		this.products = fashion;
		this.total = 0;
		this.overAllTotal = 10;
		
		//This function calculates the user's total and stores it in this.totals

    	//Finally we add an event to be called every time one of the quantities on one of the products is changed
    	$('#calculateButton').on('click', function() {
    		console.log("total gets updated");
        	updateTotals();
    	});
	});
	//create controller for tab option
	app.controller('TabController', function(){
    	this.tab = 1;
    this.setTab = function(newValue){
      this.tab = newValue;
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
	//controller for review tab
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			//var d = new Date();
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	//adding + subtrating quantity 
	// app.controller('RemoveCtrl', function(index){
	// 	this.products.splice(index, 1);
	// });
	// this.products.remove = function(index){
	// 	this.products.splice(index, 1);
	// }
	// this.products.add = function(item){
	// 	this.products.quantity += 1;
	// }
	// this.products.sub = function(item){
	// 	this.products.quantity -= 1;
	// }
	//all the products' info
	var fashion =[{
		name: 'Dress',
		description: "100% cotton, free size, handmade item",
		quantity: 0,
		total: 0,
		price: 30.99,
		images:"image/dress.jpg",
		reviews: [{
			stars: 5,
			body: "The most beautiful dress ever!",
			author: "hotGirl@angular.com"
		},{
			stars: 3,
			body: "The dress is very pretty, but the size is smaller than I expected",
			author: "fatgirl@angular.com"
		}]
	},{
		name: 'Rainbow Short',
		description: "Size: M/S, jeans quality",
		quantity: 0,
		total: 0,
		price: 20,
		images: "image/short.jpg",
		reviews: [{
			stars: 8,
			body: "Best outfit for coachella!",
			author: "hippies@angular.com"
		},{
			stars: 1,
			body: "after I washed it, the color was just fading, I am so disappointed",
			author: "disappointed@angular.com"
		},{
			stars: 3,
			body: "the quality is just ok, but hey 20$, what do you expect?",
			author: "feelOkcustomer@angular.com"
		}]
	},{
		name: 'Shirt',
		description: "Size: M/S, free size",
		quantity: 0,
		total: 0,
		price: 15.50,
		images: "image/shirt.jpg",
		reviews: [{
			stars: 1,
			body: "Worst quality ever!",
			author: "socheap@angular.com"
		}]
	}];
})();
