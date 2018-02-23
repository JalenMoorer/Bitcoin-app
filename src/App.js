import React, { Component } from 'react';
import axios from 'axios';
import Search from './Components/Search';
import Address from './Components/Address';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      loading: false,
      currentAddr: null,
      balance: null
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLoading = this.onLoading.bind(this);
    this.getBalanceData = this.getBalanceData.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loading: true });
    this.getBalanceData();
  }

  async getBalanceData() {
    try {
      const getBalance= axios(`https://blockchain.info/balance?active=${this.state.search}&cors=true`);

      const [balance] = await Promise.all([getBalance]);
      this.setState({ balance: balance.data[this.state.search], currentAddr: this.state.search, loading: false});

    } catch (e) {
      console.error(e);
      alert('User could not be found');
      this.setState({ loading: false});
    }
  }

  onLoading(){
    if(this.state.loading) {
      return <div className="alert alert-primary">Loading data... </div>
    }
    else {
      return (
        <div className="container">
          <Search
            search={this.state.search}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            />
          <div className="row">
            <div className="col-5 col-offset-5">
              <Address
                address={this.state.currentAddr}
                balance={this.state.balance}
                />
            </div>

          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.onLoading()}
      </div>
    );
  }
}

export default App;
