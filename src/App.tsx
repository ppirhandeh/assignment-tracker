import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';




function App() {
  const [assignments, setAssignments] = useState<{ title: string; dueDate: Date | null }[]>([]);


  const handleRemoveAssignment = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

 // Define a function to add a new assignment
const addAssignment = (newAssignment: { title: string; dueDate: Date | null}) => {
  setAssignments([...assignments, newAssignment]);
  console.log(newAssignment);
};

  // console.log(assignments);
  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments assignments={assignments}
      onRemoveAssignment={handleRemoveAssignment}
       />
    </>
  );
}

export default App;
