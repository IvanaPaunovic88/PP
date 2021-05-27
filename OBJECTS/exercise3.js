

/*
4.	Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of 
ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared for 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/

function CulinaryRecipe(name, type, compl, ingrid, prepTime, instruction) {
        this.name1 = name;
        this.typeOfCuisine= type;
        this.comlexity = compl;
        this.ingridients = ingrid;
        this.preparingTime = prepTime;
        this.preparingInstruction = instruction;
        this.printIngridients = function() {
            console.log (this.ingridients);
        };
        this.checkTime = function() {
                var result = "Meal can not be prepared for 15 minutes";
            if (this.preparingTime > "15min") {
                result = "Meal can not be prepared for 15 minutes";
            }
            return result;
        };
        this.changeTypeOfCusine = function(newType) {
              this.typeOfCuisine = newType;
        };
        this.deleteIngridient = function(param) {
            var newList =[];
            for (var i = 0; i < this.ingridients.length; i++) {
                if (this.ingridients[i] !== param) {
                    newList[newList.length] = this.ingridients[i];
                }
            }
            return newList;
        };
}

var pizza = new CulinaryRecipe ('pizza', 'Italian', '2', ['flour', 'eggs', 'salt', 'ham', 'cheese', 'mushrooms', 'ketchup'], '45min', 'medium');

console.log(pizza);
pizza.changeTypeOfCusine('Serbian');
console.log(pizza);

