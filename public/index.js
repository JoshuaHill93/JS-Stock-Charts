async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

        
    //apikey=b2b0e11651294ee9a789558a1625b754
   // ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:BSE&interval=30min&outputsize=24&apikey=b2b0e11651294ee9a789558a1625b754')

    
    let responce = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX:BSE&interval=30min&outputsize=24&apikey=e791a4bbb99841ac91f865191f63cbaa')
    let results =  await responce.json();
    console.log(results)

    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:  'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });
    

    console.log(stocks[0].values)

}

main()