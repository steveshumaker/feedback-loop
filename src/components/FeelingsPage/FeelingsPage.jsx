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
import Tooltip from "@mui/material/Tooltip";
import CustomizedSnackbars from "../SnackbarTest/SnackbarTest";

export function FeelingsPage() {
  const [feeling, setFeeling] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
    dispatch({ type: `ADD_FEELING`, payload: feeling });
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
              <Button variant="contained" color="success" onClick={nextPage}>
                Next
              </Button>
            ) : (
              <Tooltip title="Please enter a value between 1 and 5 before proceeding.">
                <span>
                  <Button variant="contained" onClick={nextPage} disabled>
                    Next
                  </Button>
                </span>
              </Tooltip>
            )}
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
