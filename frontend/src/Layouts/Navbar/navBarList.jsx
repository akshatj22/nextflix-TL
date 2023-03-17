
import FontAwesome from "react-fontawesome";
const NavBarList = ({ items }) => {
    const getItem = (item) => {
        let itemlist = null;
        switch (item.type) {
            case 'logo':
                itemlist = <img src={item.src} className="h-5 min-w-[154px]  " alt={item.name} />
                break;
            case 'language':
                itemlist = <p className="border-Netflix border-solid text-Netflix rounded-[3px] py-[3px] px-[5px] border-[1px] hover:bg-Netflix hover:text-darkRed transition-duration:1s">{item.name}</p>
                break;
            case 'icon':
                itemlist = <FontAwesome className="text-Netflix" name={item.name} size='lg' />
                break;
            case 'title':
                itemlist = <p className="text-2xl font-bold">{item.name}</p>   
                break; 
            default:
                itemlist = <p>{item.name}</p>
                break;
        }
        return itemlist
    }
    return <ul className="flex gap-7">
        {items.map(item => {
            return <li key={item.name}>{getItem(item)}</li>
        })}
    </ul>

};


export default NavBarList;