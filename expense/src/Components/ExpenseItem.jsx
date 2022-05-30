import React from 'react';

function ExpenseItem(props){
      
    //  const ExpenseDate= new Date(28,2,2020)
    //  const ExpenseTitle=' Car Insurance '
    //  const ExpenseAmount= 294.67
    // {props.title}
    // {props.date.toISOString()}
    // ${props.amount}

    return (
         <div className='expense-item'>
             <div className='date_color'>{props.title}</div>
             <div className='expense-item__description' >
                 <h2 >{props.title}</h2>
                 <div className="expense-item__price">${props.title}</div>
             </div>
         </div>
    );
}


export default ExpenseItem;



