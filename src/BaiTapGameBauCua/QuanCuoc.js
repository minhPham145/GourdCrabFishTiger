import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {
	const dispatch = useDispatch();

	const { quanCuoc } = props;

	const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
		return {
			to: { scale: 1 },
			from: { scale: 0.8 },
		};
	});

	const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
		return {
			to: { scale: 1 },
			from: { scale: 0.8 },
		};
	});

	return (
		<div className='quanCuoc text-center mt-2'>
			<img style={{ width: 160 }} src={quanCuoc.hinhAnh} alt={quanCuoc.hinhAnh}></img>

			<div
				className='d-flex align-items-center justify-content-center mt-2 p-2'
				style={{
					backgroundColor: '#367E18',
					borderRadius: '10px',
					width: 160,
					margin: 'auto',
				}}>
				<animated.button
					className='btn text-white mr-3'
					style={{
						backgroundColor: '#CC3636',
						transform: propsUseSpringIncrease.scale.to(scale => `scale(${scale})`),
					}}
					onClick={() => {
						setIncrease.start({
							to: { scale: 1 },
							from: { scale: 0.8 },
						});

						dispatch({
							type: 'DAT_CUOC',
							quanCuoc,
							tangGiam: true,
						});
					}}>
					<i className='fa fa-plus'></i>
				</animated.button>

				<p className='m-0' style={{ fontSize: 20, color: '#fff' }}>
					{quanCuoc.diemCuoc}
				</p>

				<animated.button
					className='btn text-white ml-3'
					style={{
						backgroundColor: '#CC3636',
						transform: propsUseSpringDecrease.scale.to(scale => `scale(${scale})`),
					}}
					onClick={() => {
						setDecrease.start({
							to: { scale: 1 },
							from: { scale: 0.8 },
						});

						dispatch({
							type: 'DAT_CUOC',
							quanCuoc,
							tangGiam: false,
						});
					}}>
					<i className='fa fa-minus'></i>
				</animated.button>
			</div>
		</div>
	);
}
