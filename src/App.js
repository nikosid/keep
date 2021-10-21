import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Note from "./components/Note";
import {useState} from "react";
import {Grid} from "@mui/material";

function App() {
  const [notes, setNotes] = useState([]);
  const addNewNote = newNote => {
    setNotes(prevValue => {
      return [newNote, ...prevValue];
    })
  };
  const noteDeleteHandler = (id) => {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => index !== id)]
    });
  };
  return (
    <div>
      <Header/>
      <AddForm onSubmit={addNewNote}/>
      <div className="main">
        <Grid container spacing={2} columns={7}>
          {notes.map((note, index) => <Note key={index} id={index} title={note.title} text={note.text}
                                            onDelete={noteDeleteHandler}/>)}
        </Grid>
      </div>
    </div>
  );
}

export default App;
