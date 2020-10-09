import React from 'react';
import s from './Main.module.css';
import Card from '../Card/Card';


const Main = ({weatherLists}) => {
    
    return(
        <div className={s.root}>
            <h2 className={s.title}>Казань</h2>
            <div className={s.card}>
                {
                weatherLists.map(({dt, temp, weather}, index) => (
                    <Card  
                    key={index}
                    daily={dt}
                    temp={temp.day} 
                    description={weather[0].description} 
                    icon={weather[0].icon}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Main;