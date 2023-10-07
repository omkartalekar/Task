import React from 'react'
import "./index.css"
import List from '../../Component/List/ListI';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
const commonText = 'Liquidity. One of the benefits of opening a savings account is that it offers you liquidity';

const items = [
  commonText, commonText,
  commonText, commonText
]

const Login = () => {
  return (
    <div className='mainContainer'>
      <div className='containerr'>
        <p style={{
          fontWeight: "600", fontSize: "20px", backgroundColor: "#192A6D",
          color: "#fff", borderRadius: "25px", padding: "5px 70px"

        }}>Benefits of Saving Account </p>
        {items.map((text, index) => (
          <List key={index} text={text} />
        ))}
      </div>

      <div className='containerrr'>
        <div style={{
          width: "80%",
          borderRadius: "15px",
          backgroundColor: "#fff",
          margin: "40px",
          display: 'flex',
          flexDirection: 'column',
          height: "70%",
          paddingLeft: "15%",
          paddingTop: "20px"
        }}>

          <label style={{ color: "#192A6D", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }} htmlFor="Enter Number
">Enter Number</label>
          <div style={{ width: "300px", display: "flex", flexDirection: 'row', justifyContent: 'flex-start', justifyItems: 'center', alignItems: 'center', height: "15%", border: "1px solid grey", marginBottom: "10px" }}>
            <PersonIcon style={{ marginLeft: "10px", color: "grey", width: "20px", height: "18px" }} />

            <input type="text" style={{}} placeholder='Enter Mobile No.'>

            </input>
          </div>

          <label style={{ color: "#192A6D", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }} htmlFor="Enter Number
">Enter Password</label>
          <div style={{ width: "300px", display: "flex", flexDirection: 'row', justifyContent: 'flex-start', justifyItems: 'center', alignItems: 'center', height: "15%", border: "1px solid grey", marginBottom: "10px" }}>
            <LockIcon style={{ marginLeft: "10px", color: "grey", width: "20px", height: "16px" }} />

            <input type="password" style={{ marginRight: "20%" }} placeholder='Enter Password'>

            </input>
            < VisibilityIcon style={{ display: 'flex', justifyItems: "flex-end", width: "20px", height: "16px", color: "grey" }} />
          </div>

          <div style={{
            display: "flex", justifyContent: 'flex-end', width: "80%", marginTop: "-20px", fontSize: "13px", marginLeft: "-20px", color: "#192A6D"
          }}>
            <p>Forget Password ?</p>
          </div>
          <div style={{ width: "50px", display: "flex", justifyContent: 'center', alignItems: 'center', height: "15%", backgroundColor: "#192A6D", marginBottom: "5px", color: "#fff", borderRadius: "15px", padding: "0px 55px", textAlign: "center", fontWeight: 600, marginLeft: "15%", marginTop: "-5px" }}>



            <p>Login</p>


          </div>

          <p style={{ display: "flex", justifyContent: 'center', alignItems: 'center', color: "#192A6D", textAlign: "center", fontWeight: 600,marginRight:"100px"}}>Become a Member</p>

        </div>


      </div>


    </div>
  )
}

export default Login
