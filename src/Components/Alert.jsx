export default function Alert(props){
    const {msg, confLabel, setShowAlert, failed}=props
    const handleConfirm=()=>{
        setShowAlert(false)
    }
    return(
        <div className="alert-container">
            <p style={!failed?{color:'#499c66'}:{color:'red'}}>{msg}</p>
            <button onClick={handleConfirm}>{confLabel}</button>
        </div>
    )
}