

function ChangePkmonBtn({ text, change, className }: any) {
    return(
        <input value = {text} className = {`changePkmonBtn ` + className} type="button" onClick={change}></input>
    )
}
export default ChangePkmonBtn;