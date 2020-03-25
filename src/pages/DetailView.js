import React from "react";
import Detail from "../components/detail";
import DetailHeader from "../components/detailHeader";
import Page from "./Page";
import "../App.css";

export default class DetailView extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <Page color="#cc99ff" background="#280051">
        <div className="detail-container">
          <DetailHeader
            goBack={() => {
              this.props.history.goBack();
            }}
          />
          <Detail
            categoryid={params.categoryid}
            id={params.id}
            color={params.color}
          />
        </div>
      </Page>
    );
  }
}
