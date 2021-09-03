import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [noteInput, setNoteInput] = useState({
    title: "",
    content: ""
  });

  const[expand, setExpand]=useState(false)

function handleOnChange(event){
  const {name, value} = event.target;

  setNoteInput(prevValue => {
    return{
      ...prevValue,
      [name] : value
    };
  });
}

function handleClick(){
  setExpand(true);
}

function handleOnClick(event){
  props.onAddNote(noteInput);
  setNoteInput({
    title: "",
    content: ""
  });
  event.preventDefault()
}

  return (
    <div>
      <form className="create-note">
      {expand && <input onChange={handleOnChange}  name="title" value={noteInput.title} placeholder="Title" autocomplete="off" /> }

        <textarea
        onChange={handleOnChange}
        onClick={handleClick}
        name="content" value={noteInput.content}
        placeholder="Take a note..."
        rows={expand ? "3" : "1"}  />
        <Zoom in={expand}>
        <Fab onClick={handleOnClick}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
