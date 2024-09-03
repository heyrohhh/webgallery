
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Admin(){
  const [userName,setUsername] = useState(null)
const [pass, setPass] = useState(null)
      
function handleUserName(e){
    setUsername(e.target.value)
}

function handlePass(e){
    setPass(e.target.value)
}


const navigate = useNavigate();

    function Auth(){
              
        if(userName === "FoodyDude"||pass ==="Foody@123"){
                navigate('./Logged')
        }else{
            alert ("Username and pass not matched")
            return;
        }
    }
    return(
                    <div className="loginCredential" style={{backgroundColor:"lightcyan", height:"100vh", marginTop:"0px"}}>
<h1  style={{textAlign:"center",fontFamily:"cursive"}}>Hello Admin...</h1>
<h3 style={{textAlign:"center",fontFamily:"cursive"}}>Please Fill Login Credential</h3>

                    <form style={{border:"none", width:"40%", marginTop:"4%", marginLeft:"25%", display:"flex", flexDirection:"column", padding:"2%", fontFamily:"cursive", boxShadow:"0px 0px 20px 10px red",borderRadius:"10px"}}>
                        
                    <label>User Name: <input type="text" onChange={handleUserName} style={{width:"80%",borderRadius:"4px",marginTop:"1rem",fontFamily:"cursive"}}></input></label>
                    <label>Pass ID: <input type="password" onChange={handlePass} style={{width:"84%",borderRadius:"4px", marginTop:"1rem",fontFamily:"cursive"}}></input></label>
                    <button type="submit" onClick={Auth} style={{width:"40%",height:"1.8rem",borderRadius:"4px", marginTop:"1rem",color:"white",marginLeft:"30%", fontFamily:"cursive", fontSize:"large",backgroundColor:"red"}}>Submit</button>
                    </form>
                    
                    
                    </div>
    )
}