import React, {PropTypes, Component} from "react";
import {StyleSheet, TouchableOpacity, Image, Text, View, ListView} from "react-native";
import { connect } from 'react-redux'
import PageWrapper from '../../components/PageWrapper'


class NumerologyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imageArray = [
          require('../../../images/numbers/1_number@3x.png'),
          require('../../../images/numbers/2_number@3x.png'),
          require('../../../images/numbers/3_number@3x.png'),
          require('../../../images/numbers/4_number@3x.png'),
          require('../../../images/numbers/5_number@3x.png'),
          require('../../../images/numbers/6_number@3x.png'),
          require('../../../images/numbers/7_number@3x.png'),
          require('../../../images/numbers/8_number@3x.png'),
          require('../../../images/numbers/9_number@3x.png')
        ]
      const {bDay} = this.props

      const numbericImage = imageArray[calculateOwnNumber(bDay)]
        console.log(typeof numbericImage)
        return (
            <PageWrapper>
                <Image source={numbericImage}/>
            </PageWrapper>
        );
    }
}

export default connect( ( {main: {bDay}} ) => ({ bDay }))(NumerologyView)

function calculateOwnNumber( date ){

  var arr = date.split('').slice(0,10)
  var number = arr.reduce(function(summ, el){
      el = +el
      if(isNaN(el)) return summ
      return summ + el
    }, 0
  )
  if(number > 9) {
    return calculateOwnNumber(String(number))
  }
  return number
}
