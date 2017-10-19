import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from './actions'

const mapStateToProps = state => ({
    agentList: state.agentList
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)  
})

export default (app) =>{
    return connect(mapStateToProps,  mapDispatchToProps)(app)
}
