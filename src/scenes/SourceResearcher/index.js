import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {
  TextField
} from 'redux-form-material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles.css'


let SourceResearcher = () => (
  <MuiThemeProvider>
    <div className='sr-container'>
      <div className='sr-content'>
        <Field name='user' floatingLabelText='User Address' component={TextField} fullWidth />
        <Field name='dataId' floatingLabelText='Data ID' component={TextField} fullWidth />
        <Field name='price' floatingLabelText='Price' component={TextField} fullWidth />
        <Field name='metadata' floatingLabelText='Metadata' component={TextField} fullWidth />
        <Field name='dataValue' floatingLabelText='Data Value' component={TextField} fullWidth />
      </div>
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