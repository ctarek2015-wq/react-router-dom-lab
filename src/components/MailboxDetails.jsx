import { useParams } from "react-router";

export default function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const mailbox = mailboxes[mailboxId - 1];
  console.log(mailbox);
  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <h2>Details</h2>

      <p>Boxholder: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </>
  );
}
