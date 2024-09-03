import Header from "../header/header";
import Footer from "../footer/footer";
import "./contactus.css";


export default function Contactus() {
    return (
        <div>
            <Header />



            <div className="ContactUs" >

               <div className="left">
                    <h1>Contact Us</h1>
                </div>

                <div className="right">
                    <h1>Address</h1>
                    <strong>Oyester Complex,Somajiguda,Begumpet</strong><br></br>
                    <strong>Adj. Malabar Gold,500016</strong><br></br>
                    <strong>Hyderabad, Telangana</strong><br></br>
                    <strong style={{ fontSize: "1.4rem" }}>✆ +91 6283426683</strong><br></br>
                    <strong style={{ fontSize: "1.4rem" }}> 💌 rm8619700@gmail.com</strong><br></br>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.703877840022!2d78.45868184999999!3d17.439314500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b75c1988e9%3A0x75293046633e6d5c!2sBegumpet!5e0!3m2!1sen!2sin!4v1724156178410!5m2!1sen!2sin"

                        width="370"
                        height="190" style={{ border: "2", borderRadius: "8px", marginTop:"3%" }} allowFullScreen="yes" loading="lazy"></iframe>
                </div>
            </div>
        
<img src="https://img.freepik.com/free-vector/restaurant-chef-cook-waiter-kitchen-workers-characters-apron-chief-hat-professional-cafe-staff-waitress-manager-with-menu-vector-cartoon-illustration_107791-21883.jpg?w=826&t=st=1724314027~exp=1724314627~hmac=25341b123c636c62936bbffacfc4ca820e3f003b45dd506cfa4bd1bc30f2027f" style={{marginLeft:"20%"}
}></img>

            <Footer />
        </div>
    )
}