import React from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { thunk_getCategories } from "../actions/fetchCategoriesAction";
import { toogleCategory } from "../actions/";
import Categories from "../components/categories";
import News from "../components/news";
import "../App.css";

let state;

class Home extends React.Component {
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
    this.props.dispatch(thunk_getCategories());
  }

  componentWillUnmount() {
    state = this.state;
  }

  handleFilter = (id, isChecked, color) => {
    this.props.dispatch(toogleCategory(id, isChecked, color));
  };

  render() {
    var news = [];
    this.props.data.categories.selected.map(sel => {
      const seLCat = this.props.data.categories.catData.filter(
        el => el.id.toString() === sel
      );
      this.props.data.news[sel].newsData.map(
        el => (el.color = seLCat[0].color)
      );
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
