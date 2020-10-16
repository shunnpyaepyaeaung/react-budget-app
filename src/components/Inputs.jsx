import React from 'react'

function Inputs({setAmount, amount, description, setDescription, type,setType, add}) {
    return (
      
            <div className="ui form">
                    <div className="four fields">
                        <div className="field">
                            <select
                            onChange={(e)=>{
                                setType(e.target.value)
                            }}
                            value={type}
                            name="type"
                            className="ui fluid search dropdown">
                                <option disabled value="" selected>Choose...</option>
                                <option value='income'>Income</option>
                                <option value='expense'>Expense</option>      
                            </select>
                        </div>

                        <div className="field">
                            <input 
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }}
                            value={description}
                            type="text" name="description" placeholder="Add description..." />
                        </div>
                        <div className="field">
                            <input
                            onChange={(e)=>{
                                setAmount(e.target.value)
                            }}
                            value={amount}
                            type="number" name="amount" placeholder="Add value..." />
                        </div>
                        <div className="field">
                            <button  onClick={()=>{
                                add()
                            }}
                            className="ui black button add"
                            >Add

                            </button>
            
                        </div>
                    </div>

                </div>
   
        
    )
}

export default Inputs
