class DataFetcher extends Componentdata {
    state = {
      data: [],
    };
  
    componentDidMount() {
      fetch("http://localhost:3000/employee")
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }
  
    render() {
      return (
        <div>
          <h2>Data from API</h2>
          <ul>
            {this.state.data.slice(0, 10).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  export default DataFetcher;