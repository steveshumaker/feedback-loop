import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";


export function UnderstandingPage() {
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
    dispatch({ type: `ADD_UNDERSTANDING`, payload: understanding });
  };

  const previousPage = () => {
    history.push(`/`);
    dispatch({ type: `PREVIOUS_PAGE` });
  };

  return (
    <Card sx={{ width: "50%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            How well did you understand today's material?
          </Typography>

          <TextField
            label="Understanding?"
            value={understanding}
            onChange={(e) => setUnderstanding(e.target.value)}
            type="number"
            placeholder="1-5"
          />
          <CardActions>
            {understanding > 0 && understanding < 6 ? (
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
            <Button variant="contained" onClick={previousPage}>
              Back
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
