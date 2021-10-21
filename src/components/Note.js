import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete"
import {Grid, Paper, styled} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Note = ({title, text, id, onDelete}) => {

  const deleteHandler = event => {
    onDelete(id);
  };

  return (
    <Grid item key={id} xs={1} justifyContent="space-around">
      <Item>
        <h4>{title}</h4>
        <p>{text}</p>
        <Grid item justify="flex-end">
          <IconButton onClick={deleteHandler} size="small" aria-label="delete">
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </Grid>
      </Item>
    </Grid>
  );
};

export default Note;
