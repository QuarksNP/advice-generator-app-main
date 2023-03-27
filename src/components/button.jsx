export { Button }
import icon from "../assets/icon-dice.svg"

const Button = ({newPhrase}) => {
    return(
        <button onClick={() => newPhrase()} 
        before=""
        after=""
        className=" absolute
                    bottom-[-2.5rem]
                    flex
                    items-center
                    justify-center
                    before:content-[attr(before)]
                    after:content-[attr(after)]
                    before:bg-Neon-Green
                    before:w-[50px]
                    before:h-[50px]
                    before:absolute
                    before:rounded-[100%]
                    after:absolute
                    after:hover:bg-Neon-Green
                    after:w-[50px]
                    after:h-[50px]
                    after:rounded-full
                    after:hover:blur-lg
                    after:hover:duration-300

                    ">
            <img src={icon} className=" z-10"></img>
        </button>
    )
}