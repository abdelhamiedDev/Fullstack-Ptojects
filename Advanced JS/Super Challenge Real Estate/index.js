import {propertyForSaleArr} from './Properties/PropertyForSaleArr.js'
import {placeholderPropertyObj} from './Properties/placeholderPropertyObj.js'

function getPropertyHtml(propertyArr=[placeholderPropertyObj]) {

    const templateArr = propertyArr.map(property => {
        const {propertyLocation, priceGBP, roomsM2, comment, image} = property
        return`    
            <section class="card">
                <img src="./images/${image}" alt="Image of the property for sale">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>£${priceGBP.toLocaleString()}</h3>
                    <p>${comment}</p>
                    <h3>${roomsM2.reduce((acc, room) => acc + room, 0)} m&sup2;</h3>
                    <button>Contact Agent</button>
                </div>
            </section> 
            `
        
    }).join('')



    return templateArr
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr)


