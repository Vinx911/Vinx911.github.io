
/* Search */
var defaultSearchTab = 0; 
var defaultSearchIndex = 0; 
var numberOfSearchTab = 8; //set number of SearchTab (1-8)
var searchTabName = new Array();
searchTabName[0] = '网页';
searchTabName[1] = '视频';
searchTabName[2] = '音乐';
searchTabName[3] = '图片';
searchTabName[4] = '地图';
searchTabName[5] = '网盘';
searchTabName[6] = '种子';
searchTabName[7] = '购物';

var searchEngine = new Array();
searchEngine[0] = new Array();
searchEngine[1] = new Array();
searchEngine[2] = new Array();
searchEngine[3] = new Array();
searchEngine[4] = new Array();
searchEngine[5] = new Array();
searchEngine[6] = new Array();
searchEngine[7] = new Array();
/*网页*/
searchEngine[0][0] = {
	'title':'百度搜索',
	'thumb':'searchlogo/baidu.png',
	'button':'百度一下',
	'url':'https://www.baidu.com/s',
	'key_param':'wd',
	'others_params':'ie=utf-8&tn=viis'
};
searchEngine[0][1] = {
	'title':'360搜索',
	'thumb':'searchlogo/so.png',
	'button':'搜一下',
	'url':'https://www.so.com/s',
	'key_param':'q',
	'others_params':'ie=utf-8&src=viis'
};
searchEngine[0][2] = {
	'title':'谷歌搜索',
	'thumb':'searchlogo/google.png',
	'button':'谷歌搜索',
	'url':'https://www.google.com/search',
	'key_param':'q',
	'others_params':'ie=utf-8&src=viis'
};
searchEngine[0][3] = {
	'title':'必应搜索',
	'thumb':'searchlogo/bing.png',
	'button':'必应搜索',
	'url':'https://cn.bing.com/search',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis'
};

