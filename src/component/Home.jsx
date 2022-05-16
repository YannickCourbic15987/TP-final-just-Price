import React, { useState } from "react";
import "./css/style.css"

function Home() {

    const win = [
        "Une autruche",
        "Un vélo",
        "Un panier en osier",
        "Une corde",
        "Un chameau",
        "Une trottinette",
        "De la mort au rat ",
        "un fouet",
        "1 pièce de 1 €",
        "un blu-ray",
        "un canard en plastique",
        "une bouteille d'eau",
        "un séjour en garde à vue"
    ]

    const [price] = useState(Math.round(Math.random() * 100))
    const randomIndex = Math.round(Math.random() * win.length - 1)
    const winPrice = win[randomIndex]
    console.log(winPrice + " " + price)
    let [inputprice, setInputprice] = useState(null);
    let [life, setLife] = useState(7);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (parseInt(event.target[0].value) === price) {
            setInputprice("Vous avez gagner")
            const cashPrice = document.querySelector("#cashPrice");
            cashPrice.textContent = "Votre prix est : " + winPrice
            const price = document.querySelector("#price")
            price.disabled = true
            const btnPrice = document.querySelector("#btnPrice")
            btnPrice.disabled = true
            const imgwin = document.querySelector("#imgwin")
            imgwin.classList.add("displaywin")
        }
        else {
            if (parseInt(event.target[0].value) > price) {
                setInputprice("c'est plus petit")
                setLife(life - 1)
            }
            else {
                setInputprice("c'est plus grand")
                setLife(life - 1)
            }
        }

        if (life === 1) {
            const price = document.querySelector("#price");
            setInputprice("Vous avez perdu ")
            price.disabled = true
            const btnPrice = document.querySelector("#btnPrice")
            btnPrice.disabled = true
            const imglose = document.querySelector("#imglose")
            imglose.classList.add("displaylose")
        }
    }

    return (
        <>
            <h1>TP juste prix</h1>
            <form id="form" onSubmit={(event) => handleSubmit(event)}>
                <p> Votre nombre d'essais restants :  {life}</p>
                <p> Veuillez tapez un prix : </p>
                <input type="number" id="price" placeholder="nombre < 100 " /> <br />
                <button id="btnPrice" type="submit"> submit</button>
                <div id="result">{inputprice}</div>
                <p id="cashPrice"> </p>
                <div id="imgwin"></div>
                <div id="imglose"></div>
            </form>
        </>
    )
}

export default Home