function randomNumber(minC, maxC) {
  // the (math.random) give me a random decimal between 0 and 1
  return Math.floor(Math.random() * (maxC - minC + 2)) + minC;
}

const hoursOfBiz = [
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
//I put this here because I do not want it in my object
//  On lines 25-36 when I make
//   function LocationCS(  nameOfL, minC, maxC , avgCookieSale,) {
//     this.nameOfL= nameOfL;
//     this.minC= minC;
//     this.maxC = maxC;
//     this.avgCookieSale= avgCookieSale;
//     this.CPH =[];//Customers per hour
//     this.CSPH = []; //Cookies so per hours
//     this.totalSoldPerDay = 0,
// // the Number don't need to be in "" b/c there number .
// //  I'm making a new Object for the location specified.

// let Location = [
//       new LocationCS("seattle",23,65,6.3),
//       new LocationCS("tokyo",3, 24,1.2),
//       new LocationCS("dubai",11,38,3.7),
//       new LocationCS("paris",20,38,2.3),
//       new LocationCS("lima",2,16,46)
// ];

//   }
// console.log(seattle);

let seattleLocation = {
  //identify props
  minC: 23,
  maxC: 65,
  avgCookieSale: 6.3,
  cPH: [], //Customers per hour
  cSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < hoursOfBiz.length; b++) {
      let todayCookies = Math.floor(this.cPH[b] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  },

  make() {
    this.getTheCookiesSPH();
    let newTable = document.getElementById("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = "Settle";
    newRow.appendChild(newCell);
    for (let d = 0; d < hoursOfBiz.length; d++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      let newCell = document.createElement("td");
      newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[d];
      newRow.appendChild(newCell);
    
    }
  
  
   
    let newCellT = document.createElement("td");
    newCellT.textContent = this.totalSoldPerDay;
    newRow.appendChild(newCellT);
    

   newTable.appendChild(newRow)
   
  },
};

let tokyoLocation = {
  //identify props
  minC: 3,
  maxC: 24,
  avgCookieSale: 1.2,
  cPH: [], //Customers per hour
  cSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < hoursOfBiz.length; b++) {
      let todayCookies = Math.floor(this.cPH[b] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  },

  make() {
    this.getTheCookiesSPH();
    let newTable = document.getElementById("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = "Tokyo";
    newRow.appendChild(newCell);
    for (let d = 0; d < hoursOfBiz.length; d++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      let newCell = document.createElement("td");
      newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[d];
      newRow.appendChild(newCell);
    
    }
   newTable.appendChild(newRow)


   let newCellT = document.createElement("td");
   newCellT.textContent = this.totalSoldPerDay;
   newRow.appendChild(newCellT);
  },
};

let parisLocation = {
  //identify props
  minC: 20,
  maxC: 38,
  avgCookieSale: 2.3,
  cPH: [], //Customers per hour
  cSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < hoursOfBiz.length; b++) {
      let todayCookies = Math.floor(this.cPH[b] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  },

  make() {
    this.getTheCookiesSPH();
    let newTable = document.getElementById("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = "Paris ";
    newRow.appendChild(newCell);
    for (let d = 0; d < hoursOfBiz.length; d++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      let newCell = document.createElement("td");
      newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[d];
      newRow.appendChild(newCell);
    
    }
   newTable.appendChild(newRow)

   let newCellT = document.createElement("td");
   newCellT.textContent = this.totalSoldPerDay;
   newRow.appendChild(newCellT);
  },
  
};
let limaLocation = {
  //identify props
  minC: 2,
  maxC: 16,
  avgCookieSale: 4.6,
  cPH: [], //Customers per hour
  cSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < hoursOfBiz.length; b++) {
      let todayCookies = Math.floor(this.cPH[b] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  },

  make() {
    this.getTheCookiesSPH();
    let newTable = document.getElementById("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = "lima";
    newRow.appendChild(newCell);
    for (let d = 0; d < hoursOfBiz.length; d++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      let newCell = document.createElement("td");
      newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[d];
      newRow.appendChild(newCell);
    
    }
   newTable.appendChild(newRow)

   let newCellT = document.createElement("td");
   newCellT.textContent = this.totalSoldPerDay;
   newRow.appendChild(newCellT);
  },
};
let dubaiLocation = {
  //identify props
  minC: 11,
  maxC: 38,
  avgCookieSale: 3.7,
  cPH: [], //Customers per hour
  cSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.cPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < hoursOfBiz.length; b++) {
      let todayCookies = Math.floor(this.cPH[b] * this.avgCookieSale);
      this.cSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }

    // console.log( this.cSPH)
  },

  make() {
    this.getTheCookiesSPH();
    let newTable = document.getElementById("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = "dubai";
    newRow.appendChild(newCell);
    for (let d = 0; d < hoursOfBiz.length; d++) {
      // const aDream = document.getElementById("table");
      // let newRow = document.createElement("tr");
      let newCell = document.createElement("td");
      newCell.appendChild(newRow);
      newCell.textContent = this.cSPH[d];
      newRow.appendChild(newCell);
    
    }
   newTable.appendChild(newRow)

   let newCellT = document.createElement("td");
   newCellT.textContent = this.totalSoldPerDay;
   newRow.appendChild(newCellT);
  },

}


// Make a array where all locations will be
let eLocations =[seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation]
// Go though every location call make to write on your HTML
 for (let index = 0; index < eLocations.length; index++) {
   eLocations[index].make();
  //  console.log("What is today");
 }
