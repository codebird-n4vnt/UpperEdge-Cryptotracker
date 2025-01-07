











const searchInput = document.querySelector("[data-search]")







function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



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

}, 2000);

//   for(let i=0; i<searcher.length; i++){
//     trow.classlist.add("krypto(i)")
//   }
// const searchvalue = document.getElementsByClassName('search').value


searchInput.addEventListener("input", (e) => {
  var value = e.target.value.toLowerCase();

  var searcher = document.querySelectorAll('.box');  // All rows with class 'box'
  var coinNames = document.getElementsByClassName('coinName');  // All elements with class 'coinName'

  for (let i = 0; i <=coinNames.length; i++) {
    var coinNameElement = searcher[i].querySelector('.coinName');  // Get the element with class 'coinName' inside each row
    
    if (coinNameElement) {
      var intext = coinNameElement.innerHTML || coinNameElement.innerText || coinNameElement.textContent;
      
      if (intext.toLowerCase().indexOf(value) > -1) {
        searcher[i].style.display = "table-row";  // Show matching rows
      } else {
        searcher[i].style.display = "none";  // Hide non-matching rows
      }
    }
  }
});

 




// function colorFadeOut(b){
//   b.style.color='green'
  
//   var opacity = 

// }