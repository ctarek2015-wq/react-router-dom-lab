import { useState } from "react";

export default function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({ boxSize: "", boxOwner: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({ boxSize: "", boxOwner: "" });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          id="boxOwner"
          type="text"
          placeholder="Boxholder name"
          name="boxOwner"
          required
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          required
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="" defaultValue>
            Select a size
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
