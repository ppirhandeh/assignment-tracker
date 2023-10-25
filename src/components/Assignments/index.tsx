import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState, useEffect  } from "react";

type AssignmentsProps = {
  assignments: string[]; // Define it as an array of strings
  onRemoveAssignment: (index: number) => void;
};



export function Assignments({ assignments, onRemoveAssignment }: AssignmentsProps) {
  const [completedAssignments, setCompAssignments] = useState<string[]>([]);



  useEffect(() => {
    console.log(completedAssignments);
  }, [completedAssignments]);

  const handleDeleteAssignment = (index: number) => {
    onRemoveAssignment(index);
    if(completedAssignments.includes(completedAssignments[index])){
      const updatedCompletedAssignments = completedAssignments.filter(
        (compAssignment) => compAssignment !== completedAssignments[index]
      );
      setCompAssignments(updatedCompletedAssignments);
    }
    
  };

  const handleCompletedAssignment = (assignment : string) =>{
    if(completedAssignments.includes(assignment)){
      const updatedCompletedAssignments = completedAssignments.filter(
        (compAssignment) => compAssignment !== assignment
      );
      setCompAssignments(updatedCompletedAssignments);
    }
    else{
      setCompAssignments([...completedAssignments, assignment]);
    }

  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments.length}</span>
        </div>
      </header>

      {assignments.map((assignment, index) => (
        <div className={styles.list} key={index}>
          <Assignment
            assignment={assignment}
            onDelete={() => handleDeleteAssignment(index)}
            onComplete={() => handleCompletedAssignment(assignment)}
          />
        </div>
      ))}
    </section>
  );
}
