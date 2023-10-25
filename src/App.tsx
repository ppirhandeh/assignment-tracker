import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';




function App() {
  const [assignments, setAssignments] = useState<string[]>([]); // Store assignments here

  const handleRemoveAssignment = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  // Define a function to add assignments
  const addAssignment = (newAssignment: string) => {
    setAssignments([...assignments, newAssignment]);
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
