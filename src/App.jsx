import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MailboxList from "./components/MailboxList.jsx";
import NewMailbox from "./components/NewMailbox.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
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
        <Route path="/new-mailbox" element={<NewMailbox />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
        <Route
          path="*"
          element={
            <main>
              <h1>404 Not Found</h1>
            </main>
          }
        />
      </Routes>
      <h1>heeeeeeeey</h1>
    </>
  );
}

export default App;
