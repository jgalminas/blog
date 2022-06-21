import Header from "../components/Header.js"

export default function PageLayout({ children }) {

    return (
        <div className="flex col page">
            <Header/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}