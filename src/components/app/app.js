import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'nazar' , salary: 900 , increase: true},
        {name: 'dima' , salary: 1100, increase: true},
        {name: 'canya' , salary: 76600, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>


            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;