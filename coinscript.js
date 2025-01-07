const fs = require('fs');

const options = {
  headers: {
    'x-access-token': 'coinrankingff642de6922ea15f6e86ee101fed8be6fc77756262b8eec2',
  },
};
const apiUrl = 'https://api.coinranking.com/v2/coins'

setInterval(() => {
  

async function fetchData() {

  const non_json = await fetch(apiUrl, options)



  const json = await non_json.json()

  const apiData = json.data
  const coinData = apiData.coins

  // console.log(coinData)


  var Content = document.getElementById('content')

  Content.innerHTML=''
  coinData.forEach(user => {



    var marketcap = numberWithCommas(user.marketCap)
    var price = numberWithCommas(user.price)
    var logo = user.iconUrl
    var name = user.name
    var symbol = user.symbol
    var rank = user.rank
    var color = user.color



    const trow = document.createElement("tr")
    trow.classList.add("box")

    trow.innerHTML = `
          <td>${rank}</td>
          <td><img src="${logo}" alt="logo" width="30vw"></td>
          <td class="coinName">${name} <span id="symbol">${symbol}</span></td>
         
          <td>$ ${marketcap}</td>
          <td>$ ${price}</td>
`
    trow.color = color
    trow.addEventListener("click", () => {
      window.location.href = `${name}.html`

      // return {name: user.name, symbol: user.symbol, element: trow}
    })




    Content.appendChild(trow);

    // function searcherFunc(){
    //   searcher=coinData.map(element =>{
    //     // var naam = element.name
    //     // var symbo = element.symbol
    //     return {name: element.name, symbol: element.symbol }
    //   })


    //  }
    //  searcherFunc()



  });

}

fetchData()

}, 2000);\

// Array of "pages" to create
const pageNames = ['Page1', 'Page2', 'Page3'];

pageNames.forEach(name => {
  // Create HTML content for each page
  const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${name}</title>
    </head>
    <body>
      <h1>Welcome to ${name}</h1>
      <p>This is content for ${name}.</p>
    </body>
    </html>
  `;

  // Write the HTML content to a new file
  fs.writeFile(`${name}.html`, content, (err) => {
    if (err) throw err;
    console.log(`${name}.html created successfully!`);
  });
});
