import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Professionals.css";

import React from "react";
import { Link } from "react-router-dom";
import "./Professionals.css";

const Professionals = ({ users, dispatch, favs }) => {
  return (
    <div className="card-container">
      {users.map((user) => {
        return (
          <Card
            style={{ width: 345, backgroundColor: "#bdcdd6" }}
            key={user.id}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {user.name && user.name.charAt(0)}
                </Avatar>
              }
              title={
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
              }
            />

            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
              }
              alt="DentistCard"
            />
            <CardContent>
              <Typography variant="subtitle1">
                Company: {user.company.name}
              </Typography>
              <Typography variant="subtitle1">
                City: {user.address.city}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link
                style={{ textDecoration: "none" }}
                to={`/dentista/${user.id}`}
              >
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Professionals;
