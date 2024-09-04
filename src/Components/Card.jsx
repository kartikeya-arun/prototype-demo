import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Alert from "./Alert"
import { setDefaultNamespace } from "i18next"


export default function Card(){
    const {t}=useTranslation()
    const [selectedLanguage,setSelectedLanguage]=useState('en')
    const {i18n}=useTranslation()
    const [showAlert,setShowAlert]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [id,setId]=useState('')
    const [phone,setPhone]=useState('')
    const [response,setResponse]=useState(null)
    const [apiUrl,setApiUrl]=useState('http://localhost:3001/submit')

    const handleChange=(e)=>{
        setSelectedLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

    const handleApiUrl= () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
        // Check for specific WebView identifiers in the user-agent string
        if (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent) || 
               /Android.*Version\/[\d+\.]+\s*Chrome/i.test(userAgent)){
                setApiUrl('http://10.0.2.2:3001/submit')
               }
      };

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const req={
            name,
            email,
            address,
            id,
            phone
        }
        try {
            const res=await fetch(apiUrl,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(req)})
            const result=await res.json()
            console.log(result)
            setResponse(result)
        } catch (error) {
            console.error('Error:',error)
            setResponse({error:'something went wrong'})
        }
        setShowAlert(true)
    }
    useEffect(()=>{
        handleApiUrl()
    },[])
    return(
    <div className="card-container">
        <h1>{t('title')}</h1>
        <form>
            <div>
                <label htmlFor="name">{t('name')}: </label>
                 <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">{t('email')}: </label>
                 <input type="text" name="email" id="" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="address">{t('address')}: </label>
                 <input type="text" name="address" id="" onChange={(e)=>setAddress(e.target.value)} />
            </div>
            <div>
                <label htmlFor="id">{t('id')}: </label>
                 <input type="text" name="id" id="" onChange={(e)=>setId(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">{t('phone')}: </label>
                 <input type="text" name="phone" id="" onChange={(e)=>setPhone(e.target.value)} />
            </div>
            {!showAlert&&(<button onClick={(e)=>handleSubmit(e)}>{t('submit')}</button>)}
        </form>
        <div>
            {t('language')}: <label htmlFor="lang">English</label>
            <input type="radio" value="en" id="" checked={selectedLanguage==='en'} onChange={(e)=>handleChange(e)} />
            <label htmlFor="lang">हिंदी</label>
            <input type="radio" value="hi" id="" checked={selectedLanguage==='hi'} onChange={(e)=>handleChange(e)} />
            <label htmlFor="lang">मराठी</label>
            <input type="radio" value="mr" id="" checked={selectedLanguage==='mr'} onChange={(e)=>handleChange(e)} />
        </div>
        {showAlert&&(<div> <Alert msg={response?.message?t('successMessage'):t('failureMessage')} confLabel={t('confirm')} setShowAlert={setShowAlert} failed={response?.error&&1} /> </div>)}
    </div>
    )
}