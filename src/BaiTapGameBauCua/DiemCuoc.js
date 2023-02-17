import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function DiemCuoc(props) {
	const dispatch = useDispatch();
	const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem);

	return (
		<div className='diemCuoc'>
			<h3 className='text-center display-4' style={{ color: '#367E18' }}>
				GAME BẦU CUA
			</h3>

			<div className='text-center mt-4'>
				<span
					className='p-3 text-white'
					style={{
						backgroundColor: '#CC3636',
						fontSize: '20px',
						borderRadius: '5%',
					}}>
					Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span>
				</span>
			</div>

			<div className='text-center mt-4'>
				<button
					onClick={() => dispatch({ type: 'CHOI_LAI' })}
					className='p-3 btn text-white'
					style={{
						backgroundColor: '#367E18',
						fontSize: '15px',
						borderRadius: '5%',
					}}>
					Chơi lại
				</button>
			</div>
		</div>
	);
}
