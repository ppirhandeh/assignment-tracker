import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type AssignmentProps = {
  assignment: string; // Define it as an array of strings
  onDelete: () => void; // Add a prop to handle assignment deletion
  onComplete: () => void;
};

export function Assignment({ assignment, onDelete, onComplete}: AssignmentProps) {
  const [completed, makeCompleted] = useState(false);

  const handleDeleteClick = () => {
    onDelete(); // Call the delete function when the trash button is clicked
  };

  const handleComplete = () => {
    makeCompleted(true);
    onComplete();
  };

  const handleInComplete = () => {
    makeCompleted(false);
    onComplete();
  };

  return (
    <div className={styles.assignment}>
      {!completed && (
        <button className={styles.checkContainer} onClick={handleComplete}>
          <div />
        </button>
      )}

      {completed && (
        <div className={styles.checkContainer}>
          <BsFillCheckCircleFill onClick={handleInComplete} />
        </div>
      )}

      <p className={completed ? styles.textCompleted : ""}>{assignment}</p>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20}/>
      </button>
    </div>
  );
}
