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

export function FeelingsPage() {
  const [feeling, setFeeling] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    if (validateInput(feeling)) {
      history.push(`${pageNum + 1}`);
      dispatch({ type: `NEXT_PAGE` });
      dispatch({ type: `ADD_FEELING`, payload: feeling });
    }
    return;
  };

  return (
    <Card sx={{ width: "50%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            How are you feeling today?
          </Typography>
          <TextField
            label="Feeling?"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            type="number"
            placeholder="1-5"
          />
          <CardActions>
            {feeling > 0 && feeling < 6 ? (
              <Button variant="contained" onClick={nextPage}>
                Next
              </Button>
            ) : (
              <Button variant="contained" onClick={nextPage} disabled>
                Next
              </Button>
            )}
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
