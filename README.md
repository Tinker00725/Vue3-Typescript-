# 1.api发送 = request封装 + TS参数接口

# 2.组件 = TS参数接口

# 3.通过与组件中ref同名的方式获取到了this.$refs.formRef

# 4.blob是一个二进制容器，用于包裹二进制数据
blob是一个定长的数组，不能改变长度，拥有size,type属性
let blob = new Bolb([str],{type:'text/plain'}),[]传入数据就会以二进制的方式进行存放
    URL.createObjectURL（blob）可以将二进制文件转化为本地资源地址
    配合上a标签的download特性可以实现下载功能，href定位的是资源地址(需要满足同源策略)
