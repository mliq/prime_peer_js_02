function Person (customerId, areaCode, numberOfPizza, numberOfRanch){
	this.customerId =  customerId;
	this.areaCode = areaCode;

	if(areaCode === 1){
		this.areaCode = 612;
	}else if (areaCode === 2){
		this.areaCode = 952;
	}else{
		this.areaCode = 651;
	};
	this.numberOfPizza = numberOfPizza;
	this.numberOfRanch = numberOfRanch;
	
	this.rating = function(){
		return this.numberOfPizza - this.numberOfRanch;
	};

	if (this.areaCode === 612){
		this.city = "Minneapolis";
	} else if (this.areaCode === 952){
		this.city = "Bloomington";
	} else {
		this.city = "St. Paul";
	};

	this.print = function(){
		console.log("Customer ID: " + this.customerId + "\nArea Code: " + this.areaCode + "\nCity: " + this.city + "\nNumber of Pizza: " + this.numberOfPizza + "\nNumber of Ranch: " + this.numberOfRanch + "\nRating: " + this.rating());
	}
}

var i = 0;
var people = [];

for(i; i < 20; i++){
	people[i] = new Person(randomNumber(1000,4000),randomNumber(1,3),randomNumber(5,10),randomNumber(1,5));
	people[i].print();
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}