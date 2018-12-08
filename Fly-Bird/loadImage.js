/**
 * function loadImage  加载图片
 * param imgUrl :object  图片的地址以键值对的形式存在
 * param fn :function
 */
function loadImage(imgUrl,fn){
	var imgObj={};  //保存图片资源
	var imgLen=0,
		loaded=0,
		tempImg;
	for(var k in imgUrl){
		imgLen++;
		tempImg=new Image();
		tempImg.onload=function(){
			loaded++;  //已经加载的图片的数量
			if(loaded>=imgLen){
				fn(imgObj);
			}
		};
		//图片加载完成之后
		tempImg.src=imgUrl[k];
		imgObj[k]=tempImg;
	}
}
