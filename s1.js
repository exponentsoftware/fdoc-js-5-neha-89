const getAllLanguages = async () => {
    const res = awit.fetch("https://restcountries.com/v3/all");
    console.log(res);
    const alllanguages = allCountries.map(country =>{
        const {languages ={}} =country;
        return Object.values(languages);
    }).flat(infinity);
    const distinctLanguages = new Set(alllanguages);
    console.log(alllanguages);
    console.log(distinctLanguages.size); 

}
getAllLanguages();


let countriesArea = countryData.map()