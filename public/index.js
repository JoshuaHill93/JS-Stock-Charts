async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

        
    //apikey=b2b0e11651294ee9a789558a1625b754
   // ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:BSE&interval=30min&outputsize=24&apikey=b2b0e11651294ee9a789558a1625b754')

   const { GME, MSFT, DIS, BNTX } = mockData;

   const stocks = [GME, MSFT, DIS, BNTX];
   function getColor(stock) {
     if (stock === "GME") {
       return "rgba(61, 161, 61, 0.7)";
     }
     if (stock === "MSFT") {
       return "rgba(209, 4, 25, 0.7)";
     }
     if (stock === "DIS") {
       return "rgba(18, 4, 209, 0.7)";
     }
     if (stock === "BNTX") {
       return "rgba(166, 43, 158, 0.7)";
     }
   }






    
   // let responce = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:BSE&interval=30min&outputsize=24&apikey=e791a4bbb99841ac91f865191f63cbaa')
    //let results =  await responce.json();
    //console.log(results)

    stocks.forEach( stock => stock.values.reverse())

    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.reverse().map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.reverse().map(value => parseFloat(value.high))
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
    console.log(stocks[0].values)                                                  


}

main()