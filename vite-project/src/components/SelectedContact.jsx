import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  const goBackToList = () => {
    setSelectedContactId(null); // Deselect the contact
  };

  return (
    <div>
      {selectedContactId && contact ? (
        <div>
          <button onClick={goBackToList}>Go back to list</button>
          <table>
            <thead>
              <tr>
                <th colSpan="3">{contact.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address</td>
                <td>Company</td>
                <td>Website</td>
              </tr>
              <tr>
                <td>
                  {contact.address.street}, {contact.address.suite},{" "}
                  {contact.address.city}, {contact.address.zipcode}
                </td>
                <td>{contact.company.name}</td>
                <td>{contact.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No contact selected</p>
      )}
    </div>
  );
};
export default SelectedContact;
