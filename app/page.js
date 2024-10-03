"use client"
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";

function Home() {
  return (
    <>

      <NavBar />

      <Slider />
      <Header />
      <Content />
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      <Customer/>
      <Footer />


    </>

  )
}
export default Home;