import React from 'react'
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  TextField
} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles.css'


let searchResults = [
  {
    id: 'testId',
    price: 40,
    description: 'This is a test'
  },
  {
    id: 'testId2',
    price: 50,
    description: 'This is a test 2'
  }
]


let onSubmit = (history) => (
  (values) => {
    // console.log('[DEBUG] values', values)
    let url = "https://jsonplaceholder.typicode.com/posts" // TODO: Put localhost link to Ethereum blockchain

    axios.post(url, values)
    .then((res) => {
      console.log('[DEBUG] res', res)
      history.push('/')
    })
    .catch((err) => {
      console.log('[DEBUG] err', err)
    })
  }
)

let SourceResearcher = ({handleSubmit, history}) => {

 var searchResultRows = searchResults.map((searchResult, i) => (


            <tr key={i}>
              <td>{searchResult.id}</td>
              <td>{searchResult.price}</td>
              <td>{searchResult.description}</td>
            </tr>
  ))



  return (
    <MuiThemeProvider>
      <div className='buy-container'>
        <form className='buy-form' onSubmit={handleSubmit(onSubmit(history))}>
          <Field name='search' floatingLabelText='Search Data' component={TextField} fullWidth />
          <RaisedButton label="Search" type="submit" primary={true} fullWidth className='buy-submit-btn'/>
        </form>

        <table className='buy-table'>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
          <tbody>
            {searchResultRows}
          </tbody>
        </table>


      </div>
    </MuiThemeProvider>
  )

}

// Decorate with redux-form
var ReduxFormHOC = reduxForm({
  form: 'sourceResearcherPage'
})(SourceResearcher)


export default connect()(withRouter(ReduxFormHOC))
// export default SourceResearcher
