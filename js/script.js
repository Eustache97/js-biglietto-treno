// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// DATI
//creo una variabile per il prezzo per kilometro (dato conosciuto)
const magiorAge = 18;
console.log(magiorAge, typeof magiorAge);

const oldAge = 65;
console.log(oldAge, typeof oldAge);

const priceAtKm = 0.21;
console.log(priceAtKm, typeof priceAtKm);

const minorDiscount = 20;
console.log(minorDiscount, typeof minorDiscount);

const oldDiscount = 40;
console.log(oldDiscount, typeof oldDiscount);

//chiedo i chilometri da percorrere e lo salvo in una variabile
const manyKm = parseInt(prompt("Quanti chilometri intendi percorrere?"));
console.log(manyKm, typeof manyKm);

//chiedo l'età del passeggero e lo salvo in una variabile
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof userAge);

//SVILUPPO
  //in base ai chilometri dati in input dall'utente moltiplico per il prezzo a kilometro e ottengo il prezzo base
  const totalPrice = manyKm * priceAtKm;
  console.log(totalPrice, typeof totalPrice);
  
  //SE l'età del passeggeroè minore di 18 applico al prezzo lo sconto del 20% e mostro a schermo il prezzo scontato
  //ALTRIMENTI SE l'età del passeggero è maggiore di 65 applico al prezzo lo sconto del 40% e mostro a schermo il prezzo scontato
            // ALTRIMENTI mostro a schermo il prezzo base
  let documentResult = totalPrice;
  let discount = 0;
  if (userAge < magiorAge) {
    documentResult = totalPrice - (totalPrice * minorDiscount / 100);
       console.log(documentResult, typeof documentResult);
        discount = `Sconto: ${minorDiscount}%`;

  } else if(userAge > oldAge){
    documentResult = totalPrice - (totalPrice * oldDiscount / 100);
      console.log(documentResult, typeof documentResult);
      discount = `Sconto: ${oldDiscount}%`;
    }
    //mostro nella pagina il chilometri inseriti dall'utente
    document.getElementById("km").innerHTML = manyKm;
    //mostro nella pagina gli anni dell'utente
    document.getElementById("age").innerHTML = userAge;
    // mostro nella pagina lo sconto applicato al prezzo del biglietto
    discount = `Sconto: ${discount}`;
    document.getElementById("discounts").innerHTML = discount;
    //arrotondo ai centesimi il prezzo finale del biglietto
    const rounded = Math.round((documentResult + Number.EPSILON) * 100) / 100;
    console.log(rounded, typeof rounded);
    documentResult = rounded;
    // preparo all'output del prezzo del biglietto
     result = `Costo biglietto: ${documentResult}€`;
    //  output prezzo biglietto
    document.getElementById("cost").innerHTML = result;

    