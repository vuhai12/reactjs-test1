import style from './Staff.module.scss'
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '../../components/Wrapper';
import { Poper } from '../../components/Poper';
import Avatar from '../../img/Avatar.png';
import { ReactComponent as Pren } from "../../img/Pre.svg";
import { ReactComponent as Nextn } from "../../img/Next.svg";
import { useState } from 'react';


const MENU_ITEMS = [
    {
        id: 1,
        title: 'Quản lý cấp 1',
        name: 'Nguyễn Văn A',
        phone: '01253669955',
        address: '123, Lào cai',
        image: <img src={Avatar} alt='Avatar' />,
        createDay: '1/2/2022'
    },
    {
        id: 2,
        title: 'Quản lý cấp 2',
        name: 'Nguyễn Văn B',
        phone: '01253899955',
        address: '123, Lào cai',
        image: <img src={Avatar} alt='Avatar' />,
        createDay: '1/2/2022'
    },
    {
        id: 3,
        title: 'Nhân viên lên đơn',
        name: 'Nguyễn Văn C',
        phone: '0125366555',
        address: '123, Lào cai',
        image: <img src={Avatar} alt='Avatar' />,
        createDay: '1/2/2022'
    },
    {
        id: 4,
        title: 'Nhân viên soạn sản phẩm',
        name: 'Nguyễn Văn D',
        phone: '012537855',
        address: '123, Lào cai',
        image: <img src={Avatar} alt='Avatar' />,
        createDay: '1/2/2022'
    },
    {
        id: 5,
        title: 'Quản lý cấp cao',
        name: 'Nguyễn Văn Z',
        phone: '0125366566',
        address: '123, Lào cai',
        image: <img src={Avatar} alt='Avatar' />,
        createDay: '1/2/2022'
    }
]

const Staff = () => {

    const [showTippy, setShowTipy] = useState(false)
    const [showTippyDelete, setShowTippyDelete] = useState(false)
    const [showKey, setShowKey] = useState()

    return (
        <div className={style.wrapper}>
            <div className={style.topPage}>
                <h1>Quản lý nhân viên</h1>
                <button>Tạo nhân viên</button>
            </div>
            <div className={style.wrapperSearch}>
                <div className={style.wrapperNameStaff}>
                    <label>Tìm theo tên nhân viên</label>
                    <input placeholder='Tìm kiếm...'></input>
                </div>
                <div className={style.wrapperStatus}>
                    <label>Lọc theo trạng thái</label>
                    <Tippy
                        interactive
                        visible={showTippy}
                        placement='bottom'
                        onClickOutside={() => setShowTipy(false)}
                        render={attrs => (
                            <Wrapper>
                                <div tabIndex="-1" {...attrs}>
                                    {MENU_ITEMS.map((item, index) => {
                                        return (
                                            <button
                                                onClick={() => setShowTipy(false)}
                                                key={index}
                                                className={style.wrapperButton}>
                                                {item.title}
                                            </button>
                                        )
                                    })}
                                </div>
                            </Wrapper>
                        )}
                    >
                        <input placeholder='Chọn vai trò' onClick={() => setShowTipy(true)} />
                    </Tippy>
                </div>
            </div>
            <div className={style.contentDetail}>
                <table>
                    <tbody>
                        <tr className={style.lineHeader}>
                            <th>STT</th>
                            <th className={style.lineHeaderSort}>Vai trò</th>
                            <th>Ảnh đại diện</th>
                            <th>Tên nhân viên</th>
                            <th className={style.lineHeaderSort}>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th className={style.lineHeaderSort}>Ngày tạo</th>
                            <th>Hành động</th>
                        </tr>
                        {MENU_ITEMS.map((item, index) => {
                            return (
                                <tr key={index} className={style.lineTd}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.image}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.createDay}</td>
                                    <td>
                                        <button className={style.buttonUpdate}>Cập nhật</button>
                                        <Tippy
                                            interactive
                                            visible={index === showKey ? showTippyDelete : false}
                                            placement='bottom-end'
                                            onClickOutside={() => setShowTippyDelete(false)}
                                            render={attrs => (
                                                <Poper>
                                                    <div tabIndex="-1" {...attrs}>
                                                        <h1
                                                            className={style.headerAgree}>
                                                            Bạn có muốn xóa nhân viên này không?
                                                        </h1>
                                                        <div
                                                            className={style.wrapperButtonTippy}>
                                                            <button
                                                                onClick={() => setShowTippyDelete(false)}
                                                                className={style.buttonAgree}>
                                                                Đồng ý
                                                            </button>
                                                            <button
                                                                onClick={() => setShowTippyDelete(false)}
                                                                className={style.buttonrefuse}>
                                                                Từ chối
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Poper>
                                            )}
                                        >
                                            <button
                                                key={index}
                                                onClick={
                                                    () => {
                                                        setShowTippyDelete(true)
                                                        setShowKey(index)
                                                    }
                                                }
                                                className={style.buttonDelete}>
                                                Xóa
                                            </button>
                                        </Tippy>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                <div className={style.bottomPage}>
                    <ul>
                        <li className={style.pageIcon}><Pren /></li>
                        <li className={style.pageActive}>1</li>
                        <li className={style.pageNoActive}>2</li>
                        <li className={style.pageNoActive}>3</li>
                        <li className={style.pageNoActive}>4</li>
                        <li className={style.pageNoActive}>...</li>
                        <li className={style.pageIcon}><Nextn /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Staff;