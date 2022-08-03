import "./weather.css"

const Weather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Mon cul</p>
                    <p className="weather-description">Il fait beau</p>
                </div>
                <img src="icons/01d.png" alt="weather" className="weather-icon"/>
            </div>
            <div className="bottom">
                <p className="temperature">30°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">20%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;