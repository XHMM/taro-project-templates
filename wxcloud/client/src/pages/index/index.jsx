import Taro, { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.<%= cssExt %>'

import Login from '../../components/login'

interface Props {}
const <%= _.capitalize(pageName) %>: FC<Props> = ({}) => {
  return (
    <View>
      <Login />
    </View>
  )
};

<%= _.capitalize(pageName) %>.config = {
  navigationBarTitleText: '<%= pageName %>'
}

export default <%= _.capitalize(pageName) %>;
