import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function AdminPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`/`);
    dispatch({ type: `RESET` });
  };

  return (
    <Card sx={{ width: "50%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            ADMIN
          </Typography>
          <CardActions>
            <Button variant="contained" color="success" onClick={nextPage}>
              Placeholder
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
