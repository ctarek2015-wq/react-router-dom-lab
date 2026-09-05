import { useParams } from "react-router";

export default function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const mailbox = mailboxes[mailboxId - 1];
  console.log(mailbox);
  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <br />

      <h2>Details</h2>

      <p>Boxholder: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
      <br />

      <h2>Letters</h2>
      <ul>
        {letters.map(
          (letter, index) =>
            mailbox._id.toString() === letter.mailboxId && (
              <div key={index} className="mail-box">
                <li>Dear {letter.recipient},</li>
                <br />
                <li>{letter.message}</li>
              </div>
            ),
        )}
      </ul>
    </>
  );
}
