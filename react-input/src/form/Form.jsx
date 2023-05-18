import React, { Component } from 'react'
 
import './Form.css';
export default class form extends Component {
     state={

            name :'',
            Surname :'',
            location :'',
            Phonenumber :''

     }


    handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log("gonderildi")
    };

    
  render() {
    return (
<>
<form>

    <label htmlFor="" ><input type="text" /><p> Name</p></label>
    
    
    <label> <input type="text" /><p>Surname</p></label>

   

     <label htmlFor=""><input type="text" /><p> location</p></label>

     <label htmlFor=""><input type="text" /><p>Phonenumber</p></label>




   
   <button>Send</button>
   
    
</form>

</>


    )


    
  }
}
    //     <form  onSubmit={this.handleSubmit}>
    //     <input type='text' onChange={this.handleChange} />
    //     <button type="submit">Submit</button>
    //   </form>