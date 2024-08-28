import { useState } from "react"
import { useTranslation } from "react-i18next"
import Alert from "./Alert"


export default function Card(){
    const {t}=useTranslation()
    const [selectedLanguage,setSelectedLanguage]=useState('en')
    const {i18n}=useTranslation()
    const [showAlert,setShowAlert]=useState(false)

    const handleChange=(e)=>{
        setSelectedLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setShowAlert(true)
    }
    return(
    <div className="card-container">
        <h1>{t('title')}</h1>
        <form>
            <div>
                <label htmlFor="name">{t('name')}: </label>
                 <input type="text" name="name" id="" />
            </div>
            <div>
                <label htmlFor="email">{t('email')}: </label>
                 <input type="text" name="email" id="" />
            </div>
            <div>
                <label htmlFor="address">{t('address')}: </label>
                 <input type="text" name="address" id="" />
            </div>
            <div>
                <label htmlFor="id">{t('id')}: </label>
                 <input type="text" name="id" id="" />
            </div>
            <div>
                <label htmlFor="phone">{t('phone')}: </label>
                 <input type="text" name="phone" id="" />
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
        {showAlert&&(<div> <Alert msg={t('successMessage')} confLabel={t('confirm')} setShowAlert={setShowAlert} /> </div>)}
    </div>
    )
}