import { Heading, Button } from "@chakra-ui/react";
import "../Nabvar/navbar.css";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Single from "./Single";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MainBody({ Cate, value }) {
  const [arda, arrdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    arrdata([]);
    window.scrollTo(0, 0);
    axios
      .get(
        "https://jitenderji1137.github.io/zee5apidata/free-netflix-banners.json"
      )
      .then((res) => {
        arrdata(res.data[value]);
        // console.log(res.data)
      });
  }, [value]);
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Concert One", "Mitr", "Yatra One"],
      },
    });
  }, []);
  if (value === 1) {
    document.title =
      "StreamOn - All Movies - Created BY StreamOn Team as Asmit , Dilpreet , kartik , Pranav";
  }
  if (value === 2) {
    document.title =
      "StreamOn - All Web Series - Created BY StreamOn Team as Asmit , Dilpreet , kartik , Pranav";
  }
  if (value === 3) {
    document.title =
      "StreamOn - All Mature - Created BY StreamOn Team as Asmit , Dilpreet , kartik , Pranav";
  }
  if (value === 0) {
    document.title =
      "StreamOn - Watch Free Movies or WebSeries online or Download || Created BY StreamOn Team as Asmit , Dilpreet , kartik , Pranav";
  }
  return (
    <>
      <div className="banner">
        <img src={arda.Image} className="bg" alt="" />
        <div className="content">
          <Heading
            color="white"
            style={{
              textShadow: "0px 0px 30px rgb(0 0 0)",
              // fontFamily: "Yatra One",
            }}
            fontSize="50px"
          >
            {arda.MovieName}
          </Heading>
          <h4>
            <span>{arda.Year}</span>
            <span>
              <i>{arda.Content}</i>
            </span>
            <span>{arda.Duration}</span>
            <span>{arda.Geans}</span>
          </h4>
          <p style={{ color: "white", textShadow: "0px 0px 30px rgb(0 0 0)" }}>
            {arda.Description}
          </p>
          <div className="buttons">
            <Button
              color="white"
              bg="red"
              onClick={() => {
                navigate(
                  `/player/${arda.MovieName.split(" ").join("_")}/${
                    arda.MainCategory
                  }/${arda.Plateform}/${arda.Link}/1/${arda.Image.split(
                    "/"
                  ).join("---")}`
                );
              }}
            >
              Watch
            </Button>
            <Button
              onClick={() => {
                navigate(
                  `/player/${arda.MovieName.split(" ").join("_")}/${
                    arda.MainCategory
                  }/${arda.Plateform}/${arda.Link}/1/${arda.Image.split(
                    "/"
                  ).join("---")}`
                );
              }}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </div>
      <div className="Mycarts" style={{ position: "relative" }}>
        {Cate.map((Item, index) => {
          return <Single Geans={Item.Geans} Title={Item.Title} key={index} />;
        })}
      </div>
    </>
  );
}
