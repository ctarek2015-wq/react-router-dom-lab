import { Link } from "react-router";

export default function MailboxList({ mailboxes }) {
  if (mailboxes.length === 0) {
    return (
      <>
        <h1>Mailbox List</h1>
        <p>No mailboxes available.</p>
      </>
    );
  }
  return (
    <>
      <h1>Mailbox List</h1>
      <br />
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link className="mail-box" to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
