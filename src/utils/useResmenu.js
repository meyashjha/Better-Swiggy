import { useEffect, useState } from "react"
import { MENU_API } from "./constants.js"; 

const useResmenu = (resid) => {
    const [Resmenu, setResmenu] = useState(null);

    useEffect(() => {
        fetchmenu()
    }, [resid])

    const fetchmenu = async () => {
        const menudata = await fetch(MENU_API + resid);
        const menujson = await menudata.json();
        setResmenu(menujson);
    }

    return Resmenu;
}

export default useResmenu; 