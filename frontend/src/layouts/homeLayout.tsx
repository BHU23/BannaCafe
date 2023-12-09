import { Outlet } from 'react-router-dom'
import homeBk from '../assets/homeBK.png'
export default function HomeLayout() {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
