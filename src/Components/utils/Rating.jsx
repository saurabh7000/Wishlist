import React from "react";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Rating = (rating) => {
  return (
    <>
      {" "}
      {rating > 60 ? (
        <MoodIcon
          sx={{
            backgroundColor: "#ffdf22",
            fontSize: "1.6rem",
            borderRadius: "1rem",
            margin: "0.2rem",
          }}
        />
      ) : rating <= 60 && rating > 30 ? (
        <SentimentSatisfiedAltIcon
          sx={{
            backgroundColor: "#c97104",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            margin: "0.2rem",
          }}
        />
      ) : (
        <SentimentVeryDissatisfiedIcon
          sx={{
            backgroundColor: "#8ba305",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            margin: "0.2rem",
          }}
        />
      )}
    </>
  );
};

export default Rating;
