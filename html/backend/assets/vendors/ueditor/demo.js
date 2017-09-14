var app = require('app');
require('ueditor/ueditor.config');
require('ueditor/ueditor.all');
require('ueditor/lang/zh-cn/zh-cn');

var ueditorController = avalon.define('ueditorController', function(vm){

  vm.getContent = function() {
    console.log(UE.getEditor('container1').getContent());
    console.log(UE.getEditor('container2').getContent());
  }

  vm.setContent = function() {
    UE.getEditor('container1').setContent('<p><em><strong>dfsafsdaf<img src="http://dmc-oss.yoozi.cn/images/cdb0657f4ab4078e064d4f30d572634c.png" title="2.png" alt="2.png"/></strong></em></p>');
  }


});

$(document).ready(function(){

  avalon.scan();
  //ueditorController.begin();

  UE.getEditor('container1', {
      // 设置编辑器静态文件资源所在根目录
      UEDITOR_HOME_URL: '/static/modules/ueditor/',
      // 设置编辑器上传配置和上传 API
      serverUrl: app.apiHost + 'editor',
      sourceEditor: 'textarea',
      initialFrameWidth: 600,
      initialFrameHeight: 200,
      //关闭自动长高
      autoHeightEnabled: false,
      //关闭工具栏浮动
      autoFloatEnabled: false
    });

  UE.getEditor('container2', {
      // 设置编辑器静态文件资源所在根目录
      UEDITOR_HOME_URL: '/static/modules/ueditor/',
      // 设置编辑器上传配置和上传 API
      serverUrl: app.apiHost + 'editor',
      sourceEditor: 'textarea',
      initialFrameWidth: 600,
      initialFrameHeight: 200,
      //关闭自动长高
      autoHeightEnabled: false,
      //关闭工具栏浮动
      autoFloatEnabled: false
    });

});
