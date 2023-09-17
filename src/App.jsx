import { useEffect, useState } from "react";
import Header from "./component/header"
import Input from "./component/Input"
import Button from "./component/Button";

function App() {

  const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem("taskArray")) || []);
  const [editingIndex, setEditionIndex] = useState(-1);


  useEffect(()=>{
    localStorage.setItem("taskArray",JSON.stringify(taskArray));
  },[taskArray])

  const addTask = (value)=>{
    setTaskArray([...taskArray,{title : value,completed : false}]);
    
  }

  const removeTask = (index)=>{
    const newArray = [...taskArray];
    newArray.splice(index,1);
    setTaskArray(newArray);
  }

  const aditTask = (value)=>{
    const newArray = [...taskArray];
    newArray[editingIndex].title= value;
    setEditionIndex(-1);
    setTaskArray(newArray);
  }

  const markOrUnmarkTask = (index)=>{
    const newArray = [...taskArray];
    newArray[index].completed = newArray[index].completed ? false : true;
    setTaskArray(newArray);
    
  }

  return (
    <div className="bg-slate-500 min-h-screen p-2">
      <div className="max-w-2xl mr-auto ml-auto p-2">
        <Header/>
        {
          editingIndex === -1 ?
          <Input passInputValue={addTask} initialValue="" btn="Add" isfocus={false}/> :
          <Input passInputValue={aditTask} initialValue={taskArray[editingIndex]?.title} btn="Save" isfocus={true} />
        }

        <ul>

          {
            taskArray.length === 0 && <h1 className="bg-slate-400 mt-2 p-2 rounded">{"You don't have anything to do"}</h1>
          }

            {
              taskArray.map((element,index)=>
                <li
                  className={editingIndex == index ?
                    "bg-slate-400 mt-2 p-2 rounded flex justify-between animate-fade-in animate-pulse" :
                    "bg-slate-400 mt-2 p-2 rounded flex justify-between animate-fade-in"}
                    key={index}>

                    <div className="flex items-center gap-2">
                      <input type="checkbox"
                      checked={element.completed}
                      onChange={markOrUnmarkTask.bind(null,index)}/>
                      <p>{element.title}</p>
                    </div>

                    <div>
                      <Button
                      btnName="Edit"
                      onClickHandler={setEditionIndex}
                      onClickHandlerArgument={[index]} />

                      <Button
                      btnName="delet"
                      onClickHandler={removeTask}
                      onClickHandlerArgument={[index]} />
                    </div>
              </li>)
            }

        </ul>
        
      </div>
    </div>
  )
}

export default App
