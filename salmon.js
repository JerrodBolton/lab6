function randomNumber(minC, maxC) {
  // the (math.random) give me a random decimal between 0 and 1
  return Math.floor(Math.random() * (maxC - minC + 2)) + minC;
}

const hoursOfBiz = [
  // "HOB",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];  
 let newTable = document.getElementById("table");
// I put this here because I do not want it in my object
//  On lines 25-36 when I make
  function LocationCS( nameOfL, minC, maxC , avgCookieSale,) {
    this.nameOfL= nameOfL;
    this.minC= minC;
    this.maxC = maxC;
    this.avgCookieSale = avgCookieSale;
    this.cPH =[];//Customers per hour
    this.cSPH = []; //Cookies so per hours
    this.totalSoldPerDay = 0;
  }

// the Number don't need to be in "" b/c there number .
//  I'm making a new Object for the location specified.
  
  // ====================== our methods using the .prototype  =============================//

  LocationCS.prototype.theRandomCE = function () {
    for (let i = 0;  i < hoursOfBiz.length; i++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  };


  LocationCS.prototype.getTheCookiesSPH = function () {
    this.theRandomCE();
    for (let i = 0; i < hoursOfBiz.length; i++) {
      let todayCookies = Math.floor(this.cPH[i] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  };

  LocationCS.prototype.make = function() {
    this.getTheCookiesSPH();
    //  I don't think that I need a id in the html 
 
  
    const newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = this.nameOfL;
    
    console.log(this.nameOfL);
    
    newRow.appendChild(newCell);
    for (let i = 0; i < hoursOfBiz.length; i++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      newCell = document.createElement("td");
      // newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[i];
      newRow.appendChild(newCell);
    
    }

    newRow.append(this.totalSoldPerDay);
    newTable.appendChild(newRow);
  };



let Location = [
      new LocationCS("Seattle",23,65,2.3),
      new LocationCS("Tokyo",3, 24,1.2),
      new LocationCS("Dubai",11,38,3.7),
      new LocationCS("Paris",20,38,2.3),
      new LocationCS("Lima",2,16,4.6)
];

function headerMaker(){

 const hourRow = document.createElement("tr");
 let hourRowDate = document.createElement("th");
 hourRowDate.textContent = "";
hourRow.appendChild(hourRowDate);

 for (let i = 0; i < hoursOfBiz.length; i++) {
   
   hourRowDate = document.createElement("td");
   hourRowDate.textContent = hoursOfBiz[i];
   hourRow.appendChild(hourRowDate);
 }
 hourRowDate = document.createElement("td");
 hourRowDate.textContent = "Daily Total";
 hourRow.appendChild(hourRowDate);
 newTable.appendChild(hourRow);

 }

 headerMaker();
 for (let i = 0; i < Location.length; i++) {
   Location[i].make();  
 }
//   put the footRow up here
makeFooterRow();

function makeNewLocation(evt){
  evt.preventDefault(); // This keep the default things from happening when they should 
  let row = document.getElementsByName("tr");
  newTable.deleteRow(row.length - 1);
  let nameOfL = evt.target.nameOfL.value;
  let minC = evt.target.minC.value;
  let maxC = evt.target.maxC.value;
  let avgCookieSale = evt.target.avgCookieSale.value;
  let newLocation = new LocationCS(nameOfL,minC,maxC,avgCookieSale);
  Location.push(newLocation);
  newLocation.make();
  makeFooterRow();
}

let cityMaker = document.getElementById("cityMaker");
cityMaker.addEventListener("submit", makeNewLocation ); 




function makeFooterRow(){
  const footerRow = document.createElement("tr");
  let headerFooter = document.createElement("td"); // I made a element and ...
  headerFooter.textContent = "Total Hours"; // I put something in the element
  footerRow.appendChild(headerFooter); // putting everything together!!! 

  let grandTotal = 0;

  for (let i = 0; i < hoursOfBiz.length; i++) {
      let hourlyT = 0; // hourly Total 

      for (let index = 0; index < Location.length; index++) {
        hourlyT += Location[index].cSPH[i];
        grandTotal += Location[index].cSPH[i];


        console.log(Location[index]);
       
      }
    headerFooter = document.createElement("th");
    headerFooter.textContent = hourlyT;
    footerRow.appendChild(headerFooter);
    }
    headerFooter = document.createElement("th");
    headerFooter.textContent = grandTotal;
    footerRow.appendChild(headerFooter);
    newTable.appendChild(footerRow);
}