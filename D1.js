/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I data type sono i dati/valori che posso assegnare a una variabile nel linguaggio Javascript e possono essere:

  -STRING: Questo dato è una sequenza di caratteri testuali e viene scritto all'interno di due doppi apici (Esempio:"nome").
  -NUMBER:Questo dato è una sequenza di dati numerici interi (Esempio:10) o decimali (Esempio:10.50) e  non vengono scritti all'interno di due apici.
  -BOOLEAN:Questo dato può assumere solo i valori true o false.
  -NULL:Questo dato è una keyword che segnala l'assenza intenzionale di un valore (glielo abbiamo tolto noi appositamente).
  -UNDEFINED:Questo dato indica che una variabile non ha nessun tipo di valore assegnato o non lo abbiamo definito.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Mattia"
console.log(myName) 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const num1 = 12
const num2 = 20 
console.log(num1 + num2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const myName = "Susin"  
   Non è possibile cambiare il valore di una variabile "const" ma solo una variabile "let" può essere cambiato 
   Ecco l'errore che da se vogliamo cambiare la variabile "const" ----> "Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:49:7)"
*/ 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num = 4 
console.log(x-num)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"

console.log("name1 è uguale a name2?", name1===name2) /* FALSE */

console.log(name1===name2.toLowerCase())

 console.log(name2.toLowerCase()) /* Usanso ".toLowerCase" è possibile mettere in minuscolo tutte le lettere di una stringa testuale*/
console.log(name1.toLowerCase())
 
console.log("name1 e name2 sono uguali?",name1===name2.toLowerCase())
