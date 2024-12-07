import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectLoader } from "../../redux/common/selectors";
import { Triangle } from "react-loader-spinner";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const loader = useSelector(selectLoader);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loader && (
        <div className={s.loader}>
          <Triangle />
        </div>
      )}
    </>
  );
};

export default ContactsPage;
