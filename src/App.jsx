import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import News from './views/News';
import Data from './views/Data';
import Aktiviteter from './views/activities/Aktiviteter';
import Kattegatcentret from './views/activities/Kattegatcentret';
import Djurssommerland from './views/activities/Djurssommerland';
import GjerrildNordstrand from './views/activities/GjerrildNordstrand';
import Nationalpark from './views/activities/Nationalpark';
import Reepark from './views/activities/Reepark';
import Skandinavisk from './views/activities/Skandinavisk';



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
          <Route path="news" element={ <News /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="data" element={ <Data /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

           {/* ---------------- Aktiviteter ---------------- */ }
           <Route>
           <Route path="aktiviteter" element={ <Aktiviteter /> } />
           <Route path="kattegatcentret" element={ <Kattegatcentret /> } />
           <Route path="djurssommerland" element={ <Djurssommerland /> } />
           <Route path="gjerrildnordstrand" element={ <GjerrildNordstrand/> } />
           <Route path="nationalpark" element={ <Nationalpark/> } />
           <Route path="reepark" element={ <Reepark/> } />
           <Route path="skandinavisk" element={ <Skandinavisk/> } />
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
