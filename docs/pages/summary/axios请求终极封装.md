cancelRequest: true  // 接口中定义该项则开启取消重复请求功能
retry: 3, // retry 请求重试次数
retryDelay: 1000，// retryDelay 两次重试之间的时间间隔
cache: true, // cache： true 开启当前接口缓存
setExpireTime: 30000，// setExpireTime 当前接口缓存时限