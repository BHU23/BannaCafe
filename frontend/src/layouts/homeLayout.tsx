import { Outlet } from 'react-router-dom'
import homeBk from '../assets/homeBK.png'
export default function HomeLayout() {
  return (
    <div>
    {/* <div style={{background:`url(${homeBk})`}}> */}
        <main>
            <Outlet/>
        </main>
        <footer>
            
        </footer>
    </div>
  )
}
