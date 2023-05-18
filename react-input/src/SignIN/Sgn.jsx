// import React, { Component } from 'react'
// import './Sgn.css'
// export default class Sgn extends Component {
//     state={
//       name :'',
//       ID :'',
//       email:'',
//       Phone:'',
//       Simptom:''
//     }


//     handleChange(event){
//      let = this.setState {name,value} = event.target;
//       setFormData((preverFormData)=>{
//         ...preverFormData,
//        [name] : value
// })
//     }
    
//      handleSubmit=(event)=>{
//              event.preventDefault();
//             alert("Cart Qeydiyyatdan kecdi");
//             console.log(formData);
// }
//   render() {
//   return (
//     <div className='box'>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Name</p>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />

//           <p>ID</p>
//           <input type="text" name="ID" value={formData.ID} onChange={handleChange} />
//           <br />

//           <select className='gen' name="gender" id="Gen" value={formData.gender} onChange={handleChange}>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>

//           <br />
//           <p>Email</p>
//           <input type='email' name="email" value={formData.email} onChange={handleChange} />

//           <br />
//           <p>Phone</p>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

//           <br />
//           <p>Simptomlar</p>
//           <input type="text" className='simptomlar' name="symptoms" value={formData.symptoms} onChange={handleChange} />
//                   <br />
//           <input type="checkbox" />

//           <button type="submit">Submit</button>
//         </label>
//       </form>
//     </div>
//   );
// };
// }
import React, { Component } from 'react';
import './Sgn.css';

export default class Sgn extends Component {
  state = {
    name: '',
    ID: '',
    email: '',
    phone: '',
    symptoms: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Cart Qeydiyyatdan kecdi");
    console.log(this.state);
  };

  render() {
    const { name, ID, email, phone, symptoms } = this.state;

    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input type="text" name="name" value={name} onChange={this.handleChange} />

            <p>ID</p>
            <input type="text" name="ID" value={ID} onChange={this.handleChange} />
            <br />

            <select className="gen" name="gender" id="Gen" value={this.state.gender} onChange={this.handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <br />
            <p>Email</p>
            <input type="email" name="email" value={email} onChange={this.handleChange} />

            <br />
            <p>Phone</p>
            <input type="text" name="phone" value={phone} onChange={this.handleChange} />

            <br />
            <p>Simptomlar</p>
            <input type="text" className="simptomlar" name="symptoms" value={symptoms} onChange={this.handleChange} />
            <br />
            <input type="checkbox" />

            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}




