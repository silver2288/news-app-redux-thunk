import React from "react";

export default class Categories extends React.Component {
  handleClick = (id, isChecked, color) => {
    this.props.filterNews(id, isChecked, color);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.categories.map((cat, index) => (
          <div key={index}>
            <input
              onClick={ev => {
                let id = ev.currentTarget.getAttribute("id");
                let isChecked = ev.currentTarget.checked;
                let color = ev.currentTarget.getAttribute("data-color");
                this.handleClick(id, isChecked, color);
              }}
              type="checkbox"
              id={cat.id}
              name={cat.title}
              value={cat.title}
              data-color={cat.color}
              defaultChecked={this.props.checked.includes(cat.id.toString())}
            />
            <label htmlFor={cat.title}> {cat.title}</label>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
