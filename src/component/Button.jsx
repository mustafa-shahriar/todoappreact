const Button = ({btnName , onClickHandler , onClickHandlerArgument}) => {

  const callTheCallback= ()=>{
    onClickHandler(...onClickHandlerArgument);
  }

  return (
    <button className="bg-slate-200 rounded pr-2 pl-2 hover:bg-slate-300 font-bold text-slate-800 h-8 ml-3"
    onClick={callTheCallback}>{btnName}</button>
  )
}

export default Button