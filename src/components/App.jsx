import React, {useState} from 'react';
import Container from './Container';
import Inputs from './Inputs';
import Top from './Top';
import Bottom from './Bottom';
import '../styles.css'
import { useEffect } from 'react';

function App() {
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('')
    const [income, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);

    useEffect(()=>{
        if(income.length > 0){
           var sum = 0;
           income.map(e=>{
               sum+= parseInt(e.amount)
           })
           setIncomeTotal(sum)
        }
        
    },[income])

    useEffect(()=>{
        if(expense.length > 0){
           var sum = 0;
           expense.map(e=>{
               sum+= parseInt(e.amount)
           })
           setExpenseTotal(sum)
        }
    },[expense])
 
    function add(){
        if(type === 'income'){
            setIncome([...income,{
                description,
                amount
            }])
            setAmount('')
            setDescription('')
            setType('')
        }else{
            setExpense([...expense,{
                description,
                amount
            }])
            setAmount('')
            setDescription('')
            setType('')
        }
    }
    
    function deleteit(index,deleteType){
        if(deleteType === 'income'){
            setIncome(income.filter((e,i)=>{
                return index !== i
            }))
        }
        else if(deleteType === 'expense'){
            setExpense(expense.filter((e,i)=>{
                return index !== i
            }))
        }
    }

    return (
        <Container>
            <Top incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
            <Inputs type={type} setType={setType} description={description} setDescription={setDescription} amount={amount} setAmount={setAmount}
                add={add}
           />
            <Bottom income={income} expense={expense} deleteit={deleteit}/>
        </Container>
    )
}

export default App
