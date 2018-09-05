const getFilteredContacts = (contacts, { text }) => {
    return contacts.filter((contact) => {
        let textMatch = contact.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};

export default getFilteredContacts;