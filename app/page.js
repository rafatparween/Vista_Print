"use client"
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
function Home() {
  return (
    <>

      <NavBar />

      <Slider />
      <Header />
      <Content />
      <Footer />


    </>

  )
}
export default Home;