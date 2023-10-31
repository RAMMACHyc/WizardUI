
import { useNavigate } from "react-router-dom"
export const OrderSummary = () =>{
    const navigate = useNavigate()
    return( 
    
    <>
   <div>
   <h1>Order confirmed</h1>
   <button onClick={()=>navigate(-1)}>Go Back</button> 
   </div>
   {/* <button onClick={()=>navigate(-1)}>Go Back</button> */}
   </>
)
}
