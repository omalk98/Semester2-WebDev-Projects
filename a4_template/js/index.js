(function() {
  let countries = {
    all: window.countriesData,

    getByLanguage: function(language) {
      var arr = [];
      let i = 0;
      switch (language){
        case "English":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.English};
          }
          break;
        case "Arabic":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Arabic};
          }
          break;
        case "Chinese":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Chinese};
          }
          break;
        case "French":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.French};
          }
          break;
        case "Hindi":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Hindi};
          }
          break;
        case "Korean":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Korean};
          }
          break;
        case "Japanese":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Japanese};
          }
          break;
        case "Russian":
          for(c of this.all){
            arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.Russian};
          }
          break;
        default:
          for(c of this.all){
              arr[i++] = {code: c.code, continent: c.continent, areaInKm2: c.areaInKm2, population: c.population, capital: c.capital, name: c.name.English};
          }
      }
      return arr;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {

      if (!maxPopulation){
        maxPopulation = 999999999999;
      }
      var arr = [];
      let i = 0;
      for (c of this.getByLanguage("English")){
        if(c.population >= minPopulation && c.population <= maxPopulation){
          arr[i++] = c;
        }
      }
      return arr;
    },

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      var arr = [];
      let i = 0;
      for (c of this.getByLanguage("English")){
        if (c.continent == continent && c.areaInKm2 >= minArea){
          arr[i++] = c;
        }
      }
      return arr;
    }
  };

  
  let tableHelper = {
    clearTable: function() {
      var tbl = document.querySelector("#outputTable");
      var tblBody = tbl.querySelector("tbody");
      if (tblBody) tbl.removeChild(tblBody);
    },

    countryCodeToFlagImg: function(countryCode) {
      var cntryImg = document.createElement("img");
      cntryImg.src = `flags/${countryCode.toLowerCase()}.png`;
      cntryImg.alt = `${countryCode} flag`;
      cntryImg.width = 45;
      cntryImg.height = 20;
      return cntryImg;
    },

    countryToRow: function(country) {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      var text = this.countryCodeToFlagImg(country.code);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.code);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.name);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.continent);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.areaInKm2);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.population);
      cell.appendChild(text);
      row.appendChild(cell);

      cell = document.createElement("td");
      text = document.createTextNode(country.capital);
      cell.appendChild(text);
      row.appendChild(cell);

      return row;
    },

    countriesToTable: function(countries) {
      this.clearTable();
      var maintbl = document.querySelector("#outputTable");
      var table = document.createElement("tbody");
      for (c of countries){
        table.appendChild(this.countryToRow(c));
      }
      maintbl.appendChild(table);
    }
  };

  function setupMenuHandlers() {
    document.onload = tableHelper.countriesToTable(countries.getByLanguage());


    //Menu Language Handelers ----------------------------------------------------
    document.querySelector("#menu_english").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("English"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies";
    });

    document.querySelector("#menu_arabic").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Arabic"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Arabic";
    });

    document.querySelector("#menu_chinese").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Chinese"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Chinese";
    });

    document.querySelector("#menu_french").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("French"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in French";
    });

    document.querySelector("#menu_hindi").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Hindi"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Hindi";
    });

    document.querySelector("#menu_korean").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Korean"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Korean";
    });

    document.querySelector("#menu_japanese").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Japanese"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Japanese";
    });

    document.querySelector("#menu_russian").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByLanguage("Russian"));  
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Russian";
    });
    //END Menu Language Handelers ----------------------------------------------------

    // Menu Population Handelers ----------------------------------------------------
    document.querySelector("#menu_population_100_000_000m").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByPopulation(100000000));
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies With a Population Greater than 100,000,000";
    });

    document.querySelector("#menu_population_1m_2m").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByPopulation(1000000, 2000000));
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies With a Population between 1,000,000 and 2,000,000";

    });
    //END Menu Population Handelers ----------------------------------------------------

    // Menu By Area KM^2 Handelers ----------------------------------------------------
    document.querySelector("#menu_americas_1mkm").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByAreaAndContinent("Americas", 1000000));
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in the Americas With an Area Greater than <u>1,000,000KM<sup>2</sup></u>";
    });
    document.querySelector("#menu_asia_all").addEventListener("click", function(){
      tableHelper.countriesToTable(countries.getByAreaAndContinent("Asia", 0));
      document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies in Asia";
    });
    //END Menu By Area KM^2 Handelers ----------------------------------------------------
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
