import React from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { thunk_getCategories } from "../actions/fetchCategoriesAction";
import { toogleCategory } from "../actions/";
import Categories from "../components/categories";
import News from "../components/news";
import "../App.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(thunk_getCategories());
  }

  handleFilter = (id, isChecked, color) => {
    this.props.dispatch(toogleCategory(id, isChecked, color));
  };

  render() {
    var news = [];
    this.props.data.categories.selected.map(sel => {
      return (news = news.concat(this.props.data.news[sel].newsData));
    });
    return (
      <div className="container">
        <Header />
        <section>
          <div className="regionLeft">
            <Categories
              categories={this.props.data.categories.catData}
              filterNews={this.handleFilter}
              checked={this.props.data.categories.selected}
            />
          </div>
          <div className="regionRight">
            <News news={news} />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Home);
