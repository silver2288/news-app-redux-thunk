import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  thunk_getDetail,
  thunk_getDetail_favorite
} from "../actions/fetchNewsDetailAction";

class Detail extends React.Component {
  componentDidMount() {
    this.props.dispatch(thunk_getDetail(this.props.categoryid, this.props.id));
  }

  handleClick(isFavorite) {
    this.props.dispatch(thunk_getDetail_favorite(!isFavorite));
  }

  render() {
    if (this.props.data.categories.catData.length > 0) {
      const category = this.props.data.categories.catData.find(
        el => el.id.toString() === this.props.categoryid
      );
      this.props.data.detail.color = category.color;
    }
    return (
      <div style={{ background: this.props.data.detail.color }}>
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
