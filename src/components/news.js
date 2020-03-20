import React from "react";
import { Link } from "react-router-dom";

export default class News extends React.Component {
  render() {
    return (
      <article>
        {this.props.news.map((el, index) => (
          <div
            key={index}
            newsid={el.id}
            className="post"
            style={{ background: el.color }}
          >
            <h4>{el.title}</h4>
            <p>{el.description}</p>
            <Link to={`detail/${el.categoryId}/${el.id}`}>More Info </Link>
          </div>
        ))}
      </article>
    );
  }
}
