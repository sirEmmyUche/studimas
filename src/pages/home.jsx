import Headers from "../pages/headers";
import WhatWeDo from "../pages/whatwedo";
import WhyChooseUs from "../pages/whychooseus";
import Testimonial from "../pages/testimony";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import "../styles/mainstyle.css";


function Home() {
    return (
      <div>
        <Headers/>
        <WhatWeDo/>
        <WhyChooseUs/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
  
  export default Home
  