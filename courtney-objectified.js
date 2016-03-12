
var courtney = {
	name: "Courtney",
	nickname: "Courtney",
	hometown: "Middlebury, Vermont",
	placeOfResidence: "South Minneapolis, way too close to Hiawatha Ave",
	biggestSecret: "I hate Jurassic Park",
	redemption1: "I can do the moon walk",
	redemption2: "I can whistle like an angel",
	redemption3: "I do a good loon impression",
	weakness1: function animals (legs){
		if(legs <=5) {
			return "awwww! whojaboojawoowoo?"
		}else{
			return "you will be going outside, now."
		}
	},
	weakness2: "beer",
	cat1: {
		name: "Harry", 
		nickname: "Harrison McFluff",
		color: "black",
		occupation: "being fluffy"
	},
	cat2: {
		name: "Eve",
		nickname: "princess doofus",
		color: "creme brulee",
		occupation: "shedding"
	},
	dog: {
		name: "Kato",
		nickname: "Mr. Potato Head",
		color: "black",
		occupation: "Got any food? Those socks will do."
	},
	spouse: {
		name: "Alex",
		nickname: "DO YOUR DISHES!!!",
		color: "skin",
		occupation: "Software Engineer"
	}
}

console.log(courtney.biggestSecret + ", but " + courtney.redemption3 + ".");
console.log("My pets' names are " + courtney.cat1.name + ", " + courtney.cat2.name + ", and " + courtney.dog.name + ".");
console.log("Kitty! " + courtney.weakness1(4));
console.log("Is that a... millipede?? OMG. " + courtney.weakness1(500));