var APP = {};
var WS = null;
var PATH = '${S_URL}';

// 发送参数
APP.wsData = {
  type: '1',    // 1：业务一 2：业务二
  reqType: '1', // 1：类型一 2：类型二
  payload: '{"isSend": "1"}'
};

// 发送数据
APP.send = function (type, reqType) {
  APP.wsData = {
    type : type,
    reqType : reqType
  };

  WS.send(JSON.stringify(APP.wsData));
};

// 接收数据
APP.msg = function (data) {
  switch (data.type) {
    case 1:
      model01.set(data.message);// 绑定模型数据（backbone），以便DOM自动更新
      break;
    case 2:
      model02.set(data.message);// 绑定模型数据（backbone），以便DOM自动更新
      break;
  }
};

/*------------------------ WebSocket ------------------------*/

if ('WebSocket' in window) {
  WS = new ReconnectingWebSocket("ws://" + document.location.host + PATH + "/websocket");
  WS.debug = true;
  WS.timeoutInterval = 5400;
}

// 连接成功建立的回调方法
WS.onopen = function (data) {
  APP.send('1', '1'); // 发送请求
  APP.send('2', '1'); // 发送请求
};

// 接收到消息的回调方法
WS.onmessage = function (ev) {
  var data = eval("(" + ev.data + ")");
  APP.msg(data);
};

// 连接发生错误的回调方法
WS.onerror = function (error) {
  console.log("websocket.onerror:", error);
};

// 连接关闭的回调方法
WS.onclose = function () {
  console.log("websocket.onclose","连接已断开...");
};

// 关闭窗口时主动关闭websocket防止连接还没断开就关闭窗口（server端会抛异常）
window.onbeforeunload = function() {
  console.log("onbeforeunload");
  WS.close();
};