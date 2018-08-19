import React from 'react'
import { connect } from 'react-redux'
import {sub_menu} from "../constants/menu"
import {isEmpty, get, find} from "lodash"

class StreamContainer extends React.Component {
  state = {
    boardId:''
  }
  async componentDidMount () {
    {this.props.routeParams.id}
  }

  componentWillUnmount () {

  }

  render () {
    const boardSubMenu = find(sub_menu, {'parent_id':parseInt(this.props.routeParams.id)});
    const subMenu_children =  get(boardSubMenu, 'menu_children', [])

    console.log('***',subMenu_children)
    return  <div>
        {
          !isEmpty(subMenu_children) &&  subMenu_children.map((subMenu, index) => {
            return <div key={index}>
              {subMenu.name}

            </div>
          })
        }
      </div>

  }
}


function mapStateToProps (state) {
  return {


  }
}
function mapDispatchToProps (dispatch) {
  return {

  }
}
export { StreamContainer }
export default connect(mapStateToProps, mapDispatchToProps)(StreamContainer)
