import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {
	const { xucXacItem } = props;

	const [propsDice, api] = useSpring(() => ({
		to: {
			xyz: [1800, 1800, 1800],
		},
		from: {
			xyz: [0, 0, 0],
		},
		config: {
			duration: 500,
		},
	}));

	api.start({
		to: { xyz: [1800, 1800, 1800] },
		from: { xyz: [0, 0, 0] },
	});

	return (
		<Fragment>
			<div className='scene ml-5'>
				<animated.div
					className='cube'
					style={{
						transform: propsDice.xyz.to((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotatey(${y}deg) rotatez(${z}deg)`),
					}}>
					<div className='cube__face front'>
						<img style={{ width: '100%' }} src={xucXacItem.hinhAnh} alt={xucXacItem.hinhAnh} />
					</div>

					<div className='cube__face back'>
						<img style={{ width: '100%' }} src='./img/BaiTapGameBauCua/bau.png' alt='./img/BaiTapGameBauCua/bau.png' />
					</div>

					<div className='cube__face right'>
						<img style={{ width: '100%' }} src='./img/BaiTapGameBauCua/ga.png' alt='./img/BaiTapGameBauCua/ga.png' />
					</div>

					<div className='cube__face left'>
						<img style={{ width: '100%' }} src='./img/BaiTapGameBauCua/ca.png' alt='./img/BaiTapGameBauCua/ca.png' />
					</div>

					<div className='cube__face top'>
						<img style={{ width: '100%' }} src='./img/BaiTapGameBauCua/tom.png' alt='./img/BaiTapGameBauCua/tom.png' />
					</div>

					<div className='cube__face bottom'>
						<img style={{ width: '100%' }} src='./img/BaiTapGameBauCua/nai.png' alt='./img/BaiTapGameBauCua/nai.png' />
					</div>
				</animated.div>
			</div>
		</Fragment>
	);
}
