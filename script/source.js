
var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 1; // set number of screens (1 or 2 or 3)
 
var TabName = new Array(); // set names of blocks
TabName[1] = '常用网址';
TabName[2] = '';
TabName[3] = '';
TabName[4] = '';
TabName[5] = '';
TabName[6] = '';
TabName[7] = '';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'google',
	'url':'http://google.com',
	'thumb':'google.png'
};
bookmark[0][1] = {
	'title':'吾爱破解',
	'url':'http://www.52pojie.cn/',
	'thumb':'52pj.png'
};
bookmark[0][2] = {
	'title':'Github',
	'url':'https://github.com',
	'thumb':'github.png'
};
bookmark[0][3] = {
	'title':'百度网盘',
	'url':'http://pan.baidu.com',
	'thumb':'baiduwangpan.png'
};
bookmark[0][4] = {
	'title':'CSDN',
	'url':'http://blog.csdn.net/u011471873',
	'thumb':'csdn.png'
};
bookmark[0][5] = {
	'title':'开源中国',
	'url':'https://www.oschina.net',
	'thumb':'oschina.png'
};
bookmark[0][6] = {
	'title':'MSDN',
	'url':'https://msdn.microsoft.com/zh-cn/',
	'thumb':'msdn.png'
};
bookmark[0][7] = {
	'title':'谷歌翻译',
	'url':'http://translate.google.cn/',
	'thumb':'googletranslate.png'
};
bookmark[0][8] = {
	'title':'优酷',
	'url':'http://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[0][9] = {
	'title':'斗鱼',
	'url':'https://www.douyu.com/',
	'thumb':'douyu.png'
};
bookmark[0][10] = {
	'title':'5Sing',
	'url':'http://5sing.kugou.com/',
	'thumb':'5sing.png'
};
bookmark[0][11] = {
	'title':'YouTube',
	'url':'http://youtube.com',
	'thumb':'youtube.png'
};
bookmark[0][12] = {
	'title':'淘宝',
	'url':'http://www.taobao.com/',
	'thumb':'taobao.png'
};
bookmark[0][13] = {
	'title':'京东',
	'url':'http://www.jd.com/',
	'thumb':'jingdong.png'
};
bookmark[0][14] = {
	'title':'当当',
	'url':'http://www.dangdang.com/',
	'thumb':'dangdang.png'
};
bookmark[0][15] = {
	'title':'新浪微博',
	'url':'http://weibo.com/',
	'thumb':'xinlangweibo.png'
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'linkedin',
	'url':'http://www.linkedin.com/',
	'thumb':'linkedin.png'
};
bookmark[1][1] = {
	'title':'digg',
	'url':'http://digg.com/',
	'thumb':'digg.png'
};
bookmark[1][2] = {
	'title':'flickr',
	'url':'http://www.flickr.com/',
	'thumb':'flickr.png'
};
bookmark[1][3] = {
	'title':'msn',
	'url':'http://www.msn.com/',
	'thumb':'msn.png'
};
bookmark[1][4] = {
	'title':'reddit',
	'url':'http://www.reddit.com/',
	'thumb':'reddit.png'
};
bookmark[1][5] = {
	'title':'skype',
	'url':'http://www.skype.com/',
	'thumb':'skype.png'
};
bookmark[1][6] = {
	'title':'technorati',
	'url':'http://technorati.com',
	'thumb':'technorati.png'
};
bookmark[1][7] = {
	'title':'delicious',
	'url':'http://www.delicious.com/',
	'thumb':'delicious.png'
};
bookmark[1][8] = {
	'title':'MySpace',
	'url':'http://www.myspace.com/',
	'thumb':'myspace.png'
};
bookmark[1][9] = {
	'title':'orkut',
	'url':'http://www.orkut.com/',
	'thumb':'orkut.png'
};
bookmark[1][10] = {
	'title':'tumblr',
	'url':'http://www.tumblr.com/',
	'thumb':'tumblr.png'
};
bookmark[1][11] = {
	'title':'StumbleUpon',
	'url':'http://www.stumbleupon.com/',
	'thumb':'stumbleupon.png'
};
bookmark[1][12] = {
	'title':'StumbleUpon',
	'url':'http://www.stumbleupon.com/',
	'thumb':'stumbleupon.png'
};
bookmark[1][13] = {
	'title':'StumbleUpon',
	'url':'http://www.stumbleupon.com/',
	'thumb':'stumbleupon.png'
};
bookmark[1][14] = {
	'title':'StumbleUpon',
	'url':'http://www.stumbleupon.com/',
	'thumb':'stumbleupon.png'
};
bookmark[1][15] = {
	'title':'StumbleUpon',
	'url':'http://www.stumbleupon.com/',
	'thumb':'stumbleupon.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'eurosport',
	'url':'http://www.eurosport.com/',
	'thumb':'eurosport.png'
};
bookmark[2][1] = {
	'title':'amazon',
	'url':'http://www.amazon.com/',
	'thumb':'amazon.png'
};
bookmark[2][2] = {
	'title':'eBay',
	'url':'http://www.ebay.com/',
	'thumb':'ebay.png'
};
bookmark[2][3] = {
	'title':'IMDb',
	'url':'http://www.imdb.com/',
	'thumb':'imdb.png'
};
bookmark[2][4] = {
	'title':'vimeo',
	'url':'http://vimeo.com',
	'thumb':'vimeo.png'
};
bookmark[2][5] = {
	'title':'lifehacker',
	'url':'http://lifehacker.com/',
	'thumb':'lifehacker.png'
};
bookmark[2][6] = {
	'title':'engadged',
	'url':'http://www.engadget.com/',
	'thumb':'engadget.png'
};
bookmark[2][7] = {
	'title':'zune',
	'url':'http://www.zune.net/',
	'thumb':'zune.png'
};
bookmark[2][8] = {
	'title':'dropbox',
	'url':'http://www.dropbox.com/',
	'thumb':'dropbox.png'
};
bookmark[2][9] = {
	'title':'National Geographic',
	'url':'http://www.nationalgeographic.com/',
	'thumb':'natgeo.png'
};
bookmark[2][10] = {
	'title':'CBC news',
	'url':'http://www.cbc.ca/news/',
	'thumb':'cbcnews.png'
};
bookmark[2][11] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};
bookmark[2][12] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};
bookmark[2][13] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};
bookmark[2][14] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};
bookmark[2][15] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};