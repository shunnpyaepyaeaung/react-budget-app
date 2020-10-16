import React from 'react'

function Top({incomeTotal, expenseTotal}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    var date = new Date();
    var month = monthNames[date.getMonth()]
    var year = date.getFullYear();

    return (
        <div className='top'>
            <h1>💸Your Budget in {month},{year}💸</h1>
            
            <div className="ui equal width center aligned padded grid">

                <div className="row">
                    <div className="column">
                        <div className="ui card totalincome">
                            <div className="content">
                                <div className="meta" style={{color:'white'}}>
                                    <span className="left floated title">INCOME</span>
                                    <span className="right floated title">{incomeTotal}</span>  
                                </div>
                        </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui card totalexpense">
                            <div className="content">
                                <div className="meta" style={{color:'white'}}>
                                    <span className="left floated">EXPENSE</span>
                                    <span className="right floated">{expenseTotal}</span>  
                                </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Top
