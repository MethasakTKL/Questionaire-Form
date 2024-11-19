import * as React from "react";
import styled from "@emotion/styled";
import {
  Add,
  CheckCircle,
  ContentCopy,
  DeleteOutline,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Paper,
  Radio,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

interface Choice {
  id: number;
  description: string;
  correct: boolean;
  helperText?: string;
  error?: boolean;
}

interface Question {
  id: number;
  questionText: string;
  choices: Choice[];
  error?: boolean;
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
  const [questionnaireDetail, setQuestionnaireDetail] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [currentQuestionId, setCurrentQuestionId] = React.useState(1);
  let [currentChoiceId, setCurrentChoiceId] = React.useState(1);


  const [questions, setQuestions] = React.useState<Question[]>([
    {
      id: 0,
      questionText: "",
      choices: [{ id: 0, description: "", correct: false }],
    },
  ]);

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

  const handleQuestionnaireDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setQuestionnaireDetail(value);

    if (value.trim() !== "") {
      setNameError(false);
    }
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: createQuestionId(),
        questionText: "",
        choices: [{ id: createChoiceId(), description: "", correct: false }],
        error: false,
      },
    ]);
  };

  const handleDeleteQuestion = (questionId: number) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const handleQuestionInputChange = (id: number, text: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? { ...q, questionText: text, error: text.trim() === "" }
          : q
      )
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
                c.id === choiceId
                  ? { ...c, description: text, error: text.trim() === "" }
                  : c
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
  const handleReset = () => {
    setQuestionnaireDetail("");
    setNameError(false);
    setQuestions([
      {
        id: 0,
        questionText: "",
        choices: [{ id: 0, description: "", correct: false }],
      },
    ]);
    setCurrentQuestionId(1);
    setCurrentChoiceId(1);
  };

  const handleValidate = () => {
    let hasError = false;

    if (questionnaireDetail.trim() === "") {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    const checkQuestions = questions.map((question) => {
      const isQuestionEmpty = question.questionText.trim() === "";
      if (isQuestionEmpty) {
        hasError = true;
      }
      const checkChoices = question.choices.map((choice) => {
        const isChoiceEmpty = choice.description.trim() === "";
        if (isChoiceEmpty) {
          hasError = true;
        }
        return {
          ...choice,
          error: isChoiceEmpty,
        };
      });

      return {
        ...question,
        error: isQuestionEmpty,
        choices: checkChoices,
      };
    });

    setQuestions(checkQuestions);
    return !hasError;
  };

  const handleSubmit = () => {
    if (handleValidate() == true) {
      const questionnaireData = {
        //------------------------
        questionnaireDetail,
        //------------------------
        questions: questions.map((question) => ({
          id: question.id,
          questionText: question.questionText,
          //------------------------
          choices: question.choices.map((choice) => ({
            id: choice.id,
            description: choice.description,
            correct: choice.correct,
          })),
        })),
      };
      console.log(questionnaireData);
    } else {
      console.log("Please complete the form.");
    }
  };

  //----------------------------------------------------------------------------------------------------------------------
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ background: "white" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid container spacing={1}>
              <Grid>
                <Button
                  onClick={handleReset}
                  variant="outlined"
                  sx={{
                    color: "#ff5c00",
                    borderColor: "#ff5c00",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    background: "#ff5c00",
                    width: 150,
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper sx={{ width: "100%", height: "100%", margin: "2rem" }}>
          <Grid container>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
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
                      fullWidth
                      required
                      label={`Question`} //${question.id} // todebug
                      id="question"
                      value={question.questionText}
                      error={question.error}
                      helperText={
                        question.error ? "Please fill in this question" : ""
                      }
                      onChange={(e) =>
                        handleQuestionInputChange(question.id, e.target.value)
                      }
                    />
                  </Box>
                  {/* -----------------------------------Choice-------------------------------------------- */}
                  {question.choices.map((choice) => (
                    <Box id="choice-section" key={`choice-${choice.id}`}>
                      <Box
                        key={choice.id}
                        sx={{
                          display: "flex",
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
                            label={`Description`} // ${choice.id} //to debug
                            value={choice.description}
                            helperText={
                              choice.error
                                ? "Please fill in this option"
                                : choice.helperText
                            }
                            error={choice.error}
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
                          startIcon={<DeleteOutline/>}
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
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
