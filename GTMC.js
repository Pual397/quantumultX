#右侧浮动广告
^https:\/\/carapp\.gtmc\.com\.cn\/bff\/app\/advert\/cmsManage\/queryAdvertList url reject-dict
#XX列表
^https:\/\/carapp\.gtmc\.com\.cn\/bff\/app\/servicePage\/service\/getEnjoyList url reject-dict
#保养预约、悦享加油、ETC、故障灯查询
^https:\/\/carapp\.gtmc\.com\.cn\/bff\/app\/servicePage\/service\/getServiceDataByType url reject-dict
#数字展馆
^https:\/\/carapp\.gtmc\.com\.cn\/bff\/app\/servicePage\/service\/getBrandPavilion url reject-dict
#禁用更新检测
^https:\/\/carapp\.gtmc\.com\.cn\/api\/appgtmc\/appVersion\/AppVersionManager\/checkNewAppVersion\.json url reject-dict
#不知道是什么
^https:\/\/carapp\.gtmc\.com\.cn\/\/bff\/app\/servicePage\/service\/queryAgreementData url reject-dict
hostname = carapp.gtmc.com.cn
