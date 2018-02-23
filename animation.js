'using strict';


function Animation(){

}


/*
添加一个同步任务，去预加载图片
 */
Animation.prototype.loadImage = function(imglist){

};

/*
添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
ele  dom对象
positions 北京位置数组
imageUrl 图片地址
 */
Animation.prototype.changePosition = function(ele,positions,imageUrl){

};


/*
添加一个异步定时任务，通过定是改变image标签的src属性，实现帧动画
ele
imglist
 */
Animation.prototype.changeSrc = function(ele,imglist){

};


/*
高级用法，添加一个异步定时执行的任务，
该任务自定义动画美珍执行的任务
taskFn 自定义每帧执行的任务函数
 */
Animation.prototype.enterFrame = function(taskFn){

};

Animation.prototype.then = function(callback){

};

Animation.prototype.start = function (invterval){

}

Animation.prototype.repeat = function (times){
	
}


Animation.prototype.repeatForever = function (){
	
}

/*设置当前任务执行结束后到下一个任务开始前的等待时间*/
Animation.prototype.wait = function (time){
	
}


/*暂停当前异步定时任务*/
Animation.prototype.repeat = function (times){
	
}

/*
  释放资源
 */
Animation.prototype.repeat = function (times){
	
}