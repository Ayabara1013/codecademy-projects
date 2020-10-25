import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';



class TrackList extends React.Component 
{
	renderMap()
	{
		if (this.props.tracks)
		{
			return (
				this.props.tracks.map(track => {
					return <Track
						track={track}
						key={track.id} />
				})
			);
		}
	}

	render() 
	{
		return (
			<div className="TrackList">
				{
					// this.renderMap()
					this.props.tracks.map(track => {
						return <Track
							track={track}
							key={track.id} 
						/>
					})
				}
			</div>
		)
	}
}




export default TrackList;