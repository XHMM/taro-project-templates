import * as cloud from "wx-server-sdk";

cloud.init();

export async function main() {
  const wxContext = cloud.getWXContext();

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID
  };
}
