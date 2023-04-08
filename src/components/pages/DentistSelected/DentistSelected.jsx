import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
} from "@mui/material";
import { DataContext } from "../../../context/DataContext/DataContext";

const DentistSelected = () => {
  const { state } = useContext(DataContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
        padding: "25px",
      }}
    >
      <Card sx={{ maxWidth: 500, backgroundColor: "#bdcdd6" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="dentist">
              {state.user.name && state.user.name.charAt(0)}
            </Avatar>
          }
          title={
            <Typography variant="h5" component="div">
              {state.user.name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="text.secondary">
              {state.user.email}
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
          <Typography variant="body2" color="text.secondary">
            Phone: {state.user.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website: {state.user.website}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {state.user.address && state.user.address.street},
            {state.user.address && state.user.address.suite},
            {state.user.address && state.user.address.city}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DentistSelected;
