import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatVe extends Component {
    render() {
        // const { ticket } = this.props
        // console.log(ticket)
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đang chọn</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa đặt</span>

                </div>
                <div className=' mt-5'>
                    <table class="table table-bordered" border='2'>
                        <thead>
                            <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className=' text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <th>{gheDangDat.soGhe}</th>
                                    <th>{(gheDangDat.gia).toLocaleString()} VND</th>
                                    <th>
                                        <button className='text-danger' onClick={() => {
                                            this.props.handleHuyGhe(gheDangDat.soGhe)
                                        }}>X</button>
                                    </th>
                                </tr>
                            })}

                        </tbody>
                        <tfoot >
                            <tr>
                                <th className='text-light'>Tổng tiền</th>
                                <th className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien, gheDaDat, index) => {
                                    return tongTien += gheDaDat.gia
                                }, 0).toLocaleString()} VND</th>
                                <th>
                                    <button className='bg-light border-none'>Đặt vé</button>
                                </th>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (rootReducers) => {
    return {
        danhSachGheDangDat: rootReducers.baiTapBookingTicket.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleHuyGhe: (soGhe) => {
            dispatch({
                type: 'HUY_GHE',
                payload: soGhe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe)
