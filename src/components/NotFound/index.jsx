import NotFoundImage from "../../assets/not-found.jpg";

import "./index.css";
const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <img src={NotFoundImage} alt="Not Found" className="not-found-img" />
      </div>
    </>
  );
};

export default NotFound;
