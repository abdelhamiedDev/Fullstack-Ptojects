function getStockData() {
    return {
        name: "QtechAI", 
        symbol: "QTA", 
        price: (Math.random() * 3 + 1).toFixed(2), 
        time: new Date().toLocaleTimeString()
        }
}

setInterval(
    function()
    {
        const stockData = getStockData()
        renderStockData(stockData)
    }, 1500)

function renderStockData(stockData) {

    const stockDisplayName = document.getElementById("stock-name")
    const stockDisplaySymbol = document.getElementById("stock-symbol")
    const stockDisplayPrice = document.getElementById("stock-price")
    const stockDisplayIcon = document.getElementById("stock-icon")
    const stockDisplayTime = document.getElementById("stock-time")

    const { name, symbol, price, time } = stockData

    prevPrice = null


    stockDisplayName.innerHTML = "Name: " + name
    stockDisplaySymbol.innerHTML = "Symbol: " + symbol
    stockDisplayPrice.innerHTML = "Price: $" + price
    stockDisplayIcon.src = price > prevPrice ? "./SVG/greenUp.png" : 
    price < prevPrice ? "./SVG/redDown.png" : "./SVG/grayStill.png"
    stockDisplayIcon.alt = price > prevPrice ? "Price Up" :
    price < prevPrice ? "Price Down" : "Price Unchanged"
    stockDisplayTime.innerHTML = "Time: " + time

}