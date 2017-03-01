
function middle(){  
    //获取屏幕的高度  
    var heightBig=window.innerHeight;  
    //获取元素的高度  
    var d1=document.querySelector(".d1");  
    var heightSmall=parseFloat(window.getComputedStyle(d1).height);  
    d1.style.margin=(heightBig-heightSmall)/2+"px auto";  
}  
middle();  
//监听窗口变化 
window.onresize=middle; 