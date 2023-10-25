import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type AssignmentProps = {
  assignment: { title: string; dueDate: Date | null }; // Define it as an array of strings
  onDelete: () => void; // Add a prop to handle assignment deletion
  onComplete: () => void;
};

export function Assignment({
  assignment,
  onDelete,
  onComplete,
}: AssignmentProps) {
  const [completed, makeCompleted] = useState(false);

  // Assuming `dueDate` is an instance of Date or can be parsed as a Date
  const dueDate: Date = new Date(assignment.dueDate ? assignment.dueDate : ""); // Convert to Date object

  // Get the current date
  const currentDate: Date = new Date();

  let timeDifference: number = 0;

  // Calculate the time difference in milliseconds
  if (dueDate) {
    timeDifference = dueDate.getTime() - currentDate.getTime();
    console.log(timeDifference);
  }

  // Calculate days, hours, minutes, and seconds from milliseconds
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  console.log(`You have ${daysLeft} daysleft.`);

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

      <div className={styles.assignmentNameandDate}>
        <p className={completed ? styles.textCompleted : ""}>
          {assignment.title}
        </p>

        {daysLeft > 0 &&
         <p className={daysLeft > 1 ? styles.dueDate : styles.duedateTomorrow}>
          {daysLeft > 1 ? ` Due: ${daysLeft} days` : "Due: Tomorrow"}

        </p>}
      </div>

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
