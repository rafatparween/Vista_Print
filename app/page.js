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
import Digonode from "./components/Digonode";
import JivoChat from "./Jivochat";



function Home() {
  return (
    <>

      <NavBar />

      <Slider />
      <Header />
      <Content />
      {/* <Technicians/>
      <Assistance/>
      <Digonode/>
      <Avoid/>
      <Helppage/> */}
      <Customer/>
      <Footer />
      <JivoChat/>


    </>

  )
}
export default Home;