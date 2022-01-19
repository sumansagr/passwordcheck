import { useState } from "react"
import{ FontAwesomeIcon} from "@fontawesome/react-fontawesome";

function togglePassword() {
    const [visible, setVisiblity] =useState(false)
    const Icon=<FonttAwesomeIcon 
    icon={visible ? "eye-slash" : "eye" } 
        onClick={()=>setVisiblity(visiblity => !visiblity)}
    />

    const InputType= visible ? "text" : "password" ;
    return  [InputType, Icon]
};

export default togglePassword
