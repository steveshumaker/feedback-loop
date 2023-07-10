import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "feeling", headerName: "Feeling", width: 90 },
  {
    field: "understanding",
    headerName: "Understanding",
    width: 90,
  },
  {
    field: "support",
    headerName: "Support",
    width: 90,
  },
  {
    field: "comments",
    headerName: "Comments",
    width: 300,
  },
  {
    field: "flagged",
    headerName: "Flagged",
    width: 90,
  },
  {
    field: "date",
    headerName: "Date",
    width: 180,
  },
];


export function AdminPage() {
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  useEffect(() => {
    getReviews();
  }, []);

  const nextPage = () => {
    // history.push(`/`);
    // dispatch({ type: `RESET` });
    console.log(reviews);
  };

  const getReviews = () => {
    fetch("/review")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews))
      .catch((error) => console.error(error));
  };

  const rows = reviews.map((review) => {
    return review;
  })

  return (
    <Card sx={{ width: "75%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            ADMIN
          </Typography>

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>

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
