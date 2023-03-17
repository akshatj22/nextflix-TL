import { useState, useRef, useLayoutEffect } from "react";

const Switch = ({ items, onToggle , isToggled}) => {
    const [item1Width, setItem1Width] = useState();
    const [item2Width, setItem2Width] = useState();
    const item1Ref = useRef();
    const item2Ref = useRef();


    useLayoutEffect(() => {

        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth)
    }, [])
    const handleToggle = (selectedItem) => {
        onToggle(selectedItem)
    }


   
    const activeTextcolor = "bg-clip-text  text-transparent bg-gradient-to-r from-beautyRed to-lightRed"

    return <div className="hover:cursor-pointer text-white h-8 border-solid border-darkRed rounded-[30px] border-[1px] font-semibold flex items-center relative z-[1]">
        <div ref={item1Ref} onClick={handleToggle.bind(null, items[0])} className={`py-1 px-5 h-8  rounded-[30px] ${isToggled || activeTextcolor}`}>{items[0]}</div>
        <div ref={item2Ref} onClick={() => { handleToggle(items[1]) }} className={`py-1 px-5 h-8  rounded-[30px] ${isToggled && activeTextcolor}`}>{items[1]}</div>
        <div className="h-8 w-20 bg-darkRed rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in " style={
            isToggled ? {
            left: `${item1Width}px`,
            width: `${item2Width + 2}px`
        } : {
            left: '0',
            width: `${item1Width}px`
        }
        }></div>
    </div>
}

export default Switch;