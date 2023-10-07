import React from 'react'
import "./index.css"
import logo from "../../images/logo.jpg"
const Header = () => {
    return (
        <div className='container'>
            <p style={{ fontSize: "30px", marginTop: "25px", fontWeight: 700 }}>WELCOME TO ANANT NIDHI PRIVATE LIMITED</p>
            <p style={{ marginTop: "-4px" }}>235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar Haryana - 125001</p>

            <div style={{ display: "flex", flexDirection: "row", marginTop: "-9px" }}>
                <p style={{ marginRight: "30px" }}>Contact: 9015702702</p>
                <p>
                    Email: infopb77@gmail.com
                </p>
            </div>
            <p style={{ marginTop: "5px" }}>CIN NO.: U65999HR2018PLC077024</p>
        </div>
    )
}

export default Header
