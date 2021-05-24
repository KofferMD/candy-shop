import React from 'react';
import { Route } from 'react-router';
import axios from 'axios';

import { setCandyes } from './redux/actions/candyes'


import { Header } from './components';
import { Home, Cart } from './pages';
import { connect } from 'react-redux';

// function App() {
//   const [items, setItems] = React.useState([])

// React.useEffect(() => {
//   axios.get('http://localhost:3000/db.json')
//     .then(({ data }) => {
//       setItems(data.items);
//     })
// }, []);

//   return (

//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setCandyes(data.items)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.candyes.item,
  }
}


export default connect(mapStateToProps, { setCandyes })(App);
