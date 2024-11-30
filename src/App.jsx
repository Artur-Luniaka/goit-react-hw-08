import "./App.css";
import "modern-normalize/modern-normalize.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoader } from "./redux/contactsSlice";
import { MagnifyingGlass } from "react-loader-spinner";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && (
        <div className="loader_box">
          <MagnifyingGlass wrapperStyle={{}} />
        </div>
      )}
      {!error && <ContactList />}
    </>
  );
};

export default App;