/*视频*/
searchEngine[1][0] = {
	'title':'SOKU搜库',
	'thumb':'searchlogo/soku.png',
	'button':'搜库',
	'url':'https://www.soku.com/v',
	'key_param':'keyword',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[1][1] = {
	'title':'腾讯视频',
	'thumb':'searchlogo/tencent.png',
	'button':'腾讯视频',
	'url':'https://v.qq.com/x/search/',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[1][2] = {
	'title':'Youtube',
	'thumb':'searchlogo/youtube.png',
	'button':'Youtube',
	'url':'https://www.youtube.com/results',
	'key_param':'search_query',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[1][3] = {
	'title':'360影视',
	'thumb':'searchlogo/360video.png',
	'button':'360影视',
	'url':'https://so.360kan.com/index.php',
	'key_param':'kw',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[1][4] = {
	'title':'乐视',
	'thumb':'searchlogo/leshi.png',
	'button':'乐视',
	'url':'http://so.le.com/s',
	'key_param':'wd',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[1][5] = {
	'title':'哔哩哔哩',
	'thumb':'searchlogo/xunkeikankan.png',
	'button':'哔哩哔哩',
	'url':'https://search.bilibili.com/all',
	'key_param':'keyword',
	'others_params':'ie=utf-8&from=viis'
};

/*音乐*/
/*
searchEngine[2][0] = {
	'title':'网易音乐',
	'thumb':'',
	'button':'网易音乐',
	'url':'https://music.163.com/search/m/',
	'key_param':'s',
	'others_params':'ie=utf-8&from=viis&type=1'
};
searchEngine[2][1] = {
	'title':'酷狗音乐',
	'thumb':'',
	'button':'酷狗音乐',
	'url':'',
	'key_param':'',
	'others_params':'ie=utf-8&from=viis'
};
*/
searchEngine[2][0] = {
	'title':'360音乐',
	'thumb':'searchlogo/360music.png',
	'button':'360音乐',
	'url':'https://s.music.so.com/s',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis&type=1'
};
searchEngine[2][1] = {
	'title':'搜狗音乐',
	'thumb':'searchlogo/sougoumusic.png',
	'button':'搜狗音乐',
	'url':'https://mp3.sogou.com/music',
	'key_param':'query',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[2][2] = {
	'title':'酷我音乐',
	'thumb':'searchlogo/kuwo.png',
	'button':'酷我音乐',
	'url':'https://sou.kuwo.cn/ws/NSearch',
	'key_param':'key',
	'others_params':'ie=utf-8&from=viis&type=all&catalog=yueku2017'
};
searchEngine[2][3] = {
	'title':'百度音乐',
	'thumb':'searchlogo/baidumusic.png',
	'button':'百度音乐',
	'url':'https://music.baidu.com/search',
	'key_param':'key',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[2][4] = {
	'title':'QQ音乐',
	'thumb':'searchlogo/qqmusic.png',
	'button':'QQ音乐',
	'url':'https://y.qq.com/portal/search.html',
	'key_param':'w',
	'others_params':'ie=utf-8&from=viis&searchid=1&remoteplace=txt.yqq.top'
};
searchEngine[2][5] = {
	'title':'5Sing',
	'thumb':'searchlogo/5sing.png',
	'button':'5Sing',
	'url':'http://search.5sing.kugou.com/',
	'key_param':'keyword',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[2][6] = {
	'title':'虾米音乐',
	'thumb':'searchlogo/xiami.png',
	'button':'虾米音乐',
	'url':'https://www.xiami.com/search',
	'key_param':'key',
	'others_params':'ie=utf-8&from=viis&pos=1'
};
searchEngine[2][7] = {
	'title':'音悦台',
	'thumb':'searchlogo/yinyuetai.png',
	'button':'音悦台',
	'url':'https://so.yinyuetai.com/mv',
	'key_param':'keyword',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[2][8] = {
	'title':'Echo回声',
	'thumb':'searchlogo/echo.png',
	'button':'Echo回声',
	'url':'https://www.app-echo.com/search/sound',
	'key_param':'keyword',
	'others_params':'ie=utf-8&from=viis'
};

/*图片*/
searchEngine[3][0] = {
	'title':'百度图片',
	'thumb':'searchlogo/baiduimage.png',
	'button':'百度图片',
	'url':'https://image.baidu.com/search/index',
	'key_param':'word',
	'others_params':'ie=utf-8&from=viis&tn=baiduimage'
};
searchEngine[3][1] = {
	'title':'360图片',
	'thumb':'searchlogo/360image.png',
	'button':'360图片',
	'url':'https://image.so.com/i',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[3][2] = {
	'title':'必应图片',
	'thumb':'searchlogo/bing.png',
	'button':'必应图片',
	'url':'https://cn.bing.com/images/search',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[3][3] = {
	'title':'谷歌图片',
	'thumb':'searchlogo/google.png',
	'button':'谷歌图片',
	'url':'https://images.google.com/images',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis&hl=zh-CN'
};

/*地图*/
searchEngine[4][0] = {
	'title':'百度地图',
	'thumb':'searchlogo/baidumap.png',
	'button':'百度地图',
	'url':'https://map.baidu.com/m',
	'key_param':'word',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[4][1] = {
	'title':'360地图',
	'thumb':'searchlogo/360map.png',
	'button':'360地图',
	'url':'https://ditu.so.com/',
	'key_param':'k',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[4][2] = {
	'title':'高德地图',
	'thumb':'searchlogo/amap.png',
	'button':'高德地图',
	'url':'https://www.amap.com',
	'key_param':'k',
	'others_params':'ie=utf-8&from=viis&t=map'
};
searchEngine[4][3] = {
	'title':'谷歌地图',
	'thumb':'searchlogo/google.png',
	'button':'谷歌地图',
	'url':'https://ditu.google.cn/maps',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis&hl=zh-CN'
};

/*网盘*/
searchEngine[5][0] = {
	'title':'搜百度盘',
	'thumb':'searchlogo/sobaidupan.png',
	'button':'网盘搜索',
	'url':'https://www.sobaidupan.com/search.asp',
	'key_param':'wd',
	'others_params':'ie=utf-8&so_md5key=c6b3187cf4f9480e4570f9718704d4b9'
};
searchEngine[5][1] = {
	'title':'盘搜搜',
	'thumb':'searchlogo/pansoso.png',
	'button':'搜搜一下',
	'url':'https://www.pansoso.com/',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[5][2] = {
	'title':'搜啦',
	'thumb':'searchlogo/bdsola.png',
	'button':'搜啦一下',
	'url':'https://www.bdsola.com/search.php',
	'key_param':'kw',
	'others_params':'ie=utf-8&from=viis&searchType=ALL'
};
searchEngine[5][3] = {
	'title':'特百度',
	'thumb':'searchlogo/tebaidu.png',
	'button':'特百度',
	'url':'https://www.tebaidu.com/search.asp',
	'key_param':'wd',
	'others_params':'ie=utf-8&from=viis'
};

/*种子*/
searchEngine[6][0] = {
	'title':'BT蚂蚁',
	'thumb':'searchlogo/btants.png',
	'button':'BT搜索',
	'url':'https://www.btany.com/q',
	'key_param':'kw',
	'others_params':'ie=utf-8&from=viis'
};

/*购物*/
searchEngine[7][0] = {
	'title':'淘宝',
	'thumb':'searchlogo/taobao.png',
	'button':'淘宝',
	'url':'https://s.taobao.com/search',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis&search_type=auction&commend=all'
};
searchEngine[7][1] = {
	'title':'天猫',
	'thumb':'searchlogo/tmall.png',
	'button':'天猫',
	'url':'https://list.tmall.com/search_product.htm',
	'key_param':'q',
	'others_params':'ie=utf-8&from=viis&type=p'
};
searchEngine[7][2] = {
	'title':'京东',
	'thumb':'searchlogo/jd.png',
	'button':'京东',
	'url':'https://search.jd.com/Search',
	'key_param':'keyword',
	'others_params':'enc=utf-8&from=viis'
};
searchEngine[7][3] = {
	'title':'当当',
	'thumb':'searchlogo/dangdang.png',
	'button':'当当',
	'url':'https://search.dangdang.com/',
	'key_param':'key',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[7][4] = {
	'title':'亚马逊',
	'thumb':'searchlogo/amazon.png',
	'button':'亚马逊',
	'url':'https://www.amazon.cn/s/ref=nb_sb_noss',
	'key_param':'field-keywords',
	'others_params':'ie=utf-8&from=viis'
};
searchEngine[7][5] = {
	'title':'国美在线',
	'thumb':'searchlogo/gome.png',
	'button':'国美在线',
	'url':'https://search.gome.com.cn/search',
	'key_param':'question',
	'others_params':'searchType=goods&search_mode=normal'
};

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
/* Top tab */
var showHome = true;
var showMore = false;
var tabName = new Array(); // set names of blocks
tabName[0] = '常用网址';
tabName[1] = '编程开发';
tabName[2] = '视频音乐';
tabName[3] = 'tab4';
tabName[4] = 'tab5';
tabName[5] = 'tab6';
tabName[6] = 'tab7';

/* bookmark */
var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();
bookmark[3] = new Array();
bookmark[4] = new Array();
bookmark[5] = new Array();
bookmark[6] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'Vinx Blog',
	'url':'https://vinshell.cc/blog/',
	'thumb':'vinxblog.png'
};
bookmark[0][1] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/u011471873',
	'thumb':'csdn.png'
};
bookmark[0][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[0][3] = {
	'title':'百度网盘',
	'url':'https://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[0][4] = {
	'title':'google',
	'url':'https://google.com',
	'thumb':'google.png'
};
bookmark[0][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[0][6] = {
	'title':'MSDN',
	'url':'https://developer.microsoft.com/en-us/windows/desktop/',
	'thumb':'msdn.png'
};
bookmark[0][7] = {
	'title':'谷歌翻译',
	'url':'https://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[0][8] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[0][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[0][10] = {
	'title':'5Sing',
	'url':'https://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[0][11] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[0][12] = {
	'title':'淘宝',
	'url':'https://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[0][13] = {
	'title':'京东',
	'url':'https://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[0][14] = {
	'title':'当当',
	'url':'http://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[0][15] = {
	'title':'新浪微博',
	'url':'https://weibo.com/',
	'thumb':'xinlangweibo.png'
};
// end of FIRST BLOCK
// THIRD BLOCK
bookmark[1][0] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/',
	'thumb':'csdn.png'
};
bookmark[1][1] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[1][2] = {
	'title':'博客园',
	'url':'https://www.cnblogs.com/',
	'thumb':'cnblogs.png'
};
bookmark[1][3] = {
	'title':'MSDN',
	'url':'https://developer.microsoft.com/en-us/windows/desktop/',
	'thumb':'msdn.png'
};
bookmark[1][4] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[1][5] = {
	'title':'码云',
	'url':'https://gitee.com/',
	'thumb':'gitee.png'
};
bookmark[1][6] = {
	'title':'吾爱破解',
	'url':'https://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[1][7] = {
	'title':'看雪',
	'url':'https://bbs.pediy.com/',
	'thumb':'pediy.png'
};
bookmark[1][8] = {
	'title':'NSISFans',
	'url':'https://www.nsisfans.com/',
	'thumb':'nsisfans.png'
};
bookmark[1][9] = {
	'title':'无忧启动',
	'url':'https://bbs.wuyou.net/',
	'thumb':'wuyou.png'
};
bookmark[1][10] = {
	'title':'IT天空',
	'url':'https://www.itsk.com/',
	'thumb':'itsk.png'
};
bookmark[1][11] = {
	'title':'菜鸟教程',
	'url':'https://www.runoob.com/',
	'thumb':'runoob.png'
};
bookmark[1][12] = {
	'title':'网易云课堂',
	'url':'https://study.163.com/',
	'thumb':'wyykt.png'
};
bookmark[1][13] = {
	'title':'腾讯课堂',
	'url':'https://ke.qq.com',
	'thumb':'txkt.png'
};
bookmark[1][14] = {
	'title':'百度传课',
	'url':'https://chuanke.baidu.com/',
	'thumb':'chuanke.png'
};
bookmark[1][15] = {
	'title':'学堂在线',
	'url':'https://www.xuetangx.com/',
	'thumb':'xuetangx.png'
};
// SECOND BLOCK
bookmark[2][0] = {
	'title':'5Sing',
	'url':'http://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[2][1] = {
	'title':'网易云音乐',
	'url':'https://music.163.com/',
	'thumb':'netease_cloud_music.png'

};
bookmark[2][2] = {
	'title':'酷狗音乐',
	'url':'https://www.kugou.com/',
	'thumb':'kugou.png'
};
bookmark[2][3] = {
	'title':'QQ音乐',
	'url':'https://y.qq.com/',
	'thumb':'qqmusic.png'
};
bookmark[2][4] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[2][5] = {
	'title':'腾讯视频',
	'url':'https://v.qq.com/',
	'thumb':'tencent_video.png'
};
bookmark[2][6] = {
	'title':'哔哩哔哩',
	'url':'https://www.bilibili.com/',
	'thumb':'bilibili.png'
};
bookmark[2][7] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[2][8] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[2][9] = {
	'title':'YY直播',
	'url':'https://www.yy.com/',
	'thumb':'yy.png'
};
bookmark[2][10] = {
	'title':'战旗直播',
	'url':'https://www.zhanqi.tv/',
	'thumb':'zhanqi.png'
};
bookmark[2][11] = {
	'title':'火猫直播',
	'url':'https://www.huomao.com/',
	'thumb':'huomao.png'
};
bookmark[2][12] = {
	'title':'none',
	'url':'#',
	'thumb':'none'
};
bookmark[2][13] = {
	'title':'none',
	'url':'#',
	'thumb':'none'
};
bookmark[2][14] = {
	'title':'none',
	'url':'#',
	'thumb':'none'
};
bookmark[2][15] = {
	'title':'none',
	'url':'#',
	'thumb':'none'
};
//end of SECOND BLOCK


bookmark[3][0] = {
	'title':'google',
	'url':'https://google.com',
	'thumb':'google.png'
};
bookmark[3][1] = {
	'title':'吾爱破解',
	'url':'https://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[3][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[3][3] = {
	'title':'百度网盘',
	'url':'https://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[3][4] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/u311471873',
	'thumb':'csdn.png'
};
bookmark[3][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[3][6] = {
	'title':'MSDN',
	'url':'https://msdn.microsoft.com/zh-cn/',
	'thumb':'msdn.png'
};
bookmark[3][7] = {
	'title':'谷歌翻译',
	'url':'https://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[3][8] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[3][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[3][10] = {
	'title':'5Sing',
	'url':'https://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[3][11] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[3][12] = {
	'title':'淘宝',
	'url':'https://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[3][13] = {
	'title':'京东',
	'url':'https://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[3][14] = {
	'title':'当当',
	'url':'https://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[3][15] = {
	'title':'新浪微博',
	'url':'https://weibo.com/',
	'thumb':'xinlangweibo.png'
};

bookmark[4][0] = {
	'title':'google',
	'url':'https://google.com',
	'thumb':'google.png'
};
bookmark[4][1] = {
	'title':'吾爱破解',
	'url':'https://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[4][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[4][3] = {
	'title':'百度网盘',
	'url':'https://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[4][4] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/u411471873',
	'thumb':'csdn.png'
};
bookmark[4][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[4][6] = {
	'title':'MSDN',
	'url':'https://msdn.microsoft.com/zh-cn/',
	'thumb':'msdn.png'
};
bookmark[4][7] = {
	'title':'谷歌翻译',
	'url':'https://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[4][8] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[4][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[4][10] = {
	'title':'5Sing',
	'url':'https://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[4][11] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[4][12] = {
	'title':'淘宝',
	'url':'https://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[4][13] = {
	'title':'京东',
	'url':'https://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[4][14] = {
	'title':'当当',
	'url':'https://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[4][15] = {
	'title':'新浪微博',
	'url':'https://weibo.com/',
	'thumb':'xinlangweibo.png'
};

bookmark[5][0] = {
	'title':'google',
	'url':'https://google.com',
	'thumb':'google.png'
};
bookmark[5][1] = {
	'title':'吾爱破解',
	'url':'https://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[5][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[5][3] = {
	'title':'百度网盘',
	'url':'https://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[5][4] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/u511471873',
	'thumb':'csdn.png'
};
bookmark[5][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[5][6] = {
	'title':'MSDN',
	'url':'https://msdn.microsoft.com/zh-cn/',
	'thumb':'msdn.png'
};
bookmark[5][7] = {
	'title':'谷歌翻译',
	'url':'https://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[5][8] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[5][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[5][10] = {
	'title':'5Sing',
	'url':'https://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[5][11] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[5][12] = {
	'title':'淘宝',
	'url':'https://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[5][13] = {
	'title':'京东',
	'url':'https://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[5][14] = {
	'title':'当当',
	'url':'https://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[5][15] = {
	'title':'新浪微博',
	'url':'https://weibo.com/',
	'thumb':'xinlangweibo.png'
};

bookmark[6][0] = {
	'title':'google',
	'url':'https://google.com',
	'thumb':'google.png'
};
bookmark[6][1] = {
	'title':'吾爱破解',
	'url':'https://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[6][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[6][3] = {
	'title':'百度网盘',
	'url':'https://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[6][4] = {
	'title':'CSDN',
	'url':'https://blog.csdn.net/u611471873',
	'thumb':'csdn.png'
};
bookmark[6][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[6][6] = {
	'title':'MSDN',
	'url':'https://msdn.microsoft.com/zh-cn/',
	'thumb':'msdn.png'
};
bookmark[6][7] = {
	'title':'谷歌翻译',
	'url':'https://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[6][8] = {
	'title':'优酷',
	'url':'https://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[6][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[6][10] = {
	'title':'5Sing',
	'url':'https://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[6][11] = {
	'title':'YouTube',
	'url':'https://youtube.com',
	'thumb':'youtube.png'
};
bookmark[6][12] = {
	'title':'淘宝',
	'url':'https://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[6][13] = {
	'title':'京东',
	'url':'https://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[6][14] = {
	'title':'当当',
	'url':'https://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[6][15] = {
	'title':'新浪微博',
	'url':'https://weibo.com/',
	'thumb':'xinlangweibo.png'
};
