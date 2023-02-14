document.getElementById('ordinary').addEventListener('click', getDrinks)

function getDrinks(){

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.drinks.forEach(item => {
            document.getElementById('drinks').innerText += item.strDrink
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// function getOrdinary() {
//     // let cocktail = document.querySelector('input').value.split(' ').join('_')
//     let cocktail = 'margarita'

//     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
        
//         console.log(data)
        
//         let drink = data.drinks[Math.floor(Math.random() * (data.drinks.length + 1))]
//         console.log(drink)
//         document.querySelector('h2').innerText = drink.strDrink
//         document.querySelector('img').src = drink.strDrinkThumb
//         document.querySelector('.instructions').innerText = drink.strInstructions 


//         let listIngredients = function() {
//             let list = []
//             for (let i in drink) {
//                 if (i.includes('strIngredient') && drink[i]) {
//                     list.push(drink[i])
//                 }
//             }
//             return list
//         }

//         let showIngredients = function() {
//             document.querySelector('.ingredients').innerHTML = ''
       
//             listIngredients().forEach(item => document.querySelector('.ingredients').innerHTML += `<li>${item}</li>`)   
//         }
//         showIngredients()

 
    
//     })

//     .catch(err => {
//         console.log(`error ${err}`)
//     });
    
// }
