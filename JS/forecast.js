const key = "ALDTAFpuY1oQItE72wGIbG7NnfKs6EzT";
const getCity = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
}


const getWeather = async (citykey) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${citykey}?apikey=${key}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
}
//getWeather(206678)


// getCity('lucknow')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

