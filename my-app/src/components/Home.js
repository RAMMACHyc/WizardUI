import { useNavigate } from "react-router-dom";
import { Img01} from '../assets/img/index'


function Home() {
   
    const navigate = useNavigate()
    return (
        <>
      <div>
        <img className='w-[100%] object-cover' src= {Img01}  alt=""/>
    
        <h1 className="font-bold text-2xl mt-5">Welecome to wizard Tech</h1>
        <div className="mt-5 w-[49rem]">
            <p>This is a fictitious company and conference create by<span style={{color:'red',marginLeft:'2px'}}>amazon Corporation, or its affiliates,</span> solely 
               for the creation and development of educational training materials.Any resemblance to real
               products or services is purely coincidental.Information provided about the products or services is
               also fictitions and should not be construed as representative of actual products or services on the
               market in a similar product or service category</p>
        </div>
           
       </div>
         <button className="px-4 py-2 bg-slate-950 text-white rounded-sm mt-4" onClick={()=>navigate('order-summary',{replace:true})}>Place order</button>
        </>
    );
}

export default Home