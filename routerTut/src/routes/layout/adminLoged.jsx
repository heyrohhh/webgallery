import React, { useState, useEffect } from "react";
import "./adminlogged.css";

export default function AdminLoged() {
    const [items, setItems] = useState([]);
    const [customerDetails, setCustomerDetails] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("order");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setItems(parsedData);
        }
    }, []);

    useEffect(() => {
        const storedData = localStorage.getItem('customer');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setCustomerDetails(parsedData);
            } catch (error) {
                console.error('Error parsing customer data:', error);
            }
        }
    }, []);

    function handleOrderCmplt(itemId) {
        const filteredItems = items.filter((item) => item.id !== itemId);
        setItems(filteredItems);
        localStorage.setItem("order", JSON.stringify(filteredItems));
    }

    return (
        <div className="body">
            <h1 style={{textAlign:"center", marginTop:"1px"}}>Hello Foody Dudy</h1>
            <div style={{marginTop:"2%", marginLeft:"15%"}}>
                <div className="sec1a">
                    <h1 style={{ textAlign: "center" }}>Orders</h1>
                    <div className="vega">
                        {items.length > 0 ? (
                            <div className="vegItema">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Customer Detail</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>₹{item.price}</td>
                                                <td  id="cd" >
                                                    {customerDetails.map((customer, index) => (
                                                        <td key={index}>
                                                            <tr>{customer.name}</tr>
                                                            <tr> {customer.number} </tr>
                                                            <tr> {customer.address} </tr>
                                                        </td>

                                                    ))}
                                                </td>
                                                <td>
                                                    <button onClick={() => handleOrderCmplt(item.id)}>
                                                        Order Complete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No orders found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
