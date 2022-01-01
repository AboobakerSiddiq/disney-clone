/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import play from "../assests/images/play-icon-black.png";
import trailer from "../assests/images/play-icon-white.png";
import group from "../assests/images/group-icon.png";
import { useParams } from "react-router-dom";
import db from "../firebase";

function DetailPage(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="detail">
      <div className="background_banner">
        <img className="bg_img" src={detailData.backgroundImg} />
      </div>
      <div className="img_title">
        <img src={detailData.titleImg} />
      </div>
      <div className="control_button">
        <div className="playbutton">
          <img src={play} alt="" />
          <span>PLAY</span>
        </div>
        <div className="trailorbutton">
          <img src={trailer} alt="" />
          <span>Trailer</span>
        </div>
        <div className="Addbutton">
          <span>+</span>
        </div>
        <div className="groupbutton">
          <img src={group} />
        </div>
      </div>
      <div className="subtitle">{detailData.subTitle}</div>
      <div className="description">{detailData.description}</div>
    </div>
  );
}

export default DetailPage;
