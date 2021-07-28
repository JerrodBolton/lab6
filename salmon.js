// alert("what is today")

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

let seattleLocation = {
  //identify props
  minC: 23,
  maxC: 65,
  avgCookieSale: 6.3,
  CPH: [], //Customers per hour
  CSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.CPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
      //
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < this.CPH.length; b++) {
      let todayCookies = Math.floor(this.CPH[b] * this.avgCookieSale);
      this.CSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }
    // console.log( this.CSPH)
  },
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("seattle");
    for (let d = 0; d < hoursOfBiz.length; d++) {
      const listItem = document.createElement("li");

      listItem.textContent = hoursOfBiz[d] + ": " + this.CSPH[d] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};

let tokyoLocation = {
  //identify props
  minC: 3,
  maxC: 24,
  avgCookieSale: 1.2,
  CPH: [], //Customers per hour
  CSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.CPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
      //
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < this.CPH.length; b++) {
      let todayCookies = Math.floor(this.CPH[b] * this.avgCookieSale);
      this.CSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }
    // console.log( this.CSPH)
  },
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("tokyo");
    for (let d = 0; d < hoursOfBiz.length; d++) {
      const listItem = document.createElement("li");

      listItem.textContent = hoursOfBiz[d] + ": " + this.CSPH[d] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};

let dubaiLocation = {
  //identify props
  minC: 11,
  maxC: 38,
  avgCookieSale: 3.7,
  CPH: [], //Customers per hour
  CSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.CPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
      //
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < this.CPH.length; b++) {
      let todayCookies = Math.floor(this.CPH[b] * this.avgCookieSale);
      this.CSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }
    // console.log( this.CSPH)
  },
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("dubai");
    for (let d = 0; d < hoursOfBiz.length; d++) {
      const listItem = document.createElement("li");

      listItem.textContent = hoursOfBiz[d] + ": " + this.CSPH[d] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};

let ParisLocation = {
  //identify props
  minC: 20,
  maxC: 38,
  avgCookieSale: 2.3,
  CPH: [], //Customers per hour
  CSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.CPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
      //
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < this.CPH.length; b++) {
      let todayCookies = Math.floor(this.CPH[b] * this.avgCookieSale);
      this.CSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }
    // console.log( this.CSPH)
  },
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("Paris");
    for (let d = 0; d < hoursOfBiz.length; d++) {
      const listItem = document.createElement("li");

      listItem.textContent = hoursOfBiz[d] + ": " + this.CSPH[d] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};
let LimaLocation = {
  //identify props
  minC: 2,
  maxC: 16,
  avgCookieSale: 4.6,
  CPH: [], //Customers per hour
  CSPH: [], //Cookies so per hours
  totalSoldPerDay: 0,

  // how many people should we expects.
  // this is step Number 1
  theRandomCE: function () {
    for (let j = 0; j < hoursOfBiz.length; j++) {
      this.CPH.push(randomNumber(this.minC, this.maxC));
      // this. means that it's getting form the object
      // pash is going to push the random # (it mean store the arrays )
      //
    }
    // console.log(this.CPH);
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let b = 0; b < this.CPH.length; b++) {
      let todayCookies = Math.floor(this.CPH[b] * this.avgCookieSale);
      this.CSPH.push(todayCookies);
      // add to th total
      this.totalSoldPerDay += todayCookies;
    }
    // console.log( this.CSPH)
  },
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("Lima");
    for (let d = 0; d < hoursOfBiz.length; d++) {
      const listItem = document.createElement("li");

      listItem.textContent = hoursOfBiz[d] + ": " + this.CSPH[d] + " cookies";
      unorderedList.appendChild(listItem);
    }
    const listItem = document.createElement("li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};

seattleLocation.make();
tokyoLocation.make();
dubaiLocation.make();
ParisLocation.make();
LimaLocation.make(); 



