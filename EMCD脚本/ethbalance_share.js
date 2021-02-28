
/**
 * EMCD矿池账号余额查询脚本
 * 点击通知可以查询当前余额可兑换CNY
 * 仅供圈X使用
 */


const url = `https://api.emcd.io/v1/info/********`;//********替换成EMCD的API
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Host' : `api.emcd.io`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    var obj = JSON.parse(response.body);
    if(obj.username == 账号名){//账号名 替换成你自己的账号名
        console.log("EMCD矿池查询Success: \n" + "ETH余额" + obj.eth.balance);
    /*    var continuousdays = obj.data[1].continued;
        var sumdays = obj.data[1].sum;
    */
   var CNY = "https://zt.coinmill.com/CNY_ETH.html#ETH=" + obj.eth.balance

        $notify("EMCD矿池",'查询成功',"ETH余额" + obj.eth.balance, {"open-url" : CNY});
    }   else {
            console.log("EMCD矿池查询Fail: \n" + "请查找原因!");
            $notify("EMCD矿池","查询失败");
}});
