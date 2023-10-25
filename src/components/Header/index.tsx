import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from 'react';

export interface AssignmentType {
  title: string;
  dueDate: Date | null;
}


export function Header({ addAssignment }: { addAssignment: (newAssignment : AssignmentType) => void;}) {

  const [inputValue, setInputValue] = useState(""); // State for input value
  const [date, setDate] = React.useState<Date | null>(null);
  




  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };



  const handleCreateAssignment = () => {
    if (inputValue.trim() !== "") {
      const newAssignment = {
        title: inputValue,
        dueDate: date,
      };
      addAssignment(newAssignment);
      // Clear the input field
      setInputValue("");
    }
  };


  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue} // Controlled input value
          onChange={handleInputChange} // Update state on input change
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
          className={styles.datePicker} 
          value={date} 
          onChange={(newDate) => setDate(newDate)}
          disablePast/>
        </LocalizationProvider>

        <button
          disabled={inputValue.trim() === ""}
          onClick={handleCreateAssignment}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
