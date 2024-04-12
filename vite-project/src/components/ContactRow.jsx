export default function ContactRow({ setSelectedContactId, contact }) {
  const showDetails = () => {
    setSelectedContactId(contact.id); // Set the selected contact ID
  };

  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={showDetails}>Show Details</button>
      </td>
    </tr>
  );
}
