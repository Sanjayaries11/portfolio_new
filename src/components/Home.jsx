import CTA from "../pages/home/CTA";
import Homebanner from "../pages/home/Homebanner";
import Howwork from "../pages/home/Howwork";
import Whyme from "../pages/home/whyme";

export default function Home() {
    return (
        <>
            <div className="mainContent" >
                <Homebanner />
                <Whyme />
                <Howwork />
                <CTA />
            </div>
        </>
    )
}