/* eslint-disable array-callback-return */
/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
// import db from "../firebase";
import React, { useEffect, useState } from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div className="home">
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Trending />
      <Originals />
    </div>
  );
}

export default Home;
