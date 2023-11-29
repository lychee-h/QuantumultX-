/*************************************
项目名称：联合早报
脚本作者：Henry
**************************************

[rewrite_local]
^https:\/\/ads\.zaobao\.com\/advertapi\/advert\/queryAdvertisementByCondition\?([^&]*&)*adSize=320x100(&[^&]*)*$ url reject
^https:\/\/nsdd\.zaobao\.com\/appapi\/feed\/home\/zb\?[^?]*$ url script-response-body https://raw.githubusercontent.com/lychee-h/QuantumultX-backup/main/scripts/zaobao.js

[mitm] 
hostname = zaobao.com

*************************************/

var Q = JSON.parse($response.body);

// 去掉banner
if (Q.data && Q.data.length > 0) {
    Q.data.splice(0, 1);
}
$done({body : JSON.stringify(Q)});