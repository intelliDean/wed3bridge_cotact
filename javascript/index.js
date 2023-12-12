const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

let contacts = [];

function addContact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Please fill in all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  const phoneRegex = /^(0)([789][01])\d{8}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid Nigerian phone number");
    return;
  }

  const newContact = { name, email, phone };

  contacts.push(newContact);

  contactForm.reset();

  displayContacts();
}

function displayContacts() {
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");

    contactItem.innerHTML = `
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Phone:</strong> ${contact.phone}</p>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;

    contactList.appendChild(contactItem);
  });
}

function editContact(index) {
  const newName = prompt("Enter new name:", contacts[index].name);
  const newEmail = prompt("Enter new email:", contacts[index].email);
  const newPhone = prompt("Enter new phone number:", contacts[index].phone);

  contacts[index].name = newName;
  contacts[index].email = newEmail;
  contacts[index].phone = newPhone;

  displayContacts();
}

function deleteContact(index) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this contact?"
  );

  if (confirmDelete) {
    contacts.splice(index, 1);
    displayContacts();
  }
}
