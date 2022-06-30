import Footer from "../components/Footer.js";
import Header from "../components/Header.js"

export default function PageLayout({ children }) {

    return (
        <div className="flex col page">
            <Header/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </div>
    )
}