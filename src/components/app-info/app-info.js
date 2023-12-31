import './app-info.css';

const AppInfo = ({increased, employers}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее число сотрудников {employers}</h2>
            <h2>Премии получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;