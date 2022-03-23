export function getLocationByQuery(q) {
  return JSON.parse(
    '[{"Version":1,"Key":"215854","Type":"City","Rank":31,"LocalizedName":"Tel Aviv","Country":{"ID":"IL","LocalizedName":"Israel"},"AdministrativeArea":{"ID":"TA","LocalizedName":"Tel Aviv"}}]'
  )
}
export function getLocationById(locationId) {
  return JSON.parse(
    '[{"LocalObservationDateTime":"2020-01-05T17:05:00+02:00","EpochTime":1578236700,"WeatherText":"Some clouds","WeatherIcon":36,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":14.6,"Unit":"C","UnitType":17},"Imperial":{"Value":58.0,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}]'
  )
}
export function getLocationByGeoPosition(latitude, longitude) {
  return JSON.parse(
    '{"Version":1,"Key":"213259","Type":"City","Rank":75,"LocalizedName":"Maale Edomim","EnglishName":"Maale Edomim","PrimaryPostalCode":"","Region":{"ID":"MEA","LocalizedName":"Middle East","EnglishName":"Middle East"},"Country":{"ID":"IL","LocalizedName":"Israel","EnglishName":"Israel"},"AdministrativeArea":{"ID":"JM","LocalizedName":"Jerusalem","EnglishName":"Jerusalem","Level":1,"LocalizedType":"District","EnglishType":"District","CountryID":"IL"},"TimeZone":{"Code":"IST","Name":"Asia/Jerusalem","GmtOffset":2.0,"IsDaylightSaving":false,"NextOffsetChange":"2020-03-27T00:00:00Z"},"GeoPosition":{"Latitude":31.784,"Longitude":35.142,"Elevation":{"Metric":{"Value":628.0,"Unit":"m","UnitType":5},"Imperial":{"Value":2059.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts"]}'
  )
}

export function getLocationForcastById(locationId, isMetric) {
  return JSON.parse(
    '{"Headline":{"EffectiveDate":"2020-01-08T01:00:00+02:00","EffectiveEpochDate":1578438000,"Severity":3,"Text":"Expect showery weather late Tuesday night through Friday afternoon","Category":"rain","EndDate":"2020-01-10T19:00:00+02:00","EndEpochDate":1578675600,"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"},"DailyForecasts":[{"Date":"2020-01-05T07:00:00+02:00","EpochDate":1578200400,"Temperature":{"Minimum":{"Value":9.4,"Unit":"C","UnitType":17},"Maximum":{"Value":15.2,"Unit":"C","UnitType":17}},"Day":{"Icon":18,"IconPhrase":"Rain","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":39,"IconPhrase":"Partly cloudy w/ showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"},{"Date":"2020-01-06T07:00:00+02:00","EpochDate":1578286800,"Temperature":{"Minimum":{"Value":11.3,"Unit":"C","UnitType":17},"Maximum":{"Value":18.3,"Unit":"C","UnitType":17}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":33,"IconPhrase":"Clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"},{"Date":"2020-01-07T07:00:00+02:00","EpochDate":1578373200,"Temperature":{"Minimum":{"Value":9.7,"Unit":"C","UnitType":17},"Maximum":{"Value":16.9,"Unit":"C","UnitType":17}},"Day":{"Icon":17,"IconPhrase":"Partly sunny w/ t-storms","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":40,"IconPhrase":"Mostly cloudy w/ showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"},{"Date":"2020-01-08T07:00:00+02:00","EpochDate":1578459600,"Temperature":{"Minimum":{"Value":10.9,"Unit":"C","UnitType":17},"Maximum":{"Value":14.7,"Unit":"C","UnitType":17}},"Day":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Heavy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"},{"Date":"2020-01-09T07:00:00+02:00","EpochDate":1578546000,"Temperature":{"Minimum":{"Value":10.4,"Unit":"C","UnitType":17},"Maximum":{"Value":16.1,"Unit":"C","UnitType":17}},"Day":{"Icon":12,"IconPhrase":"Showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":39,"IconPhrase":"Partly cloudy w/ showers","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"}]}'
  )
}