import React from 'react';
import dash from "../asset/dash.png";

const Dialog = () => {
    return (
        <>
        <div className='container' style={{marginLeft: '12%'}}>
            <button style={{color: 'lightblue', backgroundColor: 'white', border: 'none', marginRight: '2%', fontSize: '250%', marginTop: '2%', width: '12%', height: '20%'}}>Register<br />
                10
            </button>
            <button style={{color: 'lightblue', backgroundColor: 'white', border: 'none', marginRight: '2%', fontSize: '250%', marginTop: '2%', width: '12%', height: '10%'}}>Closed<br />
                3
            </button>
            <button style={{color: 'lightblue', backgroundColor: 'white', border: 'none', marginRight: '2%', fontSize: '250%', marginTop: '2%', width: '12%', height: '10%'}}>Running<br />
                13
            </button>
            <button style={{color: 'lightblue', backgroundColor: 'white', border: 'none', marginRight: '2%', fontSize: '250%', marginTop: '2%', width: '12%', height: '10%'}}>Closure Delay<br />
                1
            </button>
            <button style={{color: 'lightblue', backgroundColor: 'white', border: 'none', marginRight: '2%', fontSize: '250%', marginTop: '2%', width: '12%', height: '10%'}}>Cancelled<br />
                10
            </button>
        </div>
        <h1 style={{marginLeft: "10%", fontSize: '250%'}}>Project Plan Vs Actual</h1>
        <div>
              <img src={dash} style={{width:'60%', marginTop:'5%', marginLeft:'8%'}} />
              
        </div>
     </>
)
}

export default Dialog
