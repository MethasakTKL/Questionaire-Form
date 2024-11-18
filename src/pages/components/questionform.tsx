import * as React from "react";
import styled from "@emotion/styled";
import {
  Add,
  CheckCircle,
  CodeOutlined,
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
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Choice {
  id: number;
  description: string;
  correct: boolean;
  helperText?: string;
}

interface Question {
  id: number;
  questionText: string;
  choices: Choice[];
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#626569",
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
  const [currentQuestionId, setCurrentQuestionId] = React.useState(1);
  let [currentChoiceId, setCurrentChoiceId] = React.useState(1);
  const [questionnaireDetail, setQuestionnaireDetail] = React.useState("");

  //Error
  const [nameError, setNameError] = React.useState(false);

  const [questions, setQuestions] = React.useState<Question[]>([
    {
      id: 0,
      questionText: "",
      choices: [{ id: 0, description: "", correct: false }],
    },
  ]);
  {
    /* ----------------------------------------------------------------------------------------------- */
  }
  const createQuestionId = () => {
    const newId = currentQuestionId;
    setCurrentQuestionId(currentQuestionId + 1);
    return newId;
  };

  const createChoiceId = () => {
    const newId = currentChoiceId;
    currentChoiceId++;
    setCurrentChoiceId(currentChoiceId);
    return newId;
  };
  {
    /* ----------------------------------------------------------------------------------------------- */
  }



  const handleQuestionnaireDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestionnaireDetail(event.target.value);
    if (event.target.value.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };


  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: createQuestionId(),
        questionText: "",
        choices: [{ id: createChoiceId(), description: "", correct: false }],
      },
    ]);
  };

  const handleDeleteQuestion = (questionId: number) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const handleQuestionInputChange = (id: number, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, questionText: text } : q))
    );
  };

  const handleDuplicateQuestion = (questionId: number) => {
    const QustionDuplicate = questions.find((q) => q.id === questionId);
    if (QustionDuplicate) {
      setQuestions([
        ...questions,
        {
          ...QustionDuplicate,
          id: createQuestionId(),
          choices: QustionDuplicate.choices.map((c) => ({
            ...c,

            id: createChoiceId(),
          })),
        },
      ]);
    }
  };

  {
    /* ----------------------------------------------------------------------------------------------- */
  }
  const handleAddChoice = (questionId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              choices: [
                ...q.choices,
                { id: createChoiceId(), description: "", correct: false },
              ],
            }
          : q
      )
    );
  };

  const handleDeleteChoice = (questionId: number, choiceId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              choices: q.choices.filter((c) => c.id !== choiceId),
            }
          : q
      )
    );
  };

  const handleChoiceInputChange = (
    questionId: number,
    choiceId: number,
    text: string
  ) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              choices: q.choices.map((c) =>
                c.id === choiceId ? { ...c, description: text } : c
              ),
            }
          : q
      )
    );
  };

  const handleSetCorrectChoice = (questionId: number, choiceId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              choices: q.choices.map((c) => ({
                ...c,
                correct: c.id === choiceId,
                helperText: c.id === choiceId ? "This answer is correct" : "",
              })),
            }
          : q
      )
    );
  };
  {
    /* ----------------------------------------------------------------------------------------------- */
  }
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
                fullWidth
                required
                label="Name"
                id="name"
                value={questionnaireDetail}
                onChange={handleQuestionnaireDetailChange}
                error={nameError}
                helperText={
                  nameError ? "Please fill in questionnaire detail" : ""
                }
              />
            </Box>
            <Divider />
            {/* -----------------------------------Question-------------------------------------------- */}
            {questions.map((question, qIndex) => (
              <Box id="question-section" key={`question-${question.id}`}>
                <Box
                  sx={{
                    display: "flex",
                    // background: "green",
                    justifyContent: "flex-start",
                    margin: "1rem",
                  }}
                >
                  <Typography>Question {qIndex + 1}</Typography>
                </Box>
                <Box
                  sx={{
                    margin: "1rem",
                  }}
                >
                  <CssTextField
                    // helperText="Please fill in the question"
                    fullWidth
                    required
                    label={`Question ${question.id}`}
                    id="question"
                    value={question.questionText}
                    onChange={(e) =>
                      handleQuestionInputChange(question.id, e.target.value)
                    }
                  />
                </Box>
                {/* -----------------------------------Choice-------------------------------------------- */}
                {question.choices.map((choice, cIndex) => (
                  <Box id="choice-section" key={`choice-${choice.id}`}>
                    <Box
                      key={choice.id}
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
                            checkedIcon={
                              <CheckCircle sx={{ color: "#00c62b" }} />
                            }
                            checked={choice.correct}
                            onChange={() =>
                              handleSetCorrectChoice(question.id, choice.id)
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid size={10}>
                        <CssTextField
                          fullWidth
                          required
                          label={`Description ${choice.id}`}
                          value={choice.description}
                          helperText={choice.helperText}
                          onChange={(e) =>
                            handleChoiceInputChange(
                              question.id,
                              choice.id,
                              e.target.value
                            )
                          }
                        />
                      </Grid>
                      <Grid
                        size={1}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleDeleteChoice(question.id, choice.id);
                          }}
                        >
                          <DeleteOutline sx={{ color: "black" }} />
                        </IconButton>
                      </Grid>
                    </Box>
                  </Box>
                ))}

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
                  <Button
                    onClick={() => handleAddChoice(question.id)}
                    startIcon={<Add />}
                    sx={{ color: "#ff5c00" }}
                  >
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
                      <Button
                        onClick={() => handleDuplicateQuestion(question.id)}
                        startIcon={<ContentCopy />}
                        sx={{ color: "black" }}
                      >
                        Duplicate
                      </Button>
                      <Button
                        onClick={() => {
                          handleDeleteQuestion(question.id);
                        }}
                        startIcon={<DeleteOutlineIcon />}
                        sx={{ color: "black" }}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </Box>
            ))}

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
                onClick={handleAddQuestion}
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
                startIcon={<CodeOutlined />}
                sx={{
                  width: "100%",
                  color: "#ff5c00",
                  borderColor: "#ff5c00",
                }}
              >
                Test Validate
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
