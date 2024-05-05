import { Outlet } from "react-router-dom"
import Newsletter from "../Footer/Newsletter/Newsletter"
import Footer from "../Footer/Footer"
export default function Layout() {
  return (
    <>
    <Outlet></Outlet>
    <Newsletter/>
                <Footer />
    </>
  )
}