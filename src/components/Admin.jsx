import React from "react";
import { Button, MenuItem, Select, InputLabel, TextField } from "@mui/material";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import q from "../question.json";
import { useState } from "react";

console.log(q.General);

const Admin = () => {
  const [disabled, setDisabled] = useState("{}");

  const Delete = (key) => {
    console.log(key);
  };

  const Edit = () => {
    console.log("Edit");
    setDisabled("");
  };
  const AddNewQuestion = () => {};

  const SaveNewQuestion = () => {
    setDisabled("disabled");
  };

  return (
    <div style={{
      display: "flex",
      border: "2px solid black",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "aliceblue",
    }}>
    <div
      className="Admin" >
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop:'10px'}}>
          <Button variant="contained" color="error">
            Add New Question
          </Button>
        </div>
      <div
        style={{
          height: "70vh",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {[1, 2, 3].map((item, key) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <p>Q{key + 1}</p>
                <TextField
                  style={{ width: "400px" }}
                  id="outlined-textarea"
                  //   label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  variant="outlined"
                  defaultValue={q.General[key + 1]}
                  disabled={disabled}
                />
              </div>
              <EditNoteRoundedIcon style={{ fontSize: "30px" }}  color="error" onClick={Edit}/>
              <DeleteRoundedIcon style={{ fontSize: "30px" }} color="error" onClick={Delete}/>
              <InputLabel id="demo-simple-select-helper-label">Category {key+1}</InputLabel>
            <Select
          
          //labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        style={{width:'250px', height:'40px'}}
        placeholder='hah'
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
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom:'20px'}}>
          <Button variant="contained" color="error" onClick={SaveNewQuestion}>
            Save Changes
          </Button>
        </div>
    </div>
    </div>
  );
};

export default Admin;







        