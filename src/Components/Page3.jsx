import { useNavigate } from "react-router-dom"

export default function Page3(){
    const navigate=useNavigate()
    window.onpopstate=(e)=>{
        navigate('/')
    }

    return(
        <div className="page-3">
            <button onClick={()=>navigate(-2)}>Back</button>
        </div>
    )
}