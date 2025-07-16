import { Header } from "../components/Header"
import { Profile } from "../components/profile.me"

export const Me = ()=>{
    return(
        <div className="flex flex-col h-[100vh] sm:overflow-hidden">
            <Header/>
            <Profile />
        </div>
    )
}