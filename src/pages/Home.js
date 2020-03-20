import React from "react";
import Header from "../components/header";
import Categories from "../components/categories";
import News from "../components/news";
import getCategories from "../entities/Categories";
import getNews from "../entities/News";
import "../App.css";
let state;
const arr = [];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    if (!state) {
      this.state = {
        categories: [],
        filteredNews: [],
        checked: []
      };
    } else {
      this.state = state;
    }
  }

  componentDidMount() {
    console.log(this.state.checked);
    getCategories().then(res => {
      this.setState({ categories: res.data });
    });
  }

  componentWillUnmount() {
    state = this.state;
  }

  handleFilter = (id, isChecked, color) => {
    if (isChecked) {
      arr.push(id);
      getNews(id).then(res => {
        res.data.forEach(element => {
          element.color = color;
        });
        let news = res.data;
        this.setState(previousState => ({
          filteredNews: [...previousState.filteredNews, ...news],
          checked: arr
        }));
      });
    } else {
      var checkedNews = this.state.filteredNews.filter(val => {
        return val.categoryId !== parseInt(id);
      });
      this.setState({ filteredNews: checkedNews });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <section>
          <div className="regionLeft">
            <Categories
              categories={this.state.categories}
              filterNews={this.handleFilter}
              checked={this.state.checked}
            />
          </div>
          <div className="regionRight">
            <News news={this.state.filteredNews} />
          </div>
        </section>
      </div>
    );
  }
}
