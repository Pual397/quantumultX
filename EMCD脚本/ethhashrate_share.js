
/**
 * EMCD矿池算力检查脚本
 * 可自行添加多个矿机，脚本默认两个
 */

const url = `https://api.emcd.io/v1/eth/workers/********`;//替换成EMCD的API
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
    if(obj.details[0].user == 账号名){//账号名 替换成你自己的账号名
        let hashrate0 = parseInt(obj.total_hashrate.hashrate/1000000)//当前总算力
        let hashrate1h0 = parseInt(obj.total_hashrate.hashrate1h/1000000)//当前1h总算力
        let hashrate24h0 = parseInt(obj.total_hashrate.hashrate24h/1000000)//当前24h总算力
        
        let name0 = obj.details[0].worker //矿机0名称
        /*let active0 = obj.details[0].active*/
        if(obj.details[0].active==1){var active0 ='工作中'}else{var active0 ='已下线'}
        let hashrate1 = parseInt(obj.details[0].hashrate/1000000)//矿机0 算力
        let hashrate1h1 = parseInt(obj.details[0].hashrate1h/1000000)//矿机0 1h算力
        let hashrate24h1 = parseInt(obj.details[0].hashrate24h/1000000)//矿机0 24h算力
        
        let name1 =obj.details[1].worker//矿机1名称
        /*let active1 = obj.details[1].active*/
        if(obj.details[1].active==1){var active1='工作中'}else{var active1='已下线'}//let不行
        let hashrate2 = parseInt(obj.details[1].hashrate/1000000)//矿机1 算力
        let hashrate1h2 = parseInt(obj.details[1].hashrate1h/1000000)//矿机1 1h算力
        let hashrate24h2 = parseInt(obj.details[1].hashrate24h/1000000)//矿机1 24h算力
        console.log("EMCD矿池—算力检查Success: \n" + "当前总算力" + hashrate0);
    /*    var continuousdays = obj.data[1].continued;
        var sumdays = obj.data[1].sum;
    */
   var notifyInfo = '‍总'+ hashrate0 +'，1h总'+hashrate1h0+'，24h总'+hashrate24h0 +'\n' + name0+ active0 +'\n当前 '+ hashrate1 +'，1h '+ hashrate1h1 +'，24h ' + hashrate24h1 + '\n'+name1 + active1 + '\n当前 ' + hashrate2 + '，1h ' + hashrate1h2 + '，24h ' + hashrate24h2
   $notify("👷算力检查MH/s",'',notifyInfo)
/*        $notify("EMCD矿池",'','‍👷总算力'+ hashrate0 +'，1h总算力'+hashrate1h0+'，24h总算力'+hashrate24h0,name0+'状态'+ active0 +'当前算力'+ hashrate1 +'1h算力'+ hashrate1h1 +'24h算力' + hashrate24h1,name1 +'状态' + active1 + '当前算力' + hashrate2 + '1h算力' + hashrate1h2 + '24h算力' + hashrate24h2);
*/
    }   else {
            console.log("EMCD矿池-算力检查Fail: \n" + "请查找原因!");
            $notify("👷算力检查MH/s","查询失败");
}});
