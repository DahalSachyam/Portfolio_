
import { About_me } from "./components/About_me";
import MainBody from "./components/mainbody";
import { Navigation } from "./components/navigation";
import Academics from "./components/Academics";
import { Foot } from "./components/Foot";
function App() {
  return (
    <div>
      <Navigation />
      <MainBody />
      <About_me />
      <Academics />
      <Foot />
    </div>
  );
}

export default App;
