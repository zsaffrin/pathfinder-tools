import React from 'react';
import PropTypes from 'prop-types';

import { showPlus, formatLength } from '../_staticFunctions';

const Attributes = ({ attributes, levels, alignment, size, languages }) => {
	const { name, hd, race, height, hair, eyes, weight } = attributes;

	return (
		<div id="attributes">
			<h3 className="mt0 mb2 mx1 h2">{name}</h3>

			<div className="my1 flex flex-justify-around">
				<div className="center mx1">
					<div className="py-thin px2 bold border border-gray-lighter">
						{hd}
					</div>
					<div className="p-thin label">HD</div>
				</div>

				<div className="mx1">
					<div
						className="py-thin border border-gray-lighter flex flex-wrap
							flex-justify-center"
					>
						{Object.keys(levels).map(key => (
							<div className="px2 nowrap" key={key}>
								{`${key} `}
								<span className="bold">{levels[key]}</span>
							</div>
						))}
					</div>
					<div className="py-thin px2 label caps center">
						Levels and Classes
					</div>
				</div>
			</div>

			<div className="my1 flex flex-center flex-justify-around">
				<div className="px1 label caps">Alignment</div>
				<div className="px2 flex-auto border border-gray-lighter cap">
					{alignment.lawful} {alignment.moral}
				</div>
			</div>

			<div className="my1">

				<div className="my1 flex">
					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Race</div>
						<div className="px2 flex-auto border border-gray-lighter cap">
							{race}
						</div>
					</div>

					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Height</div>
						<div className="px2 flex-auto border border-gray-lighter">
							{formatLength(height)}
						</div>
					</div>
				</div>

				<div className="my1 flex">
					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Hair</div>
						<div className="px2 flex-auto border border-gray-lighter cap">
							{hair}
						</div>
					</div>

					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Weight</div>
						<div className="px2 flex-auto border border-gray-lighter">
							<span className="cap">{weight}</span> lbs
						</div>
					</div>
				</div>

				<div className="my1 flex">
					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Eyes</div>
						<div className="px2 flex-auto border border-gray-lighter cap">
							{eyes}
						</div>
					</div>

					<div className="col-6 flex flex-center flex-auto">
						<div className="px1 label caps">Size</div>
						<div
							className="px2 flex-auto border border-gray-lighter flex
								flex-justify-between"
						>
							<div className="cap">{size.category}</div>
							<div className="bold border-left border-gray-lighter pl1">
								{showPlus(size.mod)}
							</div>
						</div>
					</div>
				</div>

			</div>

			<div className="my1 flex flex-center flex-justify-around">
				<div className="px1 label caps">Languages</div>
				<div
					className="px2 flex-auto border border-gray-lighter cap flex
						flex-wrap"
				>
					{languages.map(lang => (
						<div className="px1" key={lang}>{lang}</div>
					))}
				</div>
			</div>

		</div>
	);
};
Attributes.propTypes = {
	attributes: PropTypes.shape({
		name: PropTypes.string,
		hd: PropTypes.number,
		race: PropTypes.string,
		height: PropTypes.number,
		hair: PropTypes.string,
		eyes: PropTypes.string,
		weight: PropTypes.number,
	}),
	levels: PropTypes.shape({}),
	alignment: PropTypes.shape({}),
	size: PropTypes.shape({}),
	languages: PropTypes.arrayOf(
		PropTypes.string,
	),
};
Attributes.defaultProps = {
	attributes: {
		name: '',
		hd: 0,
		race: '',
		height: 0,
		hair: '',
		eyes: '',
		weight: 0,
	},
	levels: {},
	alignment: {},
	size: {},
	languages: [],
};

export default Attributes;
