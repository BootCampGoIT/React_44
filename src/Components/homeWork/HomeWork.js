import axios from "axios";
import React, { Component } from "react";

class HomeWork extends Component {
  state = {
    images: [],
    page: 1,
    searchValue: "",
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      this.state.searchValue !== prevState.searchValue
    ) {
      this.getImages(this.state.query, this.state.page);
    }
  }
  onHandleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({ page: 1 });
  };
  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };
  getImages = (query, page) => {
    axios.get(`https://dfghjkljhg?query=${query}&page=${page}`).then((data) =>
      this.setState((prev) => ({
        images: prev.page === 1 ? data : [...prev.images, ...data],
      }))
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Search
            <input
              type='text'
              value={this.state.searchValue}
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>Search</button>
        </form>
        <ul>
          {this.state.images.map((pic) => (
            <li>
              <img src={pic} alt='fgchvjb' />
            </li>
          ))}
        </ul>
        <button type='text' onClick={this.loadMore}>
          Load more
        </button>
      </>
    );
  }
}

export default HomeWork;
