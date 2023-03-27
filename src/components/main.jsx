export { Main }
import { useState} from "react"
import { Button } from "./button"
import divider from "../assets/pattern-divider-desktop.svg"

const Main = () => {

    const [id, setId] = useState(null)
    const [advice, setAdvice] = useState(null)

    async function handleClick(){
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setId(data.slip.id);
        setAdvice(data.slip.advice);
    }

    return (
        <main className="bg-Dark-Grayish-Blue w-96 h-72 rounded-lg flex items-center justify-center shadow-2xl">
            <div className="relative font-['Space Grotesk', sans-serif] w-[80%] h-[80%] flex flex-col items-center justify-center gap-8 font-Manrope">

                <p className="text-Neon-Green text-lg">Advice #{id}</p>
                <span className="text-Light-Cyan text-[20px]">{advice}</span>
                <img src={divider}></img>
                
                <Button newPhrase={handleClick}/>
            </div>
        </main>

    )
}