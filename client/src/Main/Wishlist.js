import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);

  const fetchWatchlistData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");
      setWatchlist(response.data);
      console.log("watchlist", watchlist);
    } catch (error) {
      console.error("Error fetching watchlist data:", error);
    }
  };

  useEffect(() => {
    fetchWatchlistData();
  }, []);

  return (
    <div style={{ height: "100vh", color: "white" }}>
      <Flex flexDirection="row" flexFlow="row wrap" gap="2rem" padding="6rem 2rem">
        {watchlist.map((Item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(
                `/player/${Item.Title.split(" ").join("_")}/${
                  Item.MainCategory
                }/${Item.Plateform}/${Item.FileID}/1/${Item.Image.split(
                  "/"
                ).join("---")}`,
                {
                  state: {
                    itemDetails: Item,
                  },
                }
              );
            }}
            style={{borderRadius: '.8rem', overflow: "hidden"}}
          >
            {/* {Item.Title} */}
            <img
              style={{ height: "14rem", width: "20rem", color: "white" }}
              src={Item.Image}
              alt=""
            />
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default Wishlist;
