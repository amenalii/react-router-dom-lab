import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData({ boxOwner: "", boxSize: "" });
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Create a MailBox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter BoxOwner Name:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          required
          onChange={handleChange}
        >
          <option value="">----Select a size----</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Create Mailbox</button>
      </form>
    </>
  );
};

export default MailboxForm;