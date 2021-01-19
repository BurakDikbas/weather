import React from 'react'
import styles from "./index.module.css";
import moment from "moment"

function Card({day}) {
    return (
        <div className={styles.container}>
            <div>
				{moment(day.dt * 1000).format("dddd")}
			</div>
			<img
				src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
				alt=""
			/>
            <div>
                <span className={styles.temp}>{day.temp.max}°</span> 
                <span className={styles.temp}>{day.temp.min}°</span>
            </div>
        </div>
    )
}

export default Card;
