const initialState = {
	danhSachCuoc: [
		{ ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
		{ ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
		{ ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
		{ ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
		{ ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
		{ ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
	],
	mangXucXac: [
		{ ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
		{ ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
		{ ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
	],
	tongDiem: 1000,
};

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DAT_CUOC': {
			const danhSachCuocUpdate = [...state.danhSachCuoc];
			const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
			if (index !== -1) {
				if (action.tangGiam) {
					if (state.tongDiem > 0) {
						danhSachCuocUpdate[index].diemCuoc += 100;
						state.tongDiem -= 100;
					}
				} else {
					if (danhSachCuocUpdate[index].diemCuoc > 0) {
						danhSachCuocUpdate[index].diemCuoc -= 100;
						state.tongDiem += 100;
					}
				}
			}
			state.danhSachCuoc = danhSachCuocUpdate;
			return { ...state };
		}

		case 'PLAY_GAME': {
			//Tạo xúc xắc ngẫu nhiên
			let mangXucXacNgauNhien = [...state.mangXucXac];
			for (let i = 0; i < 3; i++) {
				let index = Math.floor(Math.random() * 6);
				mangXucXacNgauNhien[i].ma = state.danhSachCuoc[index].ma;
				mangXucXacNgauNhien[i].hinhAnh = state.danhSachCuoc[index].hinhAnh;
			}
			state.mangXucXac = mangXucXacNgauNhien;

			//Xử lý điểm thưởng
			mangXucXacNgauNhien.forEach((xucXacNN, index) => {
				let indexDanhSachCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
				if (indexDanhSachCuoc !== -1) {
					state.tongDiem += state.danhSachCuoc[indexDanhSachCuoc].diemCuoc;
				}
			});

			//Xử lý hoàn tiền
			state.danhSachCuoc.forEach((qc, index) => {
				let indexXucXacNgauNhien = mangXucXacNgauNhien.findIndex(xucXacNN => xucXacNN.ma === qc.ma);
				if (indexXucXacNgauNhien !== -1) {
					state.tongDiem += qc.diemCuoc;
				}
			});

			//Xử lý làm mới game
			state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
				return { ...qc, diemCuoc: 0 };
			});

			return { ...state };
		}

		case 'CHOI_LAI': {
			state.tongDiem = 1000;
			state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
				return { ...qc, diemCuoc: 0 };
			});

			return { ...state };
		}

		default:
			return state;
	}
};

export default BaiTapGameBauCuaReducer;
