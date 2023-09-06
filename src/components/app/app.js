import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'nazar' , salary: 900 , increase: true, rise: true , id: 1},
                {name: 'dima' , salary: 1100, increase: true, rise: false , id: 2},
                {name: 'canya' , salary: 76600, increase: false, rise: false , id: 3},
            ]
        }

        this.maxId = 4;
    }
    // state напрямую изменять нельзя
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...b1efore, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))

    }
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

   

    render() {
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo 
                    employers={employers}
                    increased={increased}
                    />
    
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployersAddForm
                    onAdd={this.addItem}
                    />
            </div>
        );
    }

}

export default App;