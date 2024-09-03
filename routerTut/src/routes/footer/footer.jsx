
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function Footer() {
    return (
        < div className='container' style={{height:"55vh",fontFamily:"monospace", backgroundColor:"#4d1614", fontSize:"larger",color:"white"}}>
            <div style={{display:"flex",
                 flexDirection:"row",
                  textAlign:"left", 
                  fontFamily:"cursive", 
                  listStyle:"none",
                  position: 'relative',
                  left:'10rem',
                  }}>
                <div className="row1" >
                    <ul style={{listStyle:"none", marginTop:"20%"}}>
                        <li>News</li>
                        <li>Blogs</li>
                        <li>Story</li>
                        <li>Career</li>
                        <li>FAQ</li>
                        <li>Invester List</li>
                        <li>Foody Dudy Partnership</li>
                    </ul>
                </div>
                <div className="row2" style={{marginLeft:"3%"}}>
                    <ul style={{listStyle:"none", marginTop:"20%"}}>
                        <li>Corporate Enquiry</li>
                        <li>Frenchise</li>
                        <li>Media Coverage</li>
                        <li>Nutrition Information</li>
                        <li>Upcoming Events</li>
                    </ul>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.703877840022!2d78.45868184999999!3d17.439314500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b75c1988e9%3A0x75293046633e6d5c!2sBegumpet!5e0!3m2!1sen!2sin!4v1724156178410!5m2!1sen!2sin" 
                
                width="350" 
                height="190" style={{border:"2",borderRadius:"8px", position:"relative", left:"10rem",top:"2rem"}} allowFullScreen="yes" loading="lazy"></iframe>
            </div>

            <div>
                <div><ul style={{listStyle:"none", marginTop:"3%", display:"flex", flexDirection:"row", justifyContent:"space-around", width:"40%", position:"relative" , left:"30rem"}} >
                    <li>@2024 Copyright Foody Dudy</li>|
                    <li>Terms & Conditions</li>|
                    <li>Privacy Policy</li>
                </ul>
                </div>
                <div style={{marginTop:"2%", position:"relative", left:"40rem", display:"flex", flexDirection:"row", justifyContent:"space-between", width:"10%"}}>
                    <FaFacebook size={32} color="white" />
                    <FaInstagram size={32} color="white" />
                    <FaTwitter size={32} color="white" />
                </div>
            </div>
        </div>);
}