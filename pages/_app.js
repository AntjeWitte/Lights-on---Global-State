import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialState = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialState);

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleOn(id) {
    setLights(
      lights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
    );
  }

  function handleOff(id) {
    setLights(
      lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
    );
  }

  const countLights = lights.reduce(
    (acc, light) => acc + (light.isOn === true ? 1 : 0),
    0
  );

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        setLights={setLights}
        onToggle={handleToggle}
        countLights={countLights}
        onOn={handleOn}
        onOff={handleOff}
      />
    </Layout>
  );
}
