// create your App component here
import React from 'react'

class App extends React.Component {
    
    state = {
        spacePeople: [],
    }

    render() {
        return <div>
            {this.state.spacePeople.map((person, id) => <h1 key={id} > {person.name}</h1>)}
            </div>
      }
    
      componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              spacePeople: data.people,
            });
          });
      }
    }
export default App