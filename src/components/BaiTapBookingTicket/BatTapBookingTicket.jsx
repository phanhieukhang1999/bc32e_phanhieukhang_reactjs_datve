import React, { Component } from 'react';
import data from './danhSachGhe.json'
import './BaiTapBookingTicket.css';
import ThongTinDatVe from './ThongTinDatVe';
import HangGhe from './HangGhe';
export default class BatTapBookingTicket extends Component {
    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
    render() {
        return (
            <div className='main'>
                <div className="overlay"></div>
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-8">
                            <div className="container">
                                <div className="card__left text-center">
                                    <h2 className='mt-2'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                                    <p className='screen mt-3'>Màn hình</p>
                                    {this.renderHangGhe()}
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="card__right">
                                <h2 className='text-center mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h2>
                                <ThongTinDatVe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

