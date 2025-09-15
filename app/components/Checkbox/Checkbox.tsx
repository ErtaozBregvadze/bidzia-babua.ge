import { useState } from "react"

export default () => {

    const[showMenu, setshowMenu] = useState(false)
    
    const onChange = () => {
        setshowMenu(!showMenu)
    }


    return ( 
        <> 
        <div onClick={onChange}> {showMenu ? "hide menu" :"Show menu"} </div>
        {
            showMenu &&
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        }



        </>   
    )


}