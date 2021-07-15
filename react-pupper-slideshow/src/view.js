import React, { useEffect, useState } from "react";
import { getDogs } from "./dogapi";
import { CommentBox } from "./comment";

export function View() {
  const [imageIndex, dogArray] = useState(0);
  const [dogs, setDogs] = useState([]);

  //this function will save the comments on the page, assign to index in savedComments
  //
  const saveArrayPrev = () => {
    if (imageIndex > 0) {
      dogArray(imageIndex - 1);
    }
  };

  const saveArrayNext = () => {
    if (imageIndex < 99) {
      dogArray(imageIndex + 1);
    }
  };

  useEffect(() => {
    const dogPictures = getDogs();
    console.log("initial", dogPictures);
    dogPictures
      .then((dogs) => {
        setDogs(dogs);

        console.log("title of first image", dogs[0].title);
        console.log(dogs[0].url);
        console.log("return urls", dogs);
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  }, []);

  if (dogs.length > 0) {
    return (
      <div>
        <button onClick={saveArrayPrev} value={imageIndex}>
          Previous
        </button>

        <img src={dogs[imageIndex].url} alt={dogs[imageIndex].title} />
        <button onClick={saveArrayNext} value={imageIndex}>
          Next
        </button>
        <h3>{dogs[imageIndex].title}</h3>

        <div className="comment">
          <CommentBox url={dogs[imageIndex].url} />
        </div>

        {/* displayComment script */}
        <script></script>
      </div>
    );
  } else {
    return <label>loading...</label>;
  }
}
