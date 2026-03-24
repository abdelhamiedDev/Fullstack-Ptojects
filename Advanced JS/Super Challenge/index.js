// Function to simulate fetching stock data
function getStockData() {
    return {
        name: "QtechAI", 
        symbol: "QTA", 
        price: (Math.random() * 3 + 1).toFixed(2), 
        time: new Date().toLocaleTimeString()
        }
}

// Global variable to store the previous price for comparison
let prevPrice = null


// Function to render stock data on the webpage
function renderStockData(stockData) {

    const stockDisplayName = document.getElementById("stock-name")
    const stockDisplaySymbol = document.getElementById("stock-symbol")
    const stockDisplayPrice = document.getElementById("stock-price")
    const stockDisplayIcon = document.getElementById("stock-icon")
    const stockDisplayTime = document.getElementById("stock-time")

    // Destructure the stock data for easier access
    const { name, symbol, price, time } = stockData




    stockDisplayName.innerHTML = "Name: " + name
    stockDisplaySymbol.innerHTML = "Symbol: " + symbol
    stockDisplayPrice.innerHTML = "Price: $" + price
    stockDisplayTime.innerHTML = "Time: " + time

    if (prevPrice === null) {
        stockDisplayIcon.src = "./SVG/grayStill.png"
        stockDisplayIcon.alt = "Price Unchanged"
    } else {
        stockDisplayIcon.src = price > prevPrice ? "./SVG/greenUp.png" : 
            price < prevPrice ? "./SVG/redDown.png" : "./SVG/grayStill.png"
        
        stockDisplayIcon.alt = price > prevPrice ? "Price Up" :
            price < prevPrice ? "Price Down" : "Price Unchanged"
    }
    prevPrice = price

}

setInterval(
    function()
    {
        const stockData = getStockData()
        renderStockData(stockData)
    }, 1500)