import { useNavigate } from "react-router-dom"

export default function Page2(){
    const navigate=useNavigate()
    
    return(
        <div className="page-2">
            <div><button onClick={()=>navigate(-1)} className="back">Back</button></div>
            <div><button onClick={()=>navigate('/page3')} className="next">Next</button></div>
        </div>
    )
}