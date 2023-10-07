import React from 'react'

const Footer = () => {
    return (
        <div style={{ height: "50%", backgroundColor: "#192A6D", color: "#fff",display:'flex',justifyContent:'space-around' }}>

            <div >
                <p style={{fontWeight:700,fontSize:"20px"}}>Company</p>
                <p>About Us</p>
                <p>Blog</p>
                <p>Careers</p>
            </div>
            <div>
                <p style={{fontWeight:700,fontSize:"20px"}}>Support</p>
                <p>Help Center</p>
                <p>Safety Center
                </p>
                <p>Community Guidelines </p>
            </div>
            <div>
                <p style={{fontWeight:700,fontSize:"20px"}}>Legal</p>
                <p>Cookies Policy
                </p>
                <p>Privacy Policy
                </p>
                <p>Term of Service
                </p>
                <p>Law Enforcement
                </p>
            </div>
            <div>
                
                <p style={{fontWeight:700,fontSize:"20px"}}>Install App</p>
            </div>


        </div>
    )
}

export default Footer
