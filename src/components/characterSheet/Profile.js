import React from 'react';
import { string, number, shape, arrayOf } from 'prop-types';

import { showPlus } from '../_staticFunctions';

const Profile = ({
	name,
	hd,
	classLevelSummary,
	alignment,
	race,
	age,
	size,
	sizeMod,
	height,
	weight,
	eyes,
	hair,
	skin,
	languages,
}) => (
	<div id="profile" className="section">
		<h2>{name}</h2>
		<div className="flex">
			<div className="px1 bold">
				HD {hd}
			</div>
			{Object.keys(classLevelSummary).map(charClass => (
				<div className="px1 cap">
					{charClass} {classLevelSummary[charClass]}
				</div>
			))}
		</div>
		<div className="px1 cap">
			{alignment} {race}, age {age}
		</div>
		<div className="flex">
			<div className="px1">
				<span className="cap">{size}</span>
				&nbsp;size
				(<span className="bold">{showPlus(sizeMod)}</span>)
			</div>
			<div className="px1">{height}&quot; tall</div>
			<div className="px1">{weight} lbs</div>
		</div>
		<div className="flex">
			<div className="px1">
				<span className="cap">{eyes}</span> eyes
			</div>
			<div className="px1">
				<span className="cap">{hair}</span> hair
			</div>
			<div className="px1">
				<span className="cap">{skin}</span> skin
			</div>
		</div>
		<div className="px1">
			Speaks&nbsp;
			<span className="cap">{languages.join(', ')}</span>
		</div>
	</div>
);
Profile.propTypes = {
	name: string,
	hd: number,
	classLevelSummary: shape({}),
	alignment: shape({}),
	race: string,
	age: number,
	size: string,
	sizeMod: number,
	height: number,
	weight: number,
	eyes: string,
	hair: string,
	skin: string,
	languages: arrayOf(string),
};
Profile.defaultProps = {
	name: '',
	hd: 0,
	classLevelSummary: {},
	alignment: {},
	race: '',
	age: 0,
	size: '',
	sizeMod: 0,
	height: 0,
	weight: 0,
	eyes: '',
	hair: '',
	skin: '',
	languages: [],
};

export default Profile;
