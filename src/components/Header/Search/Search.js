import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  checkIfShouldLoadAll = () => {
    if(this.state.text === ''){
      console.log(this)
      this.props.getAllPosts()
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            placeholder="Search Your Feed" 
            onChange={(e)=>{this.state.text = e.target.value; this.checkIfShouldLoadAll()}
            }
          />

          <SearchIcon id="Search__icon" onClick={()=>{
             this.props.getFilterSearch(this.state.text)}}/>
        </div>
        
      </section>
    )
  }
}