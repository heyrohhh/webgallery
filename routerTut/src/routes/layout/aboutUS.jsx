import Header from "../header/header";
import Footer from "../footer/footer";
import "./aboutus.css";

export default function Aboutus(){
 return(
    <>
        <Header/>
            
            <div>
                <div className="Info">
                <img src="https://img.freepik.com/free-photo/young-baker-holding-some-bread-doing-coming-gesture_1368-9882.jpg?size=626&ext=jpg&ga=GA1.1.125324066.1724308515&semt=ais_hybrid"></img>
                <p className="InfoPara">
                    <h1 style={{textAlign:"center", textDecoration:"underline"}}>Our Story</h1>
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem voluptatum excepturi dolor reprehenderit. Non sed excepturi voluptas reprehenderit ipsum ex rem debitis? Tenetur delectus cumque quia dolores quo architecto hic dolore! Provident delectus omnis error in non modi beatae illum illo consectetur laborum ipsam numquam fuga, quidem reiciendis aliquid enim inventore, distinctio aperiam esse ratione eligendi suscipit officiis. Ab animi ipsum provident voluptatem cum ea soluta repellendus, asperiores dolorem recusandae doloribus architecto magnam laudantium, molestiae laborum illum reiciendis aut eum, possimus odit consectetur harum distinctio numquam! Consectetur excepturi culpa totam voluptatem delectus voluptatibus, ipsam sapiente, at repellendus fugit amet odit labore adipisci sequi quam veniam cum laborum unde esse nobis! Eum, itaque repellendus nulla dolores qui nemo ipsa eius. Aperiam pariatur totam alias inventore numquam, nihil, iste dignissimos vel non ad iusto laboriosam, facere modi nulla cumque et maiores repudiandae labore perferendis laudantium praesentium ullam nisi eos itaque? Tenetur cumque dolores quam fuga dolorum, aperiam quibusdam itaque vero ab est, ipsam animi corrupti nihil ratione debitis reiciendis perferendis, voluptas nobis iste illo accusantium provident. Dolorem ipsam quam voluptatem accusamus necessitatibus quis, magnam explicabo, laborum tempore repudiandae nihil, deserunt vitae nesciunt reprehenderit voluptate quod corrupti. Cum alias deleniti sit placeat.
                </p>
                </div>
                             <h1 style={{textAlign:"center",fontSize:"3.5rem", fontFamily:"cursive"}}>Work Culture</h1>
                <div className="team">
                    <div className="left">
                    <img src="https://img.freepik.com/premium-photo/hospitality-hotel-staff-welcoming-gue-four-women-wearing-white-shirts-with-word-airline-them_1143370-4835.jpg?w=740" style={{width:"40rem", height:"30.3rem"}}></img>
                    </div>
                    <div className="right" style={{marginLeft:"3%"}}>
                    <img src="https://img.freepik.com/premium-photo/waitress-wearing-apron-restaurant-holding-tray-food_1061358-240183.jpg?w=740" style={{width:"20rem", height:"15rem"}}></img>
                    <img src="https://img.freepik.com/premium-photo/man-holding-plate-food-with-name-broccoli-it_662214-677393.jpg?w=740" style={{width:"20rem", height:"15rem"}}></img>
                    </div>

                    <div className="left" style={{width:"40%"}}>
                     <img src="https://img.freepik.com/free-photo/man-chef-frying-meat-pan-fire_1303-32153.jpg?t=st=1724310242~exp=1724313842~hmac=ca072ef7e5fd849ff79f2042077b2c0a16bf85e06f1b73a041626bd979b9319d&w=740" style={{width:"20rem", height:"15rem"}}></img>
                    <img src="https://img.freepik.com/free-photo/cook-standing-with-sauce-bottle-salad_23-2148040164.jpg?t=st=1724310362~exp=1724313962~hmac=b4603d58f91028ecf784b9fc24b0e23c310bf5265af292b04437479c91b820a5&w=740"style={{width:"20rem", height:"15rem"}}></img>
                    </div>
                  
                    <div className="right" style={{position:"relative", right:"31rem"}}>
                    <img src="https://img.freepik.com/free-photo/group-chefs-working-kitchen_53876-42734.jpg?t=st=1724309068~exp=1724312668~hmac=55af635f305bcae14f981d6d88904cf1c4d87ec2212e4e7b70a0e47563282530&w=740"  style={{width:"40rem", height:"30.3rem"}}></img>
                    </div>
                </div>
                 
            </div>

        <Footer/>
    </>
 )
}