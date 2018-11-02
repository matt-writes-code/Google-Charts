// https://github.com/javascript-playground/remote-data-react-screencasts/blob/master/src/Github.js
import React, { Component } from "react";

// const urlForUsername = username => `https://api.github.com/users/mayojich`;

const news = items =>
  `
https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=7aeb97081f4140d6a65697a01b4c8d95
`;

const newspoints = {
  color: "grey",
  textDecoration: "none"
};

class NewsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(news(this.props))
      .then(d => d.json())
      .then(d => {
        this.setState({
          data: d
        });
      });
  }

  render() {
    if (!this.state.data) return <p>Loading News...</p>;
    return (
      <div style={{ width: "100%", height: "auto" }}>
        <h3>Google News</h3>
        <ul
          style={{
            fontFamily: "sans-serif",
            textAlign: "left",
            lineHeight: "150%",
            fontSize: "0.8em"
          }}
        >
          <li>
            <a
              href={this.state.data.articles[0].url}
              target="_blank"
              style={newspoints}
            >
              {this.state.data.articles[0].title}
            </a>
          </li>
          <li>
            <a
              href={this.state.data.articles[1].url}
              target="_blank"
              style={newspoints}
            >
              {this.state.data.articles[1].title}
            </a>
          </li>
          <li>
            <a
              href={this.state.data.articles[2].url}
              target="_blank"
              style={newspoints}
            >
              {this.state.data.articles[2].title}
            </a>
          </li>
          <li>
            <a
              href={this.state.data.articles[3].url}
              target="_blank"
              style={newspoints}
            >
              {this.state.data.articles[3].title}
            </a>
          </li>
          <li>
            <a
              href={this.state.data.articles[4].url}
              target="_blank"
              style={newspoints}
            >
              {this.state.data.articles[4].title}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NewsAPI;
