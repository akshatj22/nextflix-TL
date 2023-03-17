import { forwardRef } from "react";


const SearchInput = forwardRef((props, ref) => {
    return <input {...props} type="text" ref={ref} className="w-full h-11 rounded-[12rem] outline-none px-5 py-3 bg-creamish placeholder:text-Netflix text-[1.1rem] text-Netflix" placeholder="Search for a movie, tv show, person.....">

    </input>
})


export default SearchInput;