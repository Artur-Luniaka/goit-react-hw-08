import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectLoader } from "../../redux/common/selectors";

const ContactsPage = () => {
  const loader = useSelector(selectLoader);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loader && <h2>Loading in progress</h2>}
    </>
  );
};

export default ContactsPage;
