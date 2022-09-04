import "./App.css";
import {
  Header,
  Nav,
  Ukraine,
  MetaCommitment,
  FeaturedMedia,
  Section,
  PopularProjects,
  ShowCase,
  Footer,
  Welcome,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Ukraine />
        <Welcome />
        <MetaCommitment />
        <Section
          Component={FeaturedMedia}
          sectionHeader={"featured media"}
          sectionAction={"see all media"}
        />
        <Section
          Component={PopularProjects}
          sectionHeader={"popular projects"}
          sectionAction={"see more projects"}
        />
        <ShowCase />
      </main>
      <Footer />
    </>
  );
}

export default App;
