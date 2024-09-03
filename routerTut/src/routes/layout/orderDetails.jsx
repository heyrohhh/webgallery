import './order.css';
import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

export default function OrderDetails() {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);


  function handleName(e) {
    setName(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }




  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleOrderPlacement() {
    if(number.length<10||number.length>10){
      alert("Please Provide Valid Number");
      return;
    }
    const isComplete = name && number && address;
    if (isComplete) {
       // Create an array to store the order details
       const orderDetails = [
        { name, number, address },
        { status: 'completed' } // Additional info if needed
      ];
      
      // Store the array in localStorage
      localStorage.setItem('customer', JSON.stringify(orderDetails));
      setOrderPlaced(true);
    
    }}

    const navigate = useNavigate();
  function goBack() {
        navigate('/')
  }




  return (
    <div className="ggg"style={{ display: 'flex', flexDirection: 'column', fontFamily: 'cursive', width: '50%', padding: '3%', border: '1px solid black', marginLeft: '20%', marginTop: '5%' }}>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Please Provide Delivery Details</h1>
      
        <label style={{ marginTop: '4%', fontSize: '1.5rem' }}>
          Name:
          <input type="text" required="yes" style={{ marginLeft: '1%', width: '25rem', height: '2rem' }} onChange={handleName} />
        </label>
        <label style={{ marginTop: '2%', fontSize: '1.5rem' }}>
          Number:
          <input type="number" required="yes" style={{ marginLeft: '1%', width: '23rem', height: '2rem' }} onChange={handleNumber} />
        </label>
        <label style={{ marginTop: '2%', fontSize: '1.5rem' }}>
          Address:
          <textarea required="yes" style={{ marginLeft: '1%', width: '21.6rem', height: '5rem', resize: 'none', padding: '1.5%' }} onChange={handleAddress} />
        </label>
        <button type="Submit" onClick={handleOrderPlacement} >Place Order</button>
      

         {orderPlaced && (
<div className='show' style={{border:"1.5px solid black", padding:"1%", position:"absolute",top:"10.5%", right:"20%" ,backgroundColor:"white", width:"60%", height:"63vh"}}> 
    
    <div className="chin" style={{display:"flex", flexDirection:"row"}}>
    <img src='https://media1.giphy.com/media/RkSjoKqjpWvlmRvbUk/giphy.webp?cid=790b7611my05g6dhrm5fkbght7ltr306hg7ysxsighhofpt4&ep=v1_gifs_search&rid=giphy.webp&ct=g' style={{height:"15rem", marginLeft:"5%", marginTop:"2%", borderRadius:"150px"}}></img>
      
    <h2 style={{textAlign:"center", marginTop:"15%", marginLeft:"2%"}}>Order Placed Successfully!</h2>
        </div>
<button onClick={goBack}>Go Back</button></div>
         )}
      
    </div>
  );
}