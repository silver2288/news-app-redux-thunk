import React from "react";
import getDetail from "../entities/Detail";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Detail extends React.Component {
  state = {
    id: null,
    title: "",
    description: "",
    favorite: false,
    content: ""
  };

  componentDidMount() {
    getDetail(this.props.categoryid, this.props.id).then(res => {
      const detail = res.data;
      this.setState({
        id: detail.id,
        title: detail.title,
        description: detail.description,
        favorite: detail.favorite,
        content: detail.content
      });
    });
  }

  handleClick(isFavorite) {
    alert("paco");
    console.log("isFavorite ", isFavorite);
  }

  render() {
    return (
      <div>
        <div className="title">
          <p>{this.state.title}</p>
          <span onClick={() => this.handleClick(this.state.favorite)}>
            {" "}
            {this.state.favorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "red" }} />
            )}
          </span>
        </div>
        <p>{this.state.description}</p>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
