import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header({ addAssignment }: { addAssignment: (newAssignment: string) => void }) {
  const [inputValue, setInputValue] = useState(""); // State for input value


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateAssignment = () => {
    if (inputValue.trim() !== "") {
      // Call the addAssignment function with the input value
      addAssignment(inputValue);
      // Clear the input field
      setInputValue("");
    }
  };


  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text"
        value={inputValue} // Controlled input value
        onChange={handleInputChange} // Update state on input change
         />
        <button disabled={inputValue.trim() === ""}  onClick={handleCreateAssignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
