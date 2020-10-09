import React from 'react';
import s from './Card.module.css';


function Card({temp, daily, description, icon, index}) {

    let temperature = Math.round(temp);
   
    function timeConverter(daily){
        const date = new Date(daily * 1000);
        const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','ноября','Декабря'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
        const weekday = days[date.getDay()];
        const time = `${day} ${month} ${weekday}`;
        return time;
    }
    const resultDay = timeConverter(daily);
    

    return(
        <div key={index} className={s.card}>
            <p className={s.date}>{resultDay}</p>
            <p className={temperature < 15 ? s.cold_day : s.hot_day}>{temperature}&deg;C</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className={s.icon}/>
            <p className={s.desc}>{description}</p>
        </div>
    )
}

export default Card;