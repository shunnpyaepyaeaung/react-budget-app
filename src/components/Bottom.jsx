import React from 'react'

function Bottom({ income, expense,deleteit }) {
    return (
        <div className="ui equal width center aligned padded grid">
            <div className="row">
                <div className="column title" style={{color:'#1aa6b7'}}>INCOME</div>
                <div className="column title" style={{color:'#d7385e'}}>EXPENSE</div>
            </div>

            {/* Income Card */}

            <div className="row">
                <div className="column">
                    {
                        income.length > 0 ? <div className="ui card budgetCard">
                        <div className="content">
                            {
                                income.map((e,i)=>{
                                    return <div className="meta">
                                    <span className="left floated description">{e.description}</span>
                                    <span className="center floated amount">${e.amount}</span>
                                    <span className="right floated">
                                        <i className="trash alternate outline icon" 
                                        onClick={()=>{
                                            deleteit(i,'income')
                                        }}
                                        ></i>
                                    </span>
                                </div>
                                })
                            }
                        </div>
                    </div>: ''
                    }
                    

                </div>

                {/* Expense Card */} 
                <div className="column">
                    {
                        expense.length > 0 ?  <div className="ui card budgetCard">
                        <div className="content">
                            {
                                expense.map((e,i)=>{
                                    return <div className="meta">
                                    <span className="left floated description">{e.description}</span>
                                    <span className="center floated amount">${e.amount}</span>
                                    <span className="right floated">
                                        <i className="trash alternate outline icon"
                                         onClick={()=>{
                                            deleteit(i,'expense')
                                        }}
                                        ></i>
                                    </span>
                                </div>
                                })
                            }
                            

                        </div>
                    </div>: ''
                    }
                   
                </div>
            </div>

        </div>

    )
}

export default Bottom
