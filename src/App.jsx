import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Title } from "./components/Title"
import { Calc } from "./components/Calc"

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Title text="Labas rytas, Lietuva" desc="" />
        <div>YGR</div>

        <Calc a={7} b={5} />
        <Calc a={76} b={85} />

        <Title text="Apie mus" desc="aa" />
        <Title text="Paslaugos" desc="AA" />
        <Title text="Kontaktai" desc="" />
      </Main>
      <Footer />
    </>
  );
}
