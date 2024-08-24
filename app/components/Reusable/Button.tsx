type ButtonType = {
    amount: number
    onClick: () => void
}
const Button: React.FC<ButtonType> = ({onClick, amount}) => {
    return(
        <button onClick={onClick} className="w-[5vw] py-3 rounded-[10px] bg-[#f2d264] text-black">
            {amount}
        </button>
    )
}

export default Button