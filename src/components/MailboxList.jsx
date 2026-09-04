import MailboxDetails from "./MailboxDetails";
import { Link } from "react-router";

export default function MailboxList({ mailboxes }) {
  console.log(mailboxes);
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
