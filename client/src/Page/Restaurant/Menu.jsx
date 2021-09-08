import React,{useState} from 'react';

//component
import MenuCollections from '../../Components/Restaurant/MenuCollection';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    return (
        <>
            <div className="flex flex-wrap gap-3">
                {menus.map((menu) => <MenuCollections {...menu} />)}
            </div>
        </>
    )
}

export default Menu;
