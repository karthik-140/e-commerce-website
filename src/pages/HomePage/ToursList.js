 import { Button } from 'react-bootstrap';
 import classes from './TourList.module.css';
 
 const ToursList = (props) =>{
   return (
    <li className={classes.tourlist}>
        <div className={classes['tour-date']}>{props.date}</div>
        <div className={classes['tour-country']}>{props.country}</div>
        <div className={classes['tour-place']}>{props.place}</div>
        <Button size='sm' className={classes['tour-btn']}>Buy Ticket</Button>
    </li>
   )
}

export default ToursList; 