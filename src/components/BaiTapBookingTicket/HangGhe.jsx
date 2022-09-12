import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let gheDaDat = ''
            let disabled = false
            //Xét trạng thái ghế đã bị người khác đặt
            if (ghe.daDat) {
                gheDaDat = 'gheDuocChon'
                disabled = true
            }
            // Xét trạng thái ghế đang đặt
            let gheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                gheDangDat = 'gheDangChon'
            }

            return <button onClick={() => {
                console.log(ghe)
                this.props.handleDatGhe(ghe)
            }} disabled={disabled} className={`ghe ${gheDaDat} ${gheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>

        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber' key={index}>
                {hang.soGhe}
            </button>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.renderSoHang()}

            </div>
        }
        return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}

        </div>
    }
    render() {
        return (
            <div className='text-light text-left ml-3 mt-3'>
                {this.renderHangGhe()}
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
        handleDatGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                payload: ghe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)