import React from "react";
import { Button, MenuItem, Select, InputLabel, TextField } from "@mui/material";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestions } from "../redux/actions/interviewActions";

const Admin = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState("{}");
  const questions = useSelector((state) => state.question.question);
  // question's state
  const [questionState, setQuestionState] = useState(questions); //=> ["value1","value2","newValue"]
  // console.log(questionState);

  const handleChangeQuestion = (value, key) => {
    questionState[key] = value;
    setQuestionState([...questionState]);
  };

  const Delete = (key) => {
    console.log(key);
    const newArr = questionState.filter((value, index) => index !== key);
    setQuestionState(newArr);
  };

  const Edit = () => {
    setDisabled("");
  };
  const AddNewQuestion = () => {
    setQuestionState([...questionState, ""]);
  };

  const SaveNewQuestion = () => {
    dispatch(saveQuestions(questionState));
    setDisabled("disabled");
  };

  return (
    <div
      style={{
        display: "flex",
        border: "2px solid black",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <div className="Admin">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button variant="contained" color="error" onClick={AddNewQuestion}>
            Add New Question
          </Button>
        </div>
        <div
          style={{
            height: "70vh",
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {questionState.map((item, key) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p>Q{key + 1}</p>
                  <TextField
                    style={{ width: "400px" }}
                    id="outlined-textarea"
                    //   label="Multiline Placeholder"
                    onChange={(e) => handleChangeQuestion(e.target.value, key)}
                    placeholder="Enter a New Question"
                    multiline
                    variant="outlined"
                    // defaultValue={item}
                    disabled={disabled}
                    // key={item[key]}
                    value={item}
                  />
                </div>
                <EditNoteRoundedIcon
                  style={{ fontSize: "30px" }}
                  color="error"
                  onClick={Edit}
                />
                <DeleteRoundedIcon
                  style={{ fontSize: "30px" }}
                  color="error"
                  onClick={() => Delete(key)}
                />
                <InputLabel id="demo-simple-select-helper-label">
                  Category {key + 1}
                </InputLabel>
                <Select
                  //labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                  style={{ width: "250px", height: "40px" }}
                  placeholder="hah"
                >
                  <MenuItem value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button variant="contained" color="error" onClick={SaveNewQuestion}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
