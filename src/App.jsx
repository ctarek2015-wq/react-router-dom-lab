import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MailboxList from "./components/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";
import LetterForm from "./components/LetterForm.jsx";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();

  const addBox = (data) => {
    const id = mailboxes.length + 1;
    setMailboxes([...mailboxes, { ...data, _id: id }]);
    navigate("/mailboxes");
  };

  const addLetter = (data) => {
    setLetters([...letters, { ...data, mailboxId: data.mailboxId }]);
    navigate(`/mailboxes/${data.mailboxId}`);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
        <Route
          path="*"
          element={
            <main>
              <h1>404 Not Found</h1>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
