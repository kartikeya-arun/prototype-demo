import { useState } from "react"
import { useTranslation } from "react-i18next"


export default function Card(){
    const {t}=useTranslation()
    const [selectedLanguage,setSelectedLanguage]=useState('en')
    const {i18n}=useTranslation()

    const handleChange =(e)=>{
        setSelectedLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

    return(
    <div className="card-container">
        <h1>{t('title')}</h1>
        <p>
            <div>{t('name')}: John Doe</div>
            <div>{t('email')}: johndoe@email.com</div>
            <div>{t('address')}: Earth</div>
            <div>{t('id')}: 8769504213</div>
            <div>{t('phone')}: 9182546730</div>
        </p>
        <p>
            {t('language')}: <label htmlFor="lang">English</label>
            <input type="radio" value="en" id="" checked={selectedLanguage==='en'} onChange={(e)=>handleChange(e)} />
            <label htmlFor="lang">हिंदी</label>
            <input type="radio" value="hi" id="" checked={selectedLanguage==='hi'} onChange={(e)=>handleChange(e)} />
            <label htmlFor="lang">मराठी</label>
            <input type="radio" value="mr" id="" checked={selectedLanguage==='mr'} onChange={(e)=>handleChange(e)} />
        </p>
    </div>
    )
}