import { Header } from "../components/Header"
import { IndexMain } from "../components/Main.index"

export const Home = () => {
    return (
        <div className="flex flex-col h-[100vh] sm:overflow-hidden">
            <Header/>
            <IndexMain/>
        </div>
    )
}