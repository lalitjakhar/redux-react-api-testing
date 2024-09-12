import { fetchImageList } from "../Redux/Img/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
const Imggallery = (props) => {
  useEffect(() => {
    props.fetchimages();
  }, []);
  return props.imglist.loading ? (
    <h2>Loading</h2>
  ) : props.imglist.error ? (
    <h2>{props.imglist.error}</h2>
  ) : (
    <div>
      <h2>Image List (using React & Redux by dummy API)</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {props.imglist &&
          props.imglist.data &&
          props.imglist.data.map((item) => (
            <div style={{ width: "300px", height: "auto" }}>
              <h1>{item.title}</h1>

              <img
                src={item.url}
                alt={item.title}
                width="200px"
                height="200px"
              ></img>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStatetoprops = (state) => {
  return {
    imglist: state.imglist,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    fetchimages: () => dispatch(fetchImageList()),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Imggallery);
