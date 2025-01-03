
import Navbar from './Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Page() {
  return (
    <div>
        <Navbar/>
<div>
    <Outlet/>
</div>
<Footer/>
            
    </div>
  )
}

export default Page