import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import selectedContactId from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>{selectedContactId ? <div>Selected Contact</div> : <ContactList />}</>
  );
}

export default App;
