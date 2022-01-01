/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./Header.css";
import Logo from "../assests/images/logo.svg";
import Home from "../assests/images/home-icon.svg";
import Search from "../assests/images/search-icon.svg";
import Watch from "../assests/images/watchlist-icon.svg";
import Original from "../assests/images/original-icon.svg";
import Movies from "../assests/images/movie-icon.svg";
import Series from "../assests/images/series-icon.svg";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignoutState,
} from "../features/user/userSlice";
import { useHistory } from "react-router-dom";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, []);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;

        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signOut = () => {
    auth.signOut().then((res) => {
      dispatch(setSignoutState());
    });
    history.push("/");
  };

  return (
    <div className="header">
      <img className="logo" src={Logo} />
      {!userName ? (
        <>
          <div className="loginbtn_container"></div>
          <div onClick={handleAuth} className="loginbutton">
            login
          </div>
        </>
      ) : (
        <>
          <div className="menu">
            <a>
              <img src={Home} />
              <span className="menu_title">HOME</span>
            </a>
            <a>
              <img src={Search} />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={Watch} />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={Original} />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={Movies} />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={Series} />
              <span>SERIES</span>
            </a>
          </div>
          <input placeholder="Search" className="input_tag" />
          <img onClick={signOut} className="user_img" src={userPhoto} />
        </>
      )}
    </div>
  );
}

export default Header;
