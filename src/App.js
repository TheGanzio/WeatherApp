import React  from "react";
import Info from "./components/info" ;
import Form from "./components/Form" ;
import Weather from "./components/Weather" ;
import Cities from "./components/Cities" ;

const API_KEY = "6eee7cdc45283b2a1ac79dc1d01fbd94";

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            temp: undefined,
            form: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            error: undefined
        };
    }

    gettingWeather = async (event) => {

            event.preventDefault();
            const CITY = event.target.elements.city.value;

            if (CITY) {
            const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);

            const data = await apiUrl.json();

<<<<<<< HEAD
            const dateRise = new Date(data.sys.sunrise*1000);
=======
            let dateRise = new Date(data.sys.sunrise*1000);
>>>>>>> 31c85f2f1be59cae40baa6aa00a46210a55f0b4f
            const hoursRise = dateRise.getHours();
            const minutesRise = "0" + dateRise.getMinutes();
            const secondsRise = "0" + dateRise.getSeconds();
            const sunrise_date = hoursRise + ':' + minutesRise.substr(-2) + ':' + secondsRise.substr(-2);

            const dateSet = new Date(data.sys.sunset*1000);
            const hoursSet = dateSet.getHours();
            const minutesSet = "0" + dateSet.getMinutes();
            const secondsSet = "0" + dateSet.getSeconds();
            const sunset_date = hoursSet + ':' + minutesSet.substr(-2) + ':' + secondsSet.substr(-2);

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: undefined
            });
        } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    error: "Enter a valid city name"
                });
            }
    };

    render() {
        return (
            <div className="app">
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Cities weatherMethod={this.gettingWeather} />
                <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
                />
            </div>
        );
    }
}

export default App;