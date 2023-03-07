// import { Component } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue()]
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, []);

  const onSearchChange = (event) => {
      const searchFieldString  = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  return (
        <div className="App">
          <h1 className='app-title'>Wanted Monsters</h1>
          <SearchBox 
              className='monsters-search-box'
              onChangeHandler={ onSearchChange }
              placeholder='search monsters'
            />
          <CardList monsters={ filteredMonsters } />
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   };

//   componentDidMount() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) => this.setState(
//         () => {
//           return {monsters: users}
//         },
//         () => {
//           // console.log(this.state)
//         }
//       )
//     );

//   };

//   onSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(() => {
//         return { searchField }
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Wanted Monsters</h1>
//         <SearchBox 
//             className='monsters-search-box'
//             onChangeHandler={ onSearchChange }
//             placeholder='search monsters'
//           />
//         <CardList monsters={ filteredMonsters } />
//       </div>
//     );
//   };
// };

export default App;