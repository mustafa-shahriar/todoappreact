import {useEffect, useState ,useRef} from "react"

const Input = ({initialValue,passInputValue , btn , isfocus}) => {

    const [text , setText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setText(initialValue);
        if(isfocus) inputRef.current.focus();
      }, [initialValue,isfocus]);

    const onChangeHandlerOfInput = (e)=>{
      setText(e.target.value);
    }

    const formSubmitHandler = (e)=>{
      e.preventDefault();
      passInputValue(text);
      setText("");
      e.target[0].blur();
    }

    return (
      <form className="bg-slate-400 rounded p-2 mt-2 flex justify-between" onSubmit={formSubmitHandler}  >

        <input type="text"
        required={true}
        className="flex-1 rounded pl-2 outline-none"
        placeholder="Write you task here"
        ref={inputRef} value={text}
        onChange={onChangeHandlerOfInput} />

        <button type="submit"className="bg-slate-200 rounded pr-2 pl-2 hover:bg-slate-300 font-bold text-slate-800 h-8 ml-3" >{btn}</button>
      </form>
  )
}

export default Input