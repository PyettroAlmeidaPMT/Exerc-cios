import React, {useState} from "react";


function Button(props){
    const [isDark, SetState] = useState(false)


        const buttonHover = () => {
            SetState(!isDark)
            
        }

    return (
    
        

        <button
         onClick={buttonHover}
         className={isDark ? "DarkButton" : "WhiteButton"}
         >


        </button>
    );


}

export default button