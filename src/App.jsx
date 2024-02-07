import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import Nyheder from './views/Nyheder';
import Aktiviteter from './views/Aktiviteter';
import Kattegatcentret from './components/activities/Kattegatcentret';
import Djurssommerland from './components/activities/Djurssommerland';
import GjerrildNordstrand from './components/activities/GjerrildNordstrand';
import Nationalpark from './components/activities/Nationalpark';
import Reepark from './components/activities/Reepark';
import Skandinavisk from './components/activities/Skandinavisk';
import Restaurant from './views/restaurant/Restaurant';
import List from './components/list/List';



function App () {

  // ROUTER PROVIDER
  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        {/* ---------------- PUBLIC ---------------- */ }
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="nyheder" element={ <Nyheder /> } />
          <Route path="aktiviteter" element={ <Aktiviteter /> } />
          <Route path="kattegatcentret" element={ <Kattegatcentret /> } />
           <Route path="djurssommerland" element={ <Djurssommerland /> } />
           <Route path="gjerrildnordstrand" element={ <GjerrildNordstrand/> } />
           <Route path="nationalpark" element={ <Nationalpark/> } />
           <Route path="reepark" element={ <Reepark/> } />
           <Route path="skandinavisk" element={ <Skandinavisk/> } />
           <Route path="restaurant" element={ <Restaurant /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

           {/* ---------------- Aktiviteter ---------------- */ }
           <Route>
            <Route path="list" element={ <List /> } />
           </Route>
      </>
    )
  )

  return (
    <section>
      <RouterProvider router={ router } />
      {/* <h1>Forsiden</h1> */ }
    </section>


  )
}

export default App
