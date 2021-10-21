import {useState} from "react";
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton";
import {Box, Container, Grid} from "@mui/material";

const DUMMY_NOTE = {
  title: "",
  text: ""
};

const AddForm = ({onSubmit}) => {
  const [note, setNote] = useState(DUMMY_NOTE);
  const [isOpen, setIsOpen] = useState(false);

  const changeHandler = event => {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]: value};
    });
  };
  const submitHandler = event => {
    event.preventDefault();
    onSubmit(note);
    setNote(DUMMY_NOTE);
  };
  const expandHandler = () => {
    setIsOpen(true);
  };
  return (
    <Container maxWidth="sm" className="adding">
      <Box sx={{ bgcolor: '#fff', width: '600px' }}>
        <form>
          {isOpen && <input type="text" name="title" placeholder="Title..." onChange={changeHandler} value={note.title}/>}
          <p><textarea name="text" placeholder="Your note..." value={note.text} onChange={changeHandler}
                       onClick={expandHandler}/></p>
          <Grid container justifyContent="flex-end">
            <IconButton onClick={submitHandler} aria-label="add">
              <AddIcon/>
            </IconButton>
          </Grid>
        </form>
      </Box>


    </Container>
  );
};

export default AddForm;
