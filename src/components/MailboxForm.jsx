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
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Boxholder:
        <input
          type="text"
          placeholder="Boxholder name"
          name="boxOwner"
          required
          value={formData.boxOwner}
          onChange={handleChange}
        />
      </label>

      <label>
        Select a Box Size:
        <select
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
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
