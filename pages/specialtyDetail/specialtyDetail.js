// pages/specialtyDetail/specialtyDetail.js
const app = getApp()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		carousel: [
			{
				id: 10000,							//配置 id
				type: 1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			},
			{
				id: 10000,							//配置 id
				type: 1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			},
			{
				id: 10000,							//配置 id
				type: 1,								//配置 type
				imageUrl: "https://img3.doubanio.com/mpic/s1001902.jpg",	//图片 url
			}
		],

		id: 10000,							//商品 id
		title: "测试title",				   //显示 title
		price: "测试价格",						//价格
		freeShip:true,
		specification: "测试规格",				//规格
		origin:"山西运城",						//产地
		originIntro:"产地介绍",
		breifIntroduction:null,
		// breifIntroduction: "还要住宅区距离这条路有点距离，不然人太多，乱的很老板必须做好两件事：1、分好钱，作为经济人，谈钱伤感情，不谈钱没人性；工作不给力，是因为钱分的不到位。2、安好心，作为情感人，身在哪里有时不重要，要看心在哪里；工作不用心，是因为心不安、志不定，心不在何以用。经营，就是经营人心；管理，就是管理利益！",					//简介
		nutritionalValue: "营养价值",			//营养价值
		locationName: "山西运城XX",
		longitude: 111.0,					//经度
		latitude: 123.333,					//纬度
		honor: "荣誉",							//荣誉
		story: "典故",							//故事
		history:"历史",						//历史
		mobile:"17317160359",				//联系人

		carouselImageUrls: [

		],

		haveBriefIntro: false,
		haveNutritionalValue:false,
		haveHonor:false,
		haveHistory:false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.dealData()
	},

	dealData: function () {
		//deal carouselUrls
		var data = this.data;
		var carouselUrls = [];
		for (var num = 0; num < data.carousel.length; ++num) {
			var item = this.data.carousel[num];
			carouselUrls[num] = item.imageUrl;
		}
		console.log(app.isNullOrEmptyString(data.breifIntroduction))
		
		this.setData({
			carouselImageUrls: carouselUrls,
			haveBriefIntro: !app.isNullOrEmptyString(data.breifIntroduction),
			haveNutritionalValue: !app.isNullOrEmptyString(data.nutritionalValue),
			haveHonor: !app.isNullOrEmptyString(data.honor),
			haveHistory: !app.isNullOrEmptyString(data.history),
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})