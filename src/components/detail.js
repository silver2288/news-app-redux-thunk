import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  thunk_getDetail,
  thunk_getDetail_favorite
} from "../actions/fetchNewsDetailAction";

class Detail extends React.Component {
  state = {
    id: null,
    title: "",
    description: "",
    favorite: false,
    content: ""
  };

  componentDidMount() {
    this.props.dispatch(thunk_getDetail(this.props.categoryid, this.props.id));
  }

  handleClick(isFavorite) {
    this.props.dispatch(thunk_getDetail_favorite(!isFavorite));
  }

  render() {
    return (
      <div>
        <div className="title">
          <p>{this.props.data.detail.detailData.title}</p>
          <p>{this.props.data.detail.detailData.favorite}</p>
          <span
            onClick={() =>
              this.handleClick(this.props.data.detail.detailData.favorite)
            }
          >
            {" "}
            {this.props.data.detail.detailData.favorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "red" }} />
            )}
          </span>
        </div>
        <p>{this.props.data.detail.detailData.description}</p>
        <p>{this.props.data.detail.detailData.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Detail);
