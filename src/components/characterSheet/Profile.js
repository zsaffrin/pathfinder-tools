import React from 'react';
import PropTypes from 'prop-types';

import { showPlus } from '../_staticFunctions';

const Profile = ({ character }) => (
	<div id="profile">
		<h2 className="mb1">{character.characterName()}</h2>
		<div className="px1 cap">
			{character.alignment()} {character.race()}, age {character.age()}
		</div>
		<div className="flex">
			<div className="px1">
				<span className="cap">{character.size()}</span>
				&nbsp;size
				(<span className="bold">{showPlus(character.sizeMod())}</span>)
			</div>
			<div className="px1">{character.height()}&quot; tall</div>
			<div className="px1">{character.weight()} lbs</div>
		</div>
		<div className="flex">
			<div className="px1">
				<span className="cap">{character.eyeColor()}</span> eyes
			</div>
			<div className="px1">
				<span className="cap">{character.hairColor()}</span> hair
			</div>
			<div className="px1">
				<span className="cap">{character.skinColor()}</span> skin
			</div>
		</div>
		<div className="px1">
			Speaks&nbsp;
			<span className="cap">{character.languages().join(', ')}</span>
		</div>
	</div>
);
Profile.propTypes = {
	character: PropTypes.shape({}),
};
Profile.defaultProps = {
	character: {},
};

export default Profile;
