import { Fragment } from 'react'
import { Navbar } from './components/Navbar'
import { Articulos } from "./components/Articulos"

import { CarritoContextProvider } from "./Context/carroContext";


export default function App(){

  return (
    <Fragment>
      <CarritoContextProvider>
        <Navbar />
        <Articulos/>
      </CarritoContextProvider>
    </Fragment>
  );
}

