// document.getElementById('ordinary').addEventListener('click', getDrinks)
document.getElementById('ordinary').addEventListener('click', () => getDrinks('Ordinary Drink'))

function getDrinks(){

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

          // get data for each drink
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + item)
            .then(res => res.json())
            .then(data => {

              // console.log if category matches
              if (data.drinks[0].strCategory == 'Punch / Party Drink') {
                console.log(`${data.drinks[0].strCategory} ${data.drinks[0].strDrink}` )

              }
            })
        })

      //   // fetch each drink
      //   // get category for each drink
      //   // filter for chosen category
      //   // print drinks that match chosen category
      // })
        

        

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
