import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultTable";
import API from "../utils/API";

class SearchResults extends Component {
  //initiate the state
  state = {
    employees: [],
    search: "",
    results: [],
    sortRule: ""
  };

  componentDidMount() {
    this.searchGiphy();
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => {
        this.setState({ employees: res.data.results })
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  };

  //Finding specific employees
  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
    if (event.target.value === "" || event.target.value === undefined){
      this.setState({ results: this.state.employees });
    } else if (event.target.value.indexOf(" ") < 0){
      this.setState({ results: this.state.employees.filter(employee => {
        return ((employee.name.first.toLowerCase().startsWith(event.target.value.toLowerCase())) || (employee.name.last.toLowerCase().startsWith(event.target.value.toLowerCase())))
      })
    });
    } else {
      this.setState({ results: this.state.employees.filter(employee => {
        return ((employee.name.first + " " + employee.name.last).toLowerCase().startsWith(event.target.value.toLowerCase()));
      })})
    }
  };


  handleFormSubmit = event => {
    event.preventDefault();
  }

  //This is going to sort employees by last name
  handleButtonPush = () => {
    const sortEmployees = this.state.results.sort((a, b) => {
        if (b.name.last > a.name.last) {
            return -1
        }
        if (a.name.last > b.name.last) {
            return 1
        }
        return 0;
    });
    if (this.state.order === "DESC") {
        sortEmployees.reverse();
        this.setState({ order: "ASC" });
    } else {
        this.setState({ order: "DESC" });
    }
    this.setState({ results: sortEmployees })
}

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Employee Directory</h1>
          <h2>Use the search bar to find an Employee</h2>
        </div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div className="EmployeeResultTable">
        <ResultList
          results={this.state.results}
          handleButtonPush={this.handleButtonPush}
        />
        </div>
      </div>
    );
  }
}

export default SearchResults;