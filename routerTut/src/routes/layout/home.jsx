import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Header from "../header/header";
import Footer from "../footer/footer";
import "./home.css"
export default function Home() {
    return (
        <>
            <div className="displayFace">
                <Header />

                <div className="welcomeNote">
                    <h1>Craving something delicious? <span>You're in the right place.</span></h1>
                    <h1 style={{cursor:"pointer"}}>Welcome to Foody Dudy!</h1>
                    <h2 style={{ color: "yellow", fontFamily:"cursive" }}>
                        <TypeAnimation
                            sequence={[
                                'Foody Dudy Serves you Indian',
                                1000,
                                'Foody Dudy Serves you Italian',
                                1000,
                                'Foody Dudy Serves you Chinese',
                                1000,
                                'Foody Dudy Serves you French',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>

                </div>

            </div>

         <Footer/>
        </>
    )
}