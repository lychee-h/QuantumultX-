/*

[rewrite_local]
# > 网易云解锁VIP
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header cloudmusiccrack.js

# 播放器会员皮肤
^https:\/\/interface3\.music\.163\.com\/eapi\/playermode\/ url script-request-header cloudmusiccrack.js

# 搜索结果会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header cloudmusiccrack.js

# 播放器会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|type\/detail\/get) url script-request-header cloudmusiccrack.js
^https:\/\/interface3\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header cloudmusiccrack.js

# 侧边栏会员等级
^https:\/\/interface3\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header cloudmusiccrack.js

# 首页歌单会员歌曲
^https?:\/\/interface3\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header cloudmusiccrack.js

# 会员认证
^https?:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header cloudmusiccrack.js

[mitm] 
hostname = *.music.163.com

*/


headers = $request.headers;

headers['Cookie'] = 'MUSIC_U=0037A52C62A9AC289DF8408CE2EC904C9FBE31A34547E6C18E8ED0C17CACBD3B503CF34992FDDFF4E0AF192181E3A5DA3B39EF118D22F77EB0D3507BA3128AB5123E650519358639328652B1006685A7598A8FA18FEA26E0D7C6BB10E3218FCF96A91A29334E63FF99FA29AF71869B17CA0715535908123EBD3233C5CD1448512B7E7950B45681B7115325FCDBCA9C9F834390C24080E96E43CEF273A69D44783CEF5836A67FAEBB88B2092CD4E161982199CDCE0D395D534D11E71B0C89AF2043CF7333E586C402DF2038531D9726CC7CB8C53426B93FB2235C47DDC7B4A699514B7BAF6B8DC07476C4D494CA9A7CA96BFB3CB136EBF2BAC51E5999A52A6011FAE7FE3C7B53FCBBCFDE5C03054C94EDA32A67E3AD4065C4166338783F9249A4DE; NMTID=00OLGN9ChB5-k5ju0caqxPJWaiZCfsAAAGMFJl-xg; caid={"lastIyunId":"fd4eacebee57b783b698c2603b51c306","iyunId":"0f76bf39a75c62eea824cb1503b13cdf","iyunVersion":"20230330","lastIyunVersion":"20220111"}; buildver=4556; sDeviceId=ff3719c3a89517682786da8da7d54e4c; channel=distribution; idfa=00000000-0000-0000-0000-000000000000; packageType=release; appver=8.20.05; deviceId=ff3719c3a89517682786da8da7d54e4c; EVNSM=1.0.0; os=iPhone OS; osver=17.1.1; machineid=iPhone15.2; NMCID=rwtjrv.1696388528000.01.3; appkey=IuRPVVmc3WWul9fT; idfv=EEB2CE97-5DFA-453F-B74C-2362004FDAF9; URS_APPID=CC991CCBB125C8C00556DB7778470902BB0AE479E2801FF0405ECEAACA7BAC4BB6293116B121D6872A9FEA6913295501; NMDI=Q1NKTQcBDAAEkRZcpy01Y146eqiVAAAAKoqUIzmV0%2Bo7O4zkww4NosJKXrbciqqYb112BitMolRntQCCMpXEq5FZrqnTk6aROWOixkxl41YA%2B%2B5yLIXDXPUv5v4m2x%2FGikS%2Bzijkv1N0EXjJmQ0hYnMNh7onEXgtXj1n60ieZZxhtgDbNFTA2fqDjxYXmjTMDwiBzpuLrNo8ofk0%2BgbKsFUpXfkUjK3SxUdEfZs%3D';

headers['User-Agent'] = 'NeteaseMusic 8.20.05/4556 (iPhone; iOS 17.1.1; zh_CN)';

headers['MConfig-Info'] = '{"IuRPVVmc3WWul9fT":{"version":26335232,"appver":"8.20.05"},"zr4bw6pKFDIZScpo":{"version":1150976,"appver":"8.20.05"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"}}';

$done({
    headers
});