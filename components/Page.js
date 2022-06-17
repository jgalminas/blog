import Header from "./Header.js"

export default function Page({ children}) {

    return (
        <div className="flex col page">
            <Header/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}