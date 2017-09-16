var Ajax = (function(){
	function post(){
		var url = "..."//跨域的地址
		var param;//请求的参数
		var xhr = XMLHttpRequest();
		xhr.open("POST",url,true);//true代表异步，false同步
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.addEventListener('readystatechange',()=>{
			if(xhr.readyState==4&&xhr.status==200){
				var json = JSON.parse(xhr.responseText);
				...//处理数据
			}
		});
		xhr.send(param);//POST把请求放到send里，GET拼接到url上，send为null
	}
	return {post:post}
	
})();

/*使用XMLHttpRequest发送请求时，当浏览器发现违反同源策略，会在加上一个请求头：origin.
在服务器接受请求后设置ResponseHeader，属性为：Access-Control-Allow-Origin，值为请求的地址或者*；

