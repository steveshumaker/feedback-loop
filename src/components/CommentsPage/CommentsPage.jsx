import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export function CommentsPage() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
    dispatch({ type: `ADD_COMMENTS`, payload: comments });
  };

  const previousPage = () => {
    history.push(`${pageNum - 1}`);
    dispatch({ type: `PREVIOUS_PAGE` });
  };

  return (
    <Card sx={{ width: "50%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Please enter your comments below:
          </Typography>
          <TextField
            label="Comments?"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            type="text"
          />
          <CardActions>
            <Button variant="contained" onClick={nextPage}>
              Next
            </Button>
            <Button variant="contained" onClick={previousPage}>
              Back
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
