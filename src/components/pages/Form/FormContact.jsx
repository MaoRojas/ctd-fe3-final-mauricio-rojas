import { Box, Button, TextField } from "@mui/material";
import "./FormContact.css";

export const FormContact = ({
  handleSubmit,
  handleEmailChange,
  handleNameChange,
}) => {
  return (
    <Box className="form-container" sx={{ width: { sm: "100%", lg: "100%" } }}>
      <h2>Want to Know more ?</h2>
      <TextField
        label="Name"
        variant="outlined"
        className="form-field"
        sx={{ width: { sm: "100%", lg: "50%" }, backgroundColor: "whitesmoke" }}
        onChange={handleNameChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        className="form-field"
        sx={{ width: { sm: "100%", lg: "50%" }, backgroundColor: "whitesmoke" }}
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="form-button"
        sx={{ width: { sm: "100%", lg: "auto" }, mt: { sm: "20px" } }}
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </Box>
  );
};
