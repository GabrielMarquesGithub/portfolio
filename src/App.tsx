import { Presentation } from "./containers/Presentation";
import { ContactBar } from "./containers/ContactBar";
import { Header } from "./containers/Header";
import { Main } from "./containers/Main";
import { Technologies } from "./containers/Technologies";
import { Projects } from "./containers/Projects";
import { Footer } from "./containers/Footer";

function App() {
  return (
    <>
      <Header />
      <ContactBar />
      <Main>
        <Presentation />
        <Technologies />
        <Projects />
      </Main>
      <Footer />
    </>
  );
}

export default App;
