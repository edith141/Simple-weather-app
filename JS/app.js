//-----------------------------------------------------------
//>>>//CODE FOR ANIMATED BACKGROUND DEPENDING UPON CURRENT WEATHER CONDITIONS
//>>>//REMOVED BECAUSE IT LAGS ON OLDER DEVICES
//-----------------------------------------------------------
// let bgAnimation = "html";
// let skyColor = 0x6ab3cf,
//     cloudColor = 0xacc3e3,
//     cloudShadowColor = 0x1a344d,
//     sunColor = 0xfa9920,
//     sunGlareColor = 0xfa602d,
//     sunlightColor = 0xf79838;
// VANTA.CLOUDS({
//     el: bgAnimation,
//     skyColor: skyColor,
//     cloudColor: cloudColor,
//     cloudShadowColor: cloudShadowColor,
//     sunColor: sunColor,
//     sunGlareColor: sunGlareColor,
//     sunlightColor: sunlightColor
// });


const card = document.querySelector('.card');
const detailsCard = document.querySelector('.detailsCard');
const todImage = document.querySelector('.tod');
const conditionIcon = document.querySelector('.conditionIcon img');
//console.log(detailsCard.querySelector('.cityName'));
const updateUI = (data) => {
    const cityInfo = data.cityd;
    const currWeather = data.weather;
    detailsCard.querySelector('.cityName').textContent = cityInfo.EnglishName + ", " + cityInfo.Country.ID;
    detailsCard.querySelector('.conditions').textContent = currWeather.WeatherText;
    detailsCard.querySelector('.temp').textContent = currWeather.Temperature.Metric.Value;

    if (card.classList.contains("d-none")) 
    {
        card.classList.remove('d-none');
    }

    let timeOfDay = '';
    if (currWeather.IsDayTime) {
        timeOfDay = 'img/day.svg';
        //-----------------------------------------------------------
        //>>>//CODE FOR ANIMATED BACKGROUND DEPENDING UPON CURRENT WEATHER CONDITIONS
        //>>>//REMOVED BECAUSE IT LAGS ON OLDER DEVICES
        //-----------------------------------------------------------
        // dsunny = [1, 2, 3, 4];
        // dcloudy = [5, 6, 7, 20, 21];
        // dcloudydark = [8, 9, 10, 11, 12, 13, 14, 17, 19, 22, 23, 24, 25, 29, 30, 31, 32];
        // dstorm = [15, 16, 18, 26]
        // if (dsunny.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x6ab3cf,//0x81b8cd
        //         cloudColor = 0x6ab3cf,
        //         cloudShadowColor = 0x6ab3cf,
        //         sunColor = 0xfa9920,
        //         sunGlareColor = 0xfa602d,
        //         sunlightColor = 0xf79838;
        // }
        // else if (dcloudy.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x68b8d7,//0x81b8cd
        //         cloudColor = 0xadc1de,
        //         cloudShadowColor = 0x183550,
        //         sunColor = 0xff9919,
        //         sunGlareColor = 0xff6633,
        //         sunlightColor = 0xff9933;
        // }
        // else if (dcloudydark.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x4f859b,//0x81b8cd
        //         cloudColor = 0x536784,
        //         cloudShadowColor = 0x2e4255,
        //         sunColor = 0xff9919,
        //         sunGlareColor = 0xff6633,
        //         sunlightColor = 0xff9933;
        // }
        // else if (dstorm.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0xd2b37,//0x81b8cd
        //         cloudColor = 0x122239,
        //         cloudShadowColor = 0xe2943,
        //         sunColor = 0xa2917b,
        //         sunGlareColor = 0x46403e,
        //         sunlightColor = 0xb3aba3;
        // }

        // VANTA.CLOUDS({
        //     el: bgAnimation,
        //     skyColor: skyColor,
        //     cloudColor: cloudColor,
        //     cloudShadowColor: cloudShadowColor,
        //     sunColor: sunColor,
        //     sunGlareColor: sunGlareColor,
        //     sunlightColor: sunlightColor
        // });
    }
    else 
    {
        timeOfDay = 'img/night.svg';
        //-----------------------------------------------------------
        //>>>//CODE FOR ANIMATED BACKGROUND DEPENDING UPON CURRENT WEATHER CONDITIONS
        //>>>//REMOVED BECAUSE IT LAGS ON OLDER DEVICES
        //-----------------------------------------------------------
        // dsunny = [33, 34];
        // dcloudy = [35, 7, 36, 37, 38];
        // dcloudydark = [8, 9, 10, 11, 12, 39, 40, 44, 43, 19, 22, 23, 24, 25, 29, 30, 31, 32];
        // dstorm = [15, 41, 42, 26]
        // if (dsunny.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x22252a,//0x81b8cd
        //         cloudColor = 0x22252a,
        //         cloudShadowColor = 0x22252a,
        //         sunColor = 0x22252a,
        //         sunGlareColor = 0x22252a,
        //         sunlightColor = 0x22252a;
        // }
        // else if (dcloudy.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x2d3234,//0x81b8cd
        //         cloudColor = 0x5f5f5f,
        //         cloudShadowColor = 0x1f3c,
        //         sunColor = 0x707070,
        //         sunGlareColor = 0x1e1e1e,
        //         sunlightColor = 0x615f5e;
        // }
        // else if (dcloudydark.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x60c0f,//0x81b8cd
        //         cloudColor = 0x282d34,
        //         cloudShadowColor = 0x1b1f22,
        //         sunColor = 0x272631,
        //         sunGlareColor = 0x1e1e1e,
        //         sunlightColor = 0x615f5e;
        // }
        // else if (dstorm.includes(currWeather.WeatherIcon)) {
        //     skyColor = 0x0,//0x81b8cd
        //         cloudColor = 0xe1116,
        //         cloudShadowColor = 0x102941,
        //         sunColor = 0x1080c,
        //         sunGlareColor = 0x60b0f,
        //         sunlightColor = 0x615f5e;
        // }

        // VANTA.CLOUDS({
        //     el: bgAnimation,
        //     skyColor: skyColor,
        //     cloudColor: cloudColor,
        //     cloudShadowColor: cloudShadowColor,
        //     sunColor: sunColor,
        //     sunGlareColor: sunGlareColor,
        //     sunlightColor: sunlightColor
        // });
    }
    todImage.setAttribute('src', timeOfDay);
    //-----------------------------------------------------------
    //>>>//CODE FOR ANIMATED BACKGROUND DEPENDING UPON CURRENT WEATHER CONDITIONS
    //>>>//REMOVED BECAUSE IT LAGS ON OLDER DEVICES
    //-----------------------------------------------------------
    // VANTA.CLOUDS({
    //     el: bgAnimation,
    //     skyColor: skyColor,
    //     cloudColor: cloudColor,
    //     cloudShadowColor: cloudShadowColor,
    //     sunColor: sunColor,
    //     sunGlareColor: sunGlareColor,
    //     sunlightColor: sunlightColor
    // });

    const iconSrc = `img/icons/${currWeather.WeatherIcon}.svg`
    conditionIcon.setAttribute('src', iconSrc);

}


const setcityForm = document.querySelector('.setlocation');
const updateLocation = async (city) => {
    const cityd = await getCity(city);
    const weather = await getWeather(cityd.Key);

    return ({ weather, cityd });

}



setcityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = setcityForm.city.value.trim();
    localStorage.setItem('location', city);

    updateLocation(city).then(weather => {
        //console.log(weather);
        updateUI(weather);
    })
    setcityForm.reset();
})

if (localStorage.getItem('location')) {
    //console.log(localStorage.getItem('city'));
    updateLocation(localStorage.getItem('location')).then(weather => {
        //console.log(weather);
        updateUI(weather);
    });
}
