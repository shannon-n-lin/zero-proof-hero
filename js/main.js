document.getElementById('ordinary').addEventListener('click', () => getDrinks('Ordinary Drink'))
document.getElementById('cocktail').addEventListener('click', () => getDrinks('Cocktail'))
document.getElementById('shake').addEventListener('click', () => getDrinks('Shake'))
document.getElementById('other').addEventListener('click', () => getDrinks('Other / Unknown'))
document.getElementById('cocoa').addEventListener('click', () => getDrinks('Cocoa'))
document.getElementById('coffee-tea').addEventListener('click', () => getDrinks('Coffee / Tea'))
document.getElementById('punch-party').addEventListener('click', () => getDrinks('Punch / Party Drink'))

function getDrinks(category){

  // remove any previous results
  if (document.getElementById('drinkList').innerHTML) {
    document.getElementById('drinkList').innerHTML = ''
  }

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // get IDs of all non-alcoholic drinks
        let drinkIds = data.drinks.map(item => item.idDrink)
        console.log(drinkIds)
        return drinkIds
        })

      .then(drinkIds => {
        drinkIds.forEach(item => {

          // get data for each drink ID
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + item)
            .then(res => res.json())
            .then(data => {

              // check for chosen category
              if (data.drinks[0].strCategory == category) {
                // add drink name to DOM
                document.getElementById('drinkList').innerHTML += `<li>${data.drinks[0].strDrink}</li>`
              }
            })

            .catch(err => {
              console.log(`error ${err}`)
            })
        })
      })

      .catch(err => {
          console.log(`error ${err}`)
      })
}
