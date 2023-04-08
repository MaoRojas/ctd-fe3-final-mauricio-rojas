import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext/DataContext";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import "./favorites.css";

const FavoritesContainer = () => {
  const { state } = useContext(DataContext);

  return (
    <div className="favorite-card">
      <h1>Your list of Favorites</h1>
      {state.favs.map((e) => (
        <Card style={{ width: 345, backgroundColor: "#bdcdd6" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                Pr
              </Avatar>
            }
            title={
              <Typography variant="h5" sx={{ fontSize: "24px" }}>
                {e.name}
              </Typography>
            }
          />

          <CardMedia
            component="img"
            height="194"
            image={
              "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
            }
            alt="Paella dish"
          />
          <CardContent>
            <Typography sx={{ fontSize: "medium" }} variant="subtitle1">
              Phone: {e.phone}
            </Typography>
            <Typography sx={{ fontSize: "medium" }} variant="subtitle1">
              Website: <a href={e.website}>{e.website}</a>
            </Typography>
            <Typography sx={{ fontSize: "medium" }} variant="subtitle1">
              Street: {e.address.street}
            </Typography>
            <Typography sx={{ fontSize: "medium" }} variant="subtitle1">
              Suite: {e.address.suite}
            </Typography>
            <Typography variant="subtitle1">City: {e.address.city}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FavoritesContainer;
