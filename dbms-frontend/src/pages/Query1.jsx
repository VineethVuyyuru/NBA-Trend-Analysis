import React from 'react'
import Header from './Header'
import APIService from './APIService'

export default class Query1 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            players: []
        }
    }
    
    componentDidMount(){
        APIService.getPlayers().then((data) => {
            this.setState({ players: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }
    render(){
        return(
            <div>
            <h2 className="text-center">Player Details</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Player Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.players.map(player =>
                                <tr key={player.name}>
                                    <td>{player.name}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        )
    }
    
}
