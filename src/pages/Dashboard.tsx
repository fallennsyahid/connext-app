import ContactListCard from "../components/ContactListCard";
import CreateContactCard from "../components/CreateContactCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fas fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>

        <SearchForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <CreateContactCard />
          <ContactListCard />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
