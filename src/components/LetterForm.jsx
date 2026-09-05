import { useState } from "react";

export default function LetterForm({ mailboxes, addLetter }) {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    setFormData({});
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          name="mailboxId"
          id="mailboxId"
          onChange={handleChange}
          value={formData.mailboxId}
        >
          <option value="" defaultValue>
            Select a mailbox
          </option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          required
          placeholder="Recipient name"
          onChange={handleChange}
          value={formData.recipient || ""}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Write your Message"
          onChange={handleChange}
          value={formData.message || ""}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
