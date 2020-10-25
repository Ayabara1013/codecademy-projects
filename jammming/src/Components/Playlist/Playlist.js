import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';


class Playlist extends React.Component
{
  constructor(props) 
  {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() 
  {
    return(
      <div className="Playlist">
        
        <input 
          defaultValue={'New Playlist'} 
          onChange={this.handleNameChange} 
        />

        <TrackList 
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true} 
        />
        
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>

      </div>
    );
  }
}

// spotify:track:7GIm1pO5HRG5zF8WMCow0U

export default Playlist;
