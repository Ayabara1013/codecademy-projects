import React from 'react'
import './Playlist.css';

import TrackList from '../TrackList/TrackList';



class Playlist extends React.Component
{
	render()
	{
		return (
			<div className="Playlist">
				<input defaultValue={"New Playlist"} />
				{/* <TrackList />
					
					// https://discuss.codecademy.com/t/jamming-project-stuck-on-exercise-34/431466/7?u=codemaster14994
				 */}
				<button className="Playlist-save">SAVE TO SPOTIFY</button>
			</div>
		);
	}
}



export default Playlist;
