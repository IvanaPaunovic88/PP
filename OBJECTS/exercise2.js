/*1.	vCreate an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/

var coffee = {
    name: 'cappucino',
    flavour: 'bitter',
    milk: 'withMilk',
    sugar: 'oneTeaspoon',
};

console.log(coffee.name);

/*2.	Create an object that represents your favourite movie. Please include title, actors, 
director, genre, popularity. 
*/

var favMovie = {
    title: 'Le Fabuleux Destin d Amelie Poulain',
    actors: {
          first: 'Audrey Tautou',
          second: 'Mathieu Kassovitz',
    },
    director: {
        firstname: 'Jean-Pierre',
        lastname: 'Jeunet',
    },
    genre: 'comedie',
    popularity: 'very popular',
};
console.log(favMovie.director);


/*3.	Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. Add a method that prints 
out the project's repository,  a method that checks if the project is written in JavaScript 
as well as a method that checks if the project is in development or not.
*/
var project = {
    description: 'greening the river bank',
    programmingLanguage: 'JavaScript',
    development: 'yes',
    repository: function() {
        return 'https://github.com/IvanaPaunovic88/PP';
    },
    written: function() {
        var result = "false";
        if(project.programmingLanguage === 'JavaScript'){
          result = "true";
        }
        return result
        },
    isDevelop: function() {
        var result = "false";
        if(project.development === 'yes'){
          result = "true";
        }
        return result
        },
}

console.log(project.isDevelop());

/*
4.	Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of 
ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared for 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
*/

function culinaryRecipe(name, type, compl, ingrid, prepTime, instruction) {
    return {
        name1: name,
        typeOfCuisine: type,
        comlexity: compl,
        ingridients: ingrid,
        preparingTime: prepTime,
        preparingInstruction: instruction,
        allIngridients: function() {
        return 'All ingridients necessary are: ' + culinaryRecipe.ingridients;
        },
        checkTime: function() {
        var result = "Meal can not be prepared for 15 minutes";
        if (culinaryRecipe.preparingTime === "15min") {
            result = "Meal can not be prepared for 15 minutes";
        }
        return result;
        },
        changeTypeOfCusine: function() {
        return culinaryRecipe.typeOfCuisine === "Hungarian";
        },
        deleteIngridient: function(param) {
        var newList =[];
        for (var i = 0; i < culinaryRecipe.ingridients.length; i++) {
            if (culinaryRecipe.ingridients[i] !== param) {
                newList[newList.length] = culinaryRecipe.ingridients[i];
            }
        }
        return newList;
        },
    }
};

console.log(allIngridients());