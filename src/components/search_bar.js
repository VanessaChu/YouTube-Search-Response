import React, { Component } from 'react';

// const SearchBar = ()  => {
//   return <input />;
// };

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){

    return(
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={event => console.log(event.target.value)} />;
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchBarChange(term);
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}


export default SearchBar;
