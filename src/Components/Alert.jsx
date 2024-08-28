export default function Alert(props){
    const {msg, confLabel, setShowAlert}=props
    const handleConfirm=()=>{
        setShowAlert(false)
    }
    return(
        <div className="alert-container">
            <p>{msg}</p>
            <button onClick={handleConfirm}>{confLabel}</button>
        </div>
    )
}