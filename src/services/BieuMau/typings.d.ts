import type {
  ETrangThaiHoSo,
  ETrangThaiNhapHoc,
  ETrangThaiTrungTuyen,
  ETrangThaiXacNhanNhapHoc,
} from '@/utils/constants';

declare module BieuMau {
  export interface LuaChon {
    noiDung: string;
    dung?: boolean;
    _id: string;
  }
  export interface CauHoi {
    loai: string;
    batBuoc: boolean;
    noiDungCauHoi: string;
    cauTraLoiKhac: boolean;
    luaChon: LuaChon[];
    luaChonCot: {
      noiDung: string;
      _id: string;
    }[];
    luaChonHang: {
      noiDung: string;
      _id: string;
    }[];
    gioiHanDuoiTuyenTinh: number;
    gioiHanTrenTuyenTinh: number;
    _id: string;
  }

  export interface Khoi {
    tieuDe: string;
    moTa: string;
    danhSachCauHoi: CauHoi[];
  }

  export interface GeneralInfo {
    id: string;
    code: string;
    name: string;
    description: string;
    info: any;
  }

  export interface Record {
    phamVi: string;
    hinhThucDaoTaoId?: number;
    isTatCaHe?: boolean;
    danhSachLopTinChi: GeneralInfo[];
    danhSachLopHanhChinh: GeneralInfo[];
    danhSachNguoiDung: GeneralInfo[];
    danhSachKhoaHoc: GeneralInfo[];
    danhSachNganhHoc: GeneralInfo[];
    loaiDoiTuongSuDung: string[];
    coCamKet: boolean;
    soPhutThucHien?: number;
    soLuotTraLoiToiDa?: number;
    noiDungCamKet: string;
    thoiGian?: string[];
    danhSachVaiTro: string[];
    loai: string;
    tieuDe: string;
    moTa: string;
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
    kichHoat: boolean;
    danhSachKhoi: Khoi[];
    doiTuong: string;
    _id: string;
    danhSachDotTuyenSinh: string[];
    danhSachTrangThai:
      | ETrangThaiHoSo
      | ETrangThaiTrungTuyen
      | ETrangThaiXacNhanNhapHoc
      | ETrangThaiNhapHoc;
  }

  export interface ThongKeLuaChon {
    noiDungLuaChon: string;
    idLuaChon: string;
    soLuong: number;
  }

  export interface ThongKeCot {
    idCot: string;
    noiDungCot: string;
    soLuong: number;
  }
  export interface ThongKeLuaChonGrid {
    noiDungHang: string;
    idHang: string;
    thongKeCot: ThongKeCot[];
  }

  export interface ThongKeLuaChonNumeric {
    giaTriTuyenTinh: number;
    soLuong: number;
  }

  export interface ThongKeCauHoi {
    _id: string;
    noiDungCauHoi: string;
    loai: string;
    soLuongTraLoi: number;
    ketQua: ThongKeLuaChon[] | ThongKeLuaChonGrid[] | ThongKeLuaChonNumeric[];
  }
  export interface ThongKeKhoi {
    _id: string;
    tieuDe: string;
    moTa: string;
    thongKeCauHoi: ThongKeCauHoi[];
  }

  export interface ThongKe {
    _id: string;
    tieuDe: string;
    moTa: string;
    loai: string;
    thongKeKhoi: ThongKeKhoi[];
  }

  export interface LuaChonBangRecord {
    _id?: string;
    idCot: string;
    idHang: string;
  }

  export interface TraLoiRecord {
    listLuaChon?: string[];
    listLuaChonBang?: LuaChonBangRecord[];
    traLoiText?: string;
    _id?: string;
    cauHoiId: string;
    luaChonTuyenTinh?: number;
    listUrlFile?: string[];
  }

  export interface RecordTraLoi {
    _id: string;
    idBieuMau: string;
    danhSachTraLoi: TraLoiRecord[];
    userId: string;
    vaiTro: string;
  }
}
