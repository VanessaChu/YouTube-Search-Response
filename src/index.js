import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyCdv3CnClRrKYjYHEoa2K3RooR4eu6_Vwg';


class App extends Component{
  constructor(props){
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('surfboards');
        // this.setState({videos: videos});
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
    return(
      <div>
        <SearchBar onSearchBarChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}



//Create a new component. This component should produce
//some HTML

// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   );
// }

//Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
