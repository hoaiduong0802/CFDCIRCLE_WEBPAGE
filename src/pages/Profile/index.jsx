// page/StudentProfilePage/index.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../../components/context/AuthContext";
import PATHS from "../../constants/paths";

const StudentProfilePage = () => {
  const { profile, handleGetProfileCourse, handleGetProfilePayment } =
    useAuthContext();
  const { firstName, introduce, email, phone, website } = profile || {};

  //  [OPTIONAL]
  //   useEffect(() => {
  //     handleGetProfileCourse();
  //     handleGetProfilePayment();
  //   }, []);

  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
                    <img
                      src="/img/cfd-share-thumbnail-facebook.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <h3 className="title --t3">{firstName}</h3>
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
              <p className="description">{introduce}</p>
              <ul>
                <li>
                  <img src="/img/icon-mail-outline.svg" alt="icon" />
                  <span>{email}</span>
                </li>
                <li>
                  <img src="/img/icon-phone-outline.svg" alt="icon" />
                  <span>{phone}</span>
                </li>
                <li>
                  <img src="/img/icon-link.svg" alt="icon" />
                  <a href="#" target="_blank">
                    {website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink to={PATHS.PROFILE.INDEX} end>
                  Thông tin cá nhân
                </NavLink>
                <NavLink to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</NavLink>
                <NavLink to={PATHS.PROFILE.MY_PAYMENT}>
                  Lịch sử thanh toán
                </NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentProfilePage;
