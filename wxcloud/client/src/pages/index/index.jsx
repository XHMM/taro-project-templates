import Taro, { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './<%= pageName %>.<%= cssExt %>'

import Login from '../../components/login/index'

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
