import './App.css'
import Navbar from './component/navbar'
import Ads from './component/Ads'
import Card from './component/card'
import DressCard from './component/DressCard'
import Footer from './component/Footer'
import Women from './component/Women'
import Men from './component/Men'
import Studio from './component/Studio'
// import Beauty from './component//Beauty'
import Home from './component//Home'
import Genz from './component/Genz'
import Kids from './component/Kids'



import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Ads />
          <Card />
          <DressCard />
          <Footer />
        </>
      )
    },
    {
      path: "/women",
      element: <Women />
    }
    ,{
      path:"/home",
      element: < Home/>
    },
    {
      path:"/genz",
      element:<Genz />
    }
    ,{
      path:"/men",
      element:<Men />

    },{
      path:"/studio",
      element:<Studio />
    },
    {
      path:"/kids",
      element:<Kids/>
    }
  ])

  return <RouterProvider router={router} />
}

export default App