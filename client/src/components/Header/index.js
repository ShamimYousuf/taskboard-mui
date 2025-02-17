import React from 'react';
import logo from '../../images/flowerlogogrey.png';
import {Search} from '../Search';
import {CreateTask} from '../CreateTaskModalBox';


export const Header = () => {


  return <header className="header">
    <a href='/'>
      <img className="logo" src={logo} alt="Crown Clean"/>
    </a>

    <CreateTask/>

    <Search/>



  </header>;
};