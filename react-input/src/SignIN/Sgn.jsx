import React, { Component } from 'react'
import './Sgn.css'
export default class Sgn extends Component {
  render() {
    return (
      <div className='box'>Sgn
      <form action="">

        <label htmlFor="">Pasientin Tam adi
            <input type="text" />
      

            Passport Nomresi
            <input type="text" />
        
        <select name="gender" id="Gen">
         <option value="Male">Male</option>
         <option value="Female">Female</option>
        </select>
       <br />
       Email 
        <input type='email' />
      
       <br />
       Phone
        <input type="text" />
       </label>
       








      </form>
      
      
      
      
      
      
      
      </div>
    )
  }
}
