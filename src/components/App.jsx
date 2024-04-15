import React,{useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { useSelector } from "react-redux";

function App() {


 const notes = useSelector((state) => state.counter.list)
  
/*useEffect(()=>{
  const data = window.localStorage.getItem('TO_DO_LIST');
  
},[])*/
 
  return (
    <div>
      <Header />
      <TaskInput />
      {notes.map((noteItem, index) => {
        return (
          <TaskList
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
           
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
