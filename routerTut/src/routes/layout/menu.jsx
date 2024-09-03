import { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const [order, setOrder] = useState([])

    const MenuItems = [
        {
            id: 1,
            image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
            name: "Paneer Butter Masala",
            price: 230,

        },
        {
            id: 2,
            image: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
            name: "Paneer Tikka",
            price: 150,

        },
        {
            id: 3,
            image: "https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg",
            name: "Chana Masala",
            price: 140,

        },
        {
            id: 4,
            image: "https://assets.bonappetit.com/photos/57acbd6053e63daf11a4d993/1:1/w_2560%2Cc_limit/bas-best-quiche-lorraine.jpg",
            name: "Quiche Lorraine",
            price: 270,

        },
        {
            id: 5,
            image: "https://www.allrecipes.com/thmb/F1rucOY3FQT5Ic0oyxdLoqU_yKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222006-disneys-ratatouille-DDMFS-4x3-36eb15843ab548a79e7aab761dac92e1.jpg",
            name: "Ratatouille",
            price: 340,

        },
        {
            id: 5,
            image: "    https://www.sandravalvassori.com/wp-content/uploads/2023/09/bruschetta-692.jpg",
            name: "Bruschetta",
            price: 360,

        },
        {
            id: 6,
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
            name: "Butter Chicken",
            price: 290,

        },
        {
            id: 7,
            image: " https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg",
            name: "Chicken Parmesan",
            price: 390,

        },
        {
            id: 8,
            image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-mnXfRSaE5aQTmzQq3mKym-cLT0B1-TBUg&s",
            name: "Meat Balls",
            price: 150,

        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYwm5nrkYpSbIyO2sqCx4jrfS9A_S4OSJcQ&s",
            name: "Coq Au Vin",
            price: 450,

        },
        {
            id: 10,
            image: "https://www.foodandwine.com/thmb/4fNxxosaWn_Eti7KqhTKLlRkjC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Duck-Confit-FT-RECIPE1022-2000-4f0648f877c0475c84e030a8da8200a9.jpg",
            name: "Classic Duck Conflit",
            price: 450,

        },
        {
            id: 10,
            image: "https://www.thespruceeats.com/thmb/xlBD1gmZrGGCnN6TjHH0-agioZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rack-of-lamb-recipe-6753707-hero-01-a8c8cb5efcdb4c1485d37b491d090e71.jpg",
            name: "Rack of Lamb",
            price: 450,

        },
        {
            id: 11,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmGb2LWDG1E5NvKTJjr_tRNvFbDMoccArCg&s",
            name: "Plain Roti",
            price: 12,

        },
        {
            id: 12,
            image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWHJe6tX4IKffXZLhtLCxaA1KuQjIrDmgMg&s",
            name: "Butter Roti",
            price: 15,

        },
        {
            id: 13,
            image: "https://sugargeekshow.com/wp-content/uploads/2020/04/focaccia-bread-art-featured.jpg",
            name: "Focaccia Bread",
            price: 45,

        },
        {
            id: 14,
            image: " https://assets.bonappetit.com/photos/60dceb2ababf47b6008bc41d/4:3/w_1496,h_1122,c_limit/0821-Blueberry%20and%20Peach%20Graham%20Galette.jpg",
            name: "Galette",
            price: 55,

        },
        {
            id: 15,
            image: "https://www.foodorderkar.com/wp-content/uploads/2021/07/images-2021-07-29T102923.347.jpeg",
            name: "Plain Rice",
            price: 50,

        },
        {
            id: 16,
            image: " https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-3-1.jpg",
            name: "Jeera Rice",
            price: 70,

        },
        {
            id: 17,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEE9Oy8CNR0N7j1IMUQyNwQdbJIF7CNNGxA&s",
            name: "Mango Mojito",
            price: 170,

        },
        {
            id: 18,
            image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOrpdjyax1g3cPc5dilL9QhNtyYQ3FTOdXg&s",
            name: "Coca Cola",
            price: 70,

        },
        {
            id: 19,
            image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xs4AJBToYKc-Op3fxTw2VpUM0k6UzXcSLw&s",
            name: "Pineapple Juice",
            price: 70,

        },
        {
            id: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5mbKYbSvKJQTW92FnH6TKKsmrGWkJPwPOQ&s",
            name: "Grapefruit Juice",
            price: 70,

        },
        {
            id: 21,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg",
            name: "Orange Juice",
            price: 50,

        },
        {
            id: 21,
            image: " https://www.acouplecooks.com/wp-content/uploads/2021/12/Lemon-Soda-004.jpg",
            name: "Lime Soda",
            price: 60,

        },
 
    ]

    const orderPrice = () => {
        const add = order.reduce((acc, item) => acc + item.price, 0)
        return add;
    }



    function handleOrder(itemId) {
        const item = MenuItems.find((item) => item.id === itemId)

        if (item) { setOrder([...order, item]) }
    }

    const navigate = useNavigate(); 
    function confirmOrder() {
       
      
        if (order.length <= 0) {
          alert("Hello Foody, Please Add Some Food to Order");
        } else {
            localStorage.setItem('order', JSON.stringify(order)); 
          navigate('/home/menu/orderDetails'); // Use the retrieved navigate function
        }
      }



    return (

        <div>
            <Header />
            <div className="foodMenu">


                <div className="sec1">
                    <div className="veg">
                        {
                            MenuItems.map((item) =>
                            (<div className="vegItem" key={item.id}>
                                <img src={item.image}></img>
                                <h3>{item.name}</h3>
                                <strong>{`₹${item.price} for one`}</strong>
                                <button onClick={() => handleOrder(item.id)}>Order</button>
                            </div>))}

                    </div>
                    
                </div>


                <div className="sec2">
                    <h1 style={{ textAlign: "center" }}>Your Order !</h1>
                    {order.map((item) => (
                        <ul key={item.id}>
                            <li style={{ width: "90%", border: "1px solid black", padding: "8px", marginTop: "6px", borderRadius: "4px" }}>{item.name} ~ {item.price}</li>

                        </ul>
                    ))}


                    <ul style={{ padding: "2%" }}>

                        <li>Total Price: ₹{orderPrice()}</li>

                    </ul>
                    <div className="buttons" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>

                        <button onClick={() => confirmOrder()} style={{ backgroundColor: "white", height: "1.7rem", borderRadius: "8px", width: "80%", fontFamily: "cursive", fontSize: "1rem" }}>
                        Order</button>
                        <button onClick={() => {
                            if (order.length <= 0) {
                                alert("o items are present")
                            } else {
                                setOrder([])
                            }
                        }} style={{ backgroundColor: "white", height: "1.7rem", borderRadius: "8px", width: "80%", fontFamily: "cursive", fontSize: "1rem" }}>Clear Cart</button>
                    </div>

                   

                </div>

            </div>
            <Footer />
        </div>)
}



