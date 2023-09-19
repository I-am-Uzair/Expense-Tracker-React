import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import '../UI/Card';
import Card from '../UI/Card';


function ExpenceItem(props) {


  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenceItem;
