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


export function SupportPage() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
    dispatch({ type: `ADD_SUPPORT`, payload: support });
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
            How supported do you feel today?
          </Typography>
          <TextField
            label="Support?"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            type="number"
            placeholder="1-5"
          />
          <CardActions>
            {support > 0 && support < 6 ? (
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
