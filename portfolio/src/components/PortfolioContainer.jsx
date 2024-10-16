import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/AboutMe';
import Project from '../pages/Project';
import Contact from '../pages/ContactMe';
import Resume from "../pages/Resume"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // useEffect(()=>{
  //  console.log(currentPage)
  // },[currentPage])
  
  // const handlePageChange = (page) => {
  //   console.log("Page",currentPage,page,"page value")
  //   setCurrentPage(page)
  //   // setCurrentPage(prevState => ({
  //   //   ...prevState, newValue:page
  //   // }));
  //   console.log(currentPage)
  // };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">
        {renderPage()}
        </main>
      <Footer></Footer>
    </div>
  );
}
