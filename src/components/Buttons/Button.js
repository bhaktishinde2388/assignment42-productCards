import "./../../components/Buttons/Button.css"
const Button =({text})=>
    {
        return(
            <>
            <div>
            <button type="submit" className="button-container">{text}</button>
            </div>
            </>
        )
    }

    export default Button