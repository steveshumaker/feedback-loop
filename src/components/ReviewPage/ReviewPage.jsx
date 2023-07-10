import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ReviewPage() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const review = useSelector((store) => store.submission);
  const history = useHistory();

  const nextPage = () => {
    setOpen(true);
    fetch("/review", {
      method: "POST",
      body: JSON.stringify(review),
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.error(error);
    });
    dispatch({ type: `NEXT_PAGE` });
  };

  const previousPage = () => {
    history.push(`${pageNum - 1}`);
    dispatch({ type: `PREVIOUS_PAGE` });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    history.push(`/5`);
    setOpen(false);
  };

  return (
    <Card sx={{ width: "50%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Please review your submission:
          </Typography>
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmojiEmotionsRoundedIcon></EmojiEmotionsRoundedIcon>
                </ListItemIcon>
                <ListItemText primary={`Feeling: ${review.feeling}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PsychologyAltRoundedIcon></PsychologyAltRoundedIcon>
                </ListItemIcon>
                <ListItemText
                  primary={`Understanding: ${review.understanding}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RecommendRoundedIcon></RecommendRoundedIcon>
                </ListItemIcon>
                <ListItemText primary={`Support: ${review.support}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AddCommentRoundedIcon></AddCommentRoundedIcon>
                </ListItemIcon>
                <ListItemText primary={`Comments: ${review.comments}`} />
              </ListItem>
            </List>
          </div>
          <CardActions>
            <Button variant="contained" color="success" onClick={nextPage}>
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Succesfully submitted! Close to continue.
              </Alert>
            </Snackbar>
            <Button variant="contained" onClick={previousPage}>
              Back
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
