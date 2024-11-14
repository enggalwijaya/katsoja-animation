import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import  Modal from "./components/Modal"
import Trending from "./components/Trending"
import Big3 from "./components/Big3"
import Footer from "./components/Footer"




import "./style/landingpage.css"

function App () {
  return (
  <div>
 
    <div className="myBG">
    <NavigationBar />
    <Intro />
    <Modal />
    </div>
   
    <div className="trending">
      <Trending />
    </div>

    <div className="Big3">
      <Big3 />
    </div>

    <div className="footer">
      <Footer />
    </div>
    
   
  </div>
   
  )
}

export default App