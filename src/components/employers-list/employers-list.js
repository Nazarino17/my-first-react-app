import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; // диструктуризация, вітаскиваем айди
        return (
            <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
            //name={item.name} salary={item.salary} или так
        )
    })


    return (
        
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;