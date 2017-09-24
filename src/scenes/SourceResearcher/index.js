import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  TextField
} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles.css'


let onSubmit = (values) => {
  // console.log('[DEBUG] values', values)
  let url = "https://jsonplaceholder.typicode.com/posts" // TODO: Put localhost link to Ethereum blockchain

  axios.post(url, values)
  .then((res) => {
    console.log('[DEBUG] res', res)
  })
  .catch((err) => {
    console.log('[DEBUG] err', err)
  })
}

let SourceResearcher = ({handleSubmit}) => (
  <MuiThemeProvider>
    <div className='sr-container'>
      <form className='sr-form' onSubmit={handleSubmit(onSubmit)}>
        <Field name='user' floatingLabelText='User Address' component={TextField} fullWidth />
        <Field name='dataId' floatingLabelText='Data ID' component={TextField} fullWidth />
        <Field name='price' floatingLabelText='Price' component={TextField} fullWidth />
        <Field name='dataValue' floatingLabelText='Data Value' component={TextField} fullWidth />
        <Field name='metadata' floatingLabelText='Metadata' component={TextField} rows={1} multiLine={true} fullWidth />
        <RaisedButton label="Submit" type="submit" primary={true} fullWidth className='sr-submit-btn'/>
      </form>
    </div>
  </MuiThemeProvider>
)

// class SourceResearcher extends React.Component {

//   render

// }


// function mapStateToProps(state) {}


// Decorate with redux-form
var ReduxFormHOC = reduxForm({
  form: 'sourceResearcherPage'
})(SourceResearcher)


export default connect()(ReduxFormHOC)
// export default SourceResearcher