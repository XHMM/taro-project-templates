import Taro, { FC } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

interface Props {}
const Index: FC<Props> = ({}) => {
  const [data, setData] = useState('');

  const getLogin = () => {
    Taro.cloud
    .callFunction({
      name: "login",
      data: {}
    })
    .then(res => {
      setData(JSON.stringify(res.result))

    });
  };

  return (
    <View className="index">
      <Button onClick={getLogin}>获取登录云函数</Button>
      <Text>context：{data}</Text>
    </View>
  );
};

export default Index;
