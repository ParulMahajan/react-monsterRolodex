import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log('render');
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);


  
   // fetch monsters json
  useEffect( () => {
    console.log("fetch monsters jsonn");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then( (users) => setMonsters(users) );
   }, [])  
   
   // filtermonsters
   useEffect( () => {
    console.log("filter monsters");
    const filteredMonsterList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
          });
     setFilteredMonsters(filteredMonsterList);
   }, [monsters, searchString]) 


  const onSearchChange = (event) => {
    console.log("on search change");
    const searchStringLower = event.target.value.toLocaleLowerCase();
    setSearchString(searchStringLower);
  };

 
  return (
    <div className="App">
      <h1 className="App-Title">Monster Rolodex</h1>
      <SearchBox onSearch={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//       console.log("constructor");
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//       console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) =>
//         this.setState(
//           () => {
//             return { monsters: json };
//           },
//           () => {
//             //     console.log(this.state);
//           }
//         )
//       );
//   }

//   render() {
//      console.log("render");

//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;
//     console.log(monsters);
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     });
//     // console.log("filteredMonsters: ", filteredMonsters);
//     return (
//       <div className="App">
//       <h1 className="App-Title">Monster Rolodex</h1>
//         <SearchBox onSearch={onSearchChange} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchString: searchString };
//     });
//   };
// }

export default App;
