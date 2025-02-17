import React, {useRef} from 'react';
import {useTasks} from '../../state/TasksProvider';
export const Search = () => {

  // const [searchItem, setSearchItem] = useState(""); - controlled

  const {  tasks, searchResults,
    setSearchResults } = useTasks();


  const searchRef = useRef(null);  // - uncontrolled - faster

  const handleInputChange = () => {
    // const searchTerm = e.target.value; //- controlled
    const searchTerm  = searchRef.current?.value || '';   // -uncontrolled
    // setSearchItem(searchTerm) //-controlled


    const keysToSearch = [ 'taskID', 'summary', 'epic', 'priority', 'assignee', 'status' ];
    const filteredItems = tasks.filter( (item) =>
      keysToSearch.some( (key ) => String(item[key]).toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(filteredItems);
  };

  return <>
    <input ref={searchRef} type="search"  className='searchbox' onChange={handleInputChange} placeholder="Search..."></input>
  </>;

};