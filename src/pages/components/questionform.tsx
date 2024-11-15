import * as React from "react";
import styled from "@emotion/styled";
import {
  Add,
  CheckCircle,
  ContentCopy,
  DeleteOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default function QuestionForm() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: "100%", height: "100%", margin: "2rem" }}>
        <Grid container>
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                // background: "yellow",
                justifyContent: "flex-start",
                margin: "1rem",
              }}
            >
              <Typography>Questionnaire Detail</Typography>
            </Box>
            <Box
              sx={{
                margin: "1rem",
              }}
            >
              <CssTextField
                helperText="Please fill in questionnaire detail"
                fullWidth
                required
                label="Name"
                id="name"
              />
            </Box>
            <Divider />
            {/* -----------------------------------Question-------------------------------------------- */}
            <Box id="question-section">
              <Box
                sx={{
                  display: "flex",
                  // background: "green",
                  justifyContent: "flex-start",
                  margin: "1rem",
                }}
              >
                <Typography>Question 1</Typography>
              </Box>
              <Box
                sx={{
                  margin: "1rem",
                }}
              >
                <CssTextField
                  helperText="Please fill in the question"
                  fullWidth
                  required
                  label="Question"
                  id="question"
                />
              </Box>
              {/* -----------------------------------Choice-------------------------------------------- */}
              <Box id="choice-section">
                <Box
                  sx={{
                    display: "flex",
                    // background: "yellow",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  <Grid container spacing={1}></Grid>
                  <Grid
                    size={1}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FormControl>
                      <Radio
                        checkedIcon={<CheckCircle sx={{ color: "#00c62b" }} />}
                        value="choice1"
                        name="radio-buttons"
                      />
                    </FormControl>
                  </Grid>
                  <Grid size={10}>
                    <CssTextField
                      // helperText="This answer is correct"
                      fullWidth
                      required
                      label="Description"
                      id="description"
                    />
                  </Grid>
                  <Grid
                    size={1}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <IconButton>
                      <DeleteOutline />
                    </IconButton>
                  </Grid>
                </Box>
              </Box>
              {/* -----------------------------------Add Choice-------------------------------------------- */}
              <Box
                sx={{
                  display: "flex",
                  // background: "green",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "1rem",
                  ml: "2rem",
                }}
              >
                <Button startIcon={<Add />} sx={{ color: "#ff5c00" }}>
                  Add choice
                </Button>
              </Box>
              <Divider sx={{ ml: "0.5rem", mr: "0.5rem" }} />
              {/* -----------------------------------Duplicate & Delete Question-------------------------------------------- */}
              <Box sx={{ padding: "1rem" }}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pl: "1rem",
                  }}
                >
                  <Grid container spacing={1}>
                    <Button startIcon={<ContentCopy />} sx={{ color: "black" }}>
                      Duplicate
                    </Button>
                    <Button
                      startIcon={<DeleteOutlineIcon />}
                      sx={{ color: "black" }}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Divider />
            {/* -----------------------------------Add Question-------------------------------------------- */}

            <Box
              sx={{
                display: "flex",
                // background: "green",
                justifyContent: "center",
                margin: "1rem",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<Add />}
                sx={{
                  width: "100%",
                  color: "#ff5c00",
                  borderColor: "#ff5c00",
                }}
              >
                Add question
              </Button>
            </Box>
            {/* ----------------------------------------------------------------------------------------------- */}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
