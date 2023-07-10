import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Init columns for datagrid
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
  const [selection, setSelection] = useState([]);
  const [open, setOpen] = useState(false);

  // init rows of the data grid
  const rows = reviews.map((review) => {
    return review;
  });

  // GET request to populate the reviews
  const getReviews = () => {
    fetch("/review")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews))
      .catch((error) => console.error(error));
  };

  const flagReview = () => {
    if (selection.length > 1) {
      selection.map((id) => {
        const reviewToUpdate = reviews.find((review) => review.id === id);
        fetch(`/review/${id}`, {
          method: "PUT",
          body: JSON.stringify({ flagged: !reviewToUpdate.flagged }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => getReviews())
          .catch((error) => {
            console.error(error);
          });
      });
    } else {
      const reviewToUpdate = reviews.find(
        (review) => review.id === selection[0]
      );
      fetch(`/review/${selection[0]}`, {
        method: "PUT",
        body: JSON.stringify({ flagged: !reviewToUpdate.flagged }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => getReviews())
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Function to open the delete alert
  const deleteReviews = () => {
    setOpen(true);
  };

  // Function for closing the delete alert, when 'yes' selected
  const handleClose = () => {
    if (selection.length > 1) {
      selection.map((id) => {
        fetch(`/review/${id}`, {
          method: "DELETE",
        }).then(getReviews());
      });
    } else {
      fetch(`/review/${selection[0]}`, {
        method: "DELETE",
      }).then(getReviews());
    }
    setOpen(false);
  };

  // Function for closing the delete alert when the user decides not to delete IDs
  const handleReturn = () => {
    setOpen(false);
  };

  // useEffect to render the datagrid on page load
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Card sx={{ width: "75%", margin: "auto" }}>
      <CardContent>
        <div>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            ADMIN
          </Typography>

          {/* Datagrid */}
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
              onRowSelectionModelChange={(newSelectionModel) => {
                setSelection(newSelectionModel);
              }}
            />
          </div>

          {/* Delete Reviews Section */}
          <CardActions>
            <Button variant="contained" color="success" onClick={flagReview}>
              FLAG
            </Button>
            {selection.length > 0 ? (
              <Button variant="contained" color="error" onClick={deleteReviews}>
                Delete
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={deleteReviews}
                disabled
              >
                Delete
              </Button>
            )}
          </CardActions>

          {/* Dialog section for alert */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                component={"span"}
                id="alert-dialog-description"
              >
                Are you sure you want to permanently delete reviews for the
                following ID(s):{" "}
                <ul>
                  {selection.map((id) => {
                    return <li key={id}>{id}</li>;
                  })}
                </ul>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleReturn}>No!</Button>
              <Button onClick={handleClose} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
