function ContactList() {
  const contacts = [
    { id: 1, website: "GitHub", link: "https://github.com/Nashdelacruz" },
    {
      id: 2,
      website: "X",
      link: "https://x.com/NashDelacruzYT",
    },
    {
      id: 3,
      website: "LinkedIn",
      link: "https://linkedin.com/in/nash-dela-cruz-875618449",
    },
    {
      id: 4,
      website: "Facebook",
      link: "https://www.facebook.com/jane.baccay.169",
    },
    {
      id: 5,
      website: "Email",
      link: "mailto:nashalexanderdelacruz@gmail.com",
    },
  ];

  return (
    <ul>
      {contacts.map((contacts) => (
        <li key={contacts.id}>
          <button
            onClick={() => {
              // Anti-scraping measure: Confirm before opening mailto links
              if (contacts.link.startsWith("mailto:")) {
                let confirmation = confirm("Click OK to send an email.\nThis is a security measure to prevent scraping.");
                if (confirmation) {
                  window.location.href = contacts.link;
                }
              } else {
                window.open(contacts.link, "_blank");
              }
            }}
            className="glassmorphism_button"
          >
            {contacts.website}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Contacts() {
  return (
    <section className="contact normal" id="contact">
      <div className="contact__container">
        <div className="contact__title">
          <h1>Touch with us!</h1>
        </div>
        <div className="contact__content">
          <p>
            Have your questions and want to connect? While I'm not taking on
            clients right now since I'm busy on mastering MERN stack, feel free
            to reach out via my X or Facebook profile!
          </p>
        </div>
        <div className="contact__links">
          <ContactList />
        </div>
        {/* <div className="contact__time">
          <p className="label centered bold">Philippine Standard Time (PHT)</p>
          <p id={clock} className="centered">
            Thursday, January 01, 1970 at 12:00:00 AM
          </p>
        </div> */}
      </div>
    </section>
  );
}
