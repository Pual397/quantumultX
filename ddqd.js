[rewrite_local]

# ～ Vista看天下锁会员权限（2022-08-31）@ddgksf2013
^https?:\/\/open3\.vistastory\.com\/v\d\/api\/(article\/article_detail|vip\/get_vip|my\/home\/get_home_center) url script-response-body moyu/ktx.js

[mitm]

hostname=open3.vistastory.com
