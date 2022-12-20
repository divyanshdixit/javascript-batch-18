// 1 st promise

// posts => countries
// const prom1 = new Promise((resolve, reject) => {
//     fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
//     .then(res => res.json())
//     .then(data => console.log(data))
// });
// prom1.then(res => console.log(res))

const getData = async () => {
    // return a promise:
    const selectedCountryStates = [];
    const selectedCountryStatesCities = [];
    const response = await fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
    console.log(response)
    const countries = await response.json() // convert json data into object
    console.log(countries);
    countries.map(async (country) => {
        if(country.id === 1){
            console.log(country); // {india object}
            const stateResponse = await fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json')
            const states = await stateResponse.json();
            console.log(states)
            states.map(state => {
                if(state.country_id === country.id){
                    selectedCountryStates.push(state);
                }
                // return selectedCountryStates
            })

            // console.log(selectedCountryStates, country)
            // selectedCountryStates.map(async state => {
            const cityResponse = await fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json')
            const cities = await cityResponse.json();
            // console.log(cities);
            cities.map(city => {
                if(city.state_id === 3901 && city.country_id === country.id ){
                    console.log(city)
                    selectedCountryStatesCities.push(city);
                }
            })
            // })
            console.log(selectedCountryStates, selectedCountryStatesCities)
        }
    })
    return {countries,selectedCountryStates, selectedCountryStatesCities}

}
getData().then((res) => {
    // success,
    console.log(res)
}, 
(err) => {
    // failure
console.log(err)
})