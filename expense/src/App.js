import ExpenseItem from './Components/ExpenseItem'
import './App.css';
import './Components/ExpenseItem.css'

function App() {
  var expenses=[
    {id:'e1',title:'Car Insurance',amount:'$234.19',date:new Date(2021,02,28)},
    {id:'e2',title:'Toilet Paper',amount:'$134.65',date:new Date(2021,03,28)},
    {id:'e3',title:'Medical',amount:'$334.23',date:new Date(2020,01,8)},
    {id:'e4',title:'Furniture',amount:'$534.76',date:new Date(2019,09,20)},
  ];

  return (
    <div className="App">
      
      
     <ExpenseItem> title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} </ExpenseItem>
     <ExpenseItem>  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} </ExpenseItem>
     <ExpenseItem> title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} </ExpenseItem>
     <ExpenseItem>  title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} </ExpenseItem>
     
    </div>
  );
}

export default App;
